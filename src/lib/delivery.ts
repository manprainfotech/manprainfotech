import { promises as fs } from "fs";
import path from "path";
import type { Order, Product, LicenseKey } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { formatPrice, currency } from "@/lib/format";
import { getSiteUrl } from "@/lib/site";

export function buildEmailPayload(
  order: Order,
  product: Product,
  key: LicenseKey
) {
  return [
    `Hi ${order.customerName},`,
    "",
    `Thanks for your purchase from ${getSiteUrl()}.`,
    "",
    `Product: ${product.title}`,
    `License Key: ${key.key}`,
    `Order ID: ${order.id}`,
    `Price Paid: ${formatPrice(product.price)} ${currency}`,
    "",
    "Activation steps:",
    "1) Download the official installer from the vendor website.",
    "2) Run the installer and choose Activate/Sign in.",
    "3) Enter the license key above.",
    "",
    "If you need help, reply to this email and our team will assist you.",
    "",
    "Manpra Infotech",
  ].join("\n");
}

export function buildWhatsAppPayload(
  order: Order,
  product: Product,
  key: LicenseKey
) {
  const message = [
    `Order ${order.id} confirmed ✅`,
    `${product.title}`,
    `License Key: ${key.key}`,
    `Download & activate from vendor site.`,
    `Support: ${getSiteUrl()}`,
  ].join("\n");

  return JSON.stringify(
    {
      to: order.phone,
      message,
    },
    null,
    2
  );
}

export async function saveEmailPayload(orderId: string, payload: string) {
  const dir = path.join(process.cwd(), "tmp", "emails");
  await fs.mkdir(dir, { recursive: true });
  const filePath = path.join(dir, `order-${orderId}.txt`);
  await fs.writeFile(filePath, payload, "utf8");
}

export async function deliverOrder(orderId: string) {
  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.order.findUnique({
      where: { id: orderId },
      include: { product: true, licenseKey: true },
    });

    if (!order) throw new Error("Order not found");

    if (order.deliveryStatus === "DELIVERED" && order.licenseKeyId) {
      return order;
    }

    let key = order.licenseKey;

    if (!key) {
      key = await tx.licenseKey.findFirst({
        where: { productId: order.productId, usedAt: null },
        orderBy: { createdAt: "asc" },
      });
    }

    if (!key) throw new Error("No available license keys");

    if (!key.usedAt) {
      await tx.licenseKey.update({
        where: { id: key.id },
        data: { usedAt: new Date() },
      });
    }

    const emailPayload = buildEmailPayload(order, order.product, key);
    const whatsappPayload = buildWhatsAppPayload(order, order.product, key);

    return tx.order.update({
      where: { id: orderId },
      data: {
        status: "PAID",
        deliveryStatus: "DELIVERED",
        licenseKeyId: key.id,
        deliveredAt: new Date(),
        emailPayload,
        whatsappPayload,
      },
      include: { product: true, licenseKey: true },
    });
  });

  if (result.emailPayload) {
    await saveEmailPayload(result.id, result.emailPayload);
  }

  return result;
}

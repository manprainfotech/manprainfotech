import { prisma } from "@/lib/prisma";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";

function escapeCsv(value: string) {
  const escaped = value.replace(/"/g, '""');
  return `"${escaped}"`;
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "asc" },
  });

  const header = [
    "id",
    "title",
    "description",
    "link",
    "image_link",
    "price",
    "availability",
    "brand",
    "condition",
  ];

  const rows = products.map((product) => {
    const price = `${(product.price / 100).toFixed(2)} INR`;
    return [
      escapeCsv(product.id),
      escapeCsv(product.title),
      escapeCsv(product.shortDescription),
      escapeCsv(`${siteUrl}/products/${product.slug}`),
      escapeCsv(product.imageUrl),
      escapeCsv(price),
      escapeCsv("in stock"),
      escapeCsv(product.brand),
      escapeCsv("new"),
    ].join(",");
  });

  const csv = [header.join(","), ...rows].join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}

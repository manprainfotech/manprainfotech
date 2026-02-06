import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "quick-heal-total-security-1pc-1y",
    title: "Quick Heal Total Security",
    brand: "Quick Heal",
    shortDescription: "Complete ransomware protection with safe banking tools for 1 PC.",
    imageUrl: "https://placehold.co/800x600/png?text=Quick+Heal+Total+Security",
    mrp: 9999,
    price: 6999,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,1pc,1year",
  },
  {
    slug: "kaspersky-standard-1device-1y",
    title: "Kaspersky Standard",
    brand: "Kaspersky",
    shortDescription: "Real-time protection with performance boost for 1 device.",
    imageUrl: "https://placehold.co/800x600/png?text=Kaspersky+Standard",
    mrp: 8999,
    price: 6499,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,1device,1year",
  },
  {
    slug: "mcafee-total-protection-5devices-1y",
    title: "McAfee Total Protection",
    brand: "McAfee",
    shortDescription: "Cross-device security + identity monitoring for 5 devices.",
    imageUrl: "https://placehold.co/800x600/png?text=McAfee+Total+Protection",
    mrp: 12999,
    price: 8999,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,5devices,1year",
  },
  {
    slug: "norton-360-deluxe-5devices-1y",
    title: "Norton 360 Deluxe",
    brand: "Norton",
    shortDescription: "Secure VPN + dark web monitoring for 5 devices.",
    imageUrl: "https://placehold.co/800x600/png?text=Norton+360+Deluxe",
    mrp: 13999,
    price: 9499,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,5devices,1year",
  },
  {
    slug: "bitdefender-total-security-5devices-1y",
    title: "Bitdefender Total Security",
    brand: "Bitdefender",
    shortDescription: "Multi-layer protection with minimal system impact.",
    imageUrl: "https://placehold.co/800x600/png?text=Bitdefender+Total+Security",
    mrp: 14999,
    price: 9999,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,5devices,1year",
  },
  {
    slug: "avast-premium-security-1pc-1y",
    title: "Avast Premium Security",
    brand: "Avast",
    shortDescription: "Advanced protection against phishing, ransomware, and hackers.",
    imageUrl: "https://placehold.co/800x600/png?text=Avast+Premium+Security",
    mrp: 7999,
    price: 5499,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,1pc,1year",
  },
  {
    slug: "eset-internet-security-1device-1y",
    title: "ESET Internet Security",
    brand: "ESET",
    shortDescription: "Secure browsing, banking, and webcam for 1 device.",
    imageUrl: "https://placehold.co/800x600/png?text=ESET+Internet+Security",
    mrp: 8999,
    price: 6399,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,1device,1year",
  },
  {
    slug: "trend-micro-maximum-security-3devices-1y",
    title: "Trend Micro Maximum Security",
    brand: "Trend Micro",
    shortDescription: "Privacy scanner and pay guard for 3 devices.",
    imageUrl: "https://placehold.co/800x600/png?text=Trend+Micro+Maximum+Security",
    mrp: 11999,
    price: 8299,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,3devices,1year",
  },
  {
    slug: "sophos-home-premium-10devices-1y",
    title: "Sophos Home Premium",
    brand: "Sophos",
    shortDescription: "Business-grade protection for up to 10 devices.",
    imageUrl: "https://placehold.co/800x600/png?text=Sophos+Home+Premium",
    mrp: 15999,
    price: 10999,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,10devices,1year",
  },
  {
    slug: "malwarebytes-premium-1device-1y",
    title: "Malwarebytes Premium",
    brand: "Malwarebytes",
    shortDescription: "Stops malware, ransomware, and malicious sites.",
    imageUrl: "https://placehold.co/800x600/png?text=Malwarebytes+Premium",
    mrp: 6999,
    price: 4999,
    deliveryType: "Instant Email + WhatsApp",
    tags: "antivirus,1device,1year",
  }
];

async function main() {
  await prisma.order.deleteMany();
  await prisma.licenseKey.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({ data: product });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

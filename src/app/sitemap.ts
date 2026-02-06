import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getSiteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const products = await prisma.product.findMany({
    select: { slug: true, updatedAt: true },
  });

  return [
    { url: `${siteUrl}/`, lastModified: new Date() },
    { url: `${siteUrl}/products`, lastModified: new Date() },
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified: product.updatedAt,
    })),
  ];
}

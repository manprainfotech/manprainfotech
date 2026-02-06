import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

function escapeCsv(value) {
  const escaped = value.replace(/"/g, '""');
  return `"${escaped}"`;
}

async function main() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:5051";
  const dataPath = path.join(process.cwd(), "src", "data", "products.json");
  const raw = await readFile(dataPath, "utf8");
  const products = JSON.parse(raw);

  const header = [
    "id",
    "title",
    "description",
    "link",
    "image_link",
    "availability",
    "price",
    "brand",
    "google_product_category",
  ];

  const rows = products.map((product) => {
    const price = `${(product.price / 100).toFixed(2)} INR`;
    return [
      escapeCsv(product.id),
      escapeCsv(product.title),
      escapeCsv(product.shortDescription),
      escapeCsv(`${siteUrl}/products/${product.slug}/`),
      escapeCsv(product.imageUrl),
      escapeCsv("in stock"),
      escapeCsv(price),
      escapeCsv(product.brand),
      escapeCsv("Software > Computer Software > Antivirus & Security Software"),
    ].join(",");
  });

  const csv = [header.join(","), ...rows].join("\n");
  const dir = path.join(process.cwd(), "public", "merchant");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "feed.csv"), csv, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import rawProducts from "./products.json";

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  shortDescription: string;
  imageUrl: string;
  mrp: number;
  price: number;
  deliveryType: string;
  tags: string;
};

export const products = rawProducts as Product[];

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

import { redirect } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export default function ProductRedirectPage({ params }: PageProps) {
  redirect(`/products/${params.slug}`);
}

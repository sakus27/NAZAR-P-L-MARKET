import { getActiveProducts } from "@/data/products";
import CatalogClient from "./CatalogClient";
import { Suspense } from "react";
import WholesaleSection from "@/components/WholesaleSection";

export const metadata = {
  title: "Ürün Kataloğu | Nazar Piliç Market",
  description: "Nazar Piliç Market'in taze ve lezzetli piliç ürünleri.",
};

export default async function CatalogPage() {
  const products = await getActiveProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <Suspense fallback={<div className="text-center py-12">Yükleniyor...</div>}>
        <CatalogClient initialProducts={products} />
      </Suspense>
      <div className="mt-16">
        <WholesaleSection />
      </div>
    </div>
  );
}

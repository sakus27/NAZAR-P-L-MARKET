import CartClient from "./CartClient";

export const metadata = {
  title: "Sipariş Listesi | Nazar Piliç Market",
  description: "Sipariş listenizi inceleyin ve WhatsApp üzerinden siparişinizi tamamlayın.",
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold text-brand-charcoal mb-8">Sipariş Listeniz</h1>
      <CartClient />
    </div>
  );
}

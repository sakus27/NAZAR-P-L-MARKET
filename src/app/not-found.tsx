import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mb-6">
        <Logo variant="badge" size="lg" />
      </div>
      <span className="text-sm font-extrabold uppercase tracking-widest text-brand-red mb-2 block">
        404 • Sayfa Bulunamadı
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal mb-4">
        Aradığınız Sayfaya Ulaşılamadı
      </h1>
      <p className="text-brand-text-secondary text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
        Görünüşe göre aradığınız sayfa taşınmış veya silinmiş olabilir. Taze piliç ve şarküteri çeşitlerimize göz atmak için ana sayfaya veya ürün kataloğumuza dönebilirsiniz.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-charcoal hover:bg-brand-red text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Sayfaya Dön</span>
        </Link>
        <Link
          href="/katalog"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-brand-offwhite text-brand-charcoal text-sm font-bold rounded-xl border border-brand-border transition-colors shadow-xs"
        >
          <ShoppingBag className="w-4 h-4 text-brand-red" />
          <span>Tüm Ürünleri İncele</span>
        </Link>
      </div>
    </div>
  );
}

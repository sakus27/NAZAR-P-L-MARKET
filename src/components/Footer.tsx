import Link from "next/link";
import { STORE_CONFIG, CATEGORIES } from "@/data/config";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="iletisim" className="bg-brand-charcoal text-brand-offwhite pt-16 pb-8 scroll-mt-20 border-t-4 border-brand-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="bg-white/5 p-3 rounded-2xl inline-block border border-white/10">
              <Logo variant="horizontal" className="[&_span]:!text-white [&_span.text-brand-red]:!text-red-400" />
            </div>
            <p className="text-sm text-brand-border/80 leading-relaxed">
              2005'ten bu yana İnegöl'de taze kesim tavuk, kasap yapımı özel soslu kanat ve nar gibi kızarmış piliç lezzetleri sunuyoruz.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#1fb355] text-white text-xs font-bold rounded-xl transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Sipariş: {STORE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span>Kategoriler</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/katalog" className="text-sm text-brand-border/80 hover:text-white transition-colors">
                  Tüm Ürünler (22 Çeşit)
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/katalog?kategori=${cat.slug}`} 
                    className="text-sm text-brand-border/80 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.nameTr}</span>
                    <span className="text-xs text-white/30 group-hover:text-white/70">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span>İletişim & Çalışma Saatleri</span>
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white block">Adres</span>
                  <span className="text-xs text-brand-border/80 leading-relaxed">{STORE_CONFIG.address}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <div>
                    <span className="text-[11px] font-semibold text-brand-border/60 uppercase tracking-wider block">Dükkan Tel</span>
                    <a href={`tel:${STORE_CONFIG.landlinePhoneRaw}`} className="text-xs font-bold text-white hover:text-brand-red transition-colors">
                      {STORE_CONFIG.landlinePhone}
                    </a>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-brand-border/60 uppercase tracking-wider block">WhatsApp / Sipariş</span>
                    <a href={`tel:${STORE_CONFIG.phone.replace(/[^0-9]/g, '')}`} className="text-xs font-bold text-white hover:text-brand-red transition-colors">
                      {STORE_CONFIG.phone}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-white block">Çalışma Saatleri</span>
                  <span className="text-xs text-brand-border/80">{STORE_CONFIG.openingHours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Compact Map Widget */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span>Konumumuz (İnegöl)</span>
            </h4>
            <div className="bg-white/5 p-2 rounded-2xl border border-white/10 space-y-2.5 shadow-md">
              <div className="relative w-full h-36 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  title="Nazar Piliç Market İnegöl Konum Haritası"
                  src={STORE_CONFIG.mapsEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(15%) contrast(1.1)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-1.5 text-xs text-brand-border/80">
                  <Navigation className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  <span className="truncate">Süleymaniye, İnegöl</span>
                </div>
                <a
                  href={STORE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-white bg-brand-red hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors shrink-0"
                >
                  <span>Haritada Aç</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-border/60">
            &copy; 2026 {STORE_CONFIG.brandName}. 2005'ten bu yana İnegöl'de taze lezzet. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-brand-border/60">İnegöl / Bursa</span>
            <span className="text-xs text-brand-border/40">•</span>
            <a href={`https://wa.me/${STORE_CONFIG.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-border/80 hover:text-white transition-colors">
              WhatsApp Sipariş
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

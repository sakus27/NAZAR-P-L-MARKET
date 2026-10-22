import Image from "next/image";
import { Phone, MessageCircle, Truck, Snowflake, PackageCheck, BadgeCheck } from "lucide-react";
import { STORE_CONFIG } from "@/data/config";

const WHOLESALE_PRODUCTS = [
  {
    id: "toptan-sis-sawarma",
    title: "Şiş Şawarma",
    subtitle: "Döner / Şawarma Şişi",
    description:
      "Özenle marine edilmiş, dilimlenip şişe dizilmiş taze piliç şawarma şişi. Şawarma ve döner işletmeleri için hazır, tutarlı lezzet.",
    image: "/images/products/toptan-sis-sawarma.jpg",
    tag: "Şawarma Dükkanları İçin",
    features: ["Hazır marine edilmiş", "Düzenli ve istikrarlı kalite", "Toplu sipariş"],
    message: "Merhaba, şawarma şişi için toptan sipariş vermek istiyorum.",
  },
  {
    id: "toptan-tantuni",
    title: "Tantuni Tavuğu",
    subtitle: "Taze Piliç Bonfile",
    description:
      "Tantuni usulü ince doğranmış, günlük taze piliç göğüs eti. Tantuni ve sac tava işletmeleri için kilo ile toplu tedarik.",
    image: "/images/products/toptan-tantuni.jpg",
    tag: "Tantuni Dükkanları İçin",
    features: ["Günlük taze kesim", "Tantuni inceliğinde doğranmış", "Toplu sipariş"],
    message: "Merhaba, tantuni için tavuk eti toptan sipariş vermek istiyorum.",
  },
];

export default function WholesaleSection() {
  return (
    <section
      id="toptan"
      aria-labelledby="toptan-baslik"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-charcoal via-[#2C2D31] to-[#1f2023] text-white shadow-2xl border border-brand-charcoal"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-red/20 blur-3xl pointer-events-none" />

      <div className="relative p-5 sm:p-10">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-red text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-md">
            <PackageCheck className="w-3.5 h-3.5" />
            Toptan Satış
          </span>
          <h2 id="toptan-baslik" className="mt-4 text-2xl sm:text-4xl font-black leading-tight">
            Şawarma ve Tantuni İşletmelerine <span className="text-brand-red">Toptan Tedarik</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/75 leading-relaxed">
            Nazar Piliç olarak 2005&apos;ten beri taze piliç tedarik ediyoruz. Şawarma ve tantuni dükkanlarına
            yüksek miktarlarda, düzenli ve güvenilir toptan satış yapıyoruz. Sipariş miktarınıza özel
            teklif için bizimle iletişime geçin.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {WHOLESALE_PRODUCTS.map((item) => {
            const wa = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(item.message)}`;
            return (
              <article
                key={item.id}
                className="group bg-white text-brand-charcoal rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - toptan satış`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 text-brand-red text-[11px] font-extrabold shadow">
                    {item.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red text-white text-[11px] font-bold">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Toptan
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-red">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black mt-0.5">{item.title}</h3>
                  <p className="text-sm text-brand-text-secondary mt-2 leading-relaxed">{item.description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-brand-border flex flex-col sm:flex-row gap-2.5 mt-auto">
                    <a
                      id={`${item.id}-whatsapp`}
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:brightness-95 transition shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp ile Teklif Al
                    </a>
                    <a
                      id={`${item.id}-ara`}
                      href={`tel:${STORE_CONFIG.landlinePhoneRaw}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-charcoal text-white text-sm font-bold hover:bg-brand-red transition shadow-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Hemen Ara
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          {[
            { icon: Snowflake, text: "Soğuk zincire uygun, hijyenik" },
            { icon: PackageCheck, text: "İşletmenize özel miktar" },
            { icon: Truck, text: "Düzenli ve zamanında tedarik" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Icon className="w-5 h-5 text-brand-red shrink-0" />
              <span className="font-semibold text-white/90">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

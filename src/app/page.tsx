import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles, Award, ShieldCheck, Flame, Clock } from "lucide-react";
import { getFeaturedProducts, getActiveProducts } from "@/data/products";
import { CATEGORIES, STORE_CONFIG } from "@/data/config";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const allFeatured = await getFeaturedProducts();
  // Strictly take the top 7 featured products to reserve the 8th slot for the catalog CTA card
  const featuredProducts = allFeatured.slice(0, 7);
  const activeProducts = await getActiveProducts();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[75vh] min-h-[580px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.webp"
            alt="Nazar Piliç Market Taze Tavuk Ürünleri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/75 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-red text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2005'ten Bu Yana • İnegöl</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              Taze, Günlük ve <br/><span className="text-brand-red">Lezzetli</span> Piliç.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-offwhite/90 mb-8 max-w-lg leading-relaxed font-normal">
              Özel marine soslu kanattan, nar gibi kızarmış bütün tavuğa ve doğal köy sütüne kadar sofranıza layık tüm lezzetler Nazar Piliç'te.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/katalog" 
                className="bg-brand-red text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white hover:text-brand-charcoal transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Tüm Ürünleri Keşfet
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/#iletisim" 
                className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                Konum ve İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Curated Categories Section */}
      <section className="py-10 sm:py-20 bg-brand-offwhite border-b border-brand-border/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6 sm:mb-12 gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-brand-red">
                Özenle Hazırlanmış Çeşitler
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal mt-0.5">
                Kategoriler
              </h2>
              <p className="text-brand-text-secondary text-xs sm:text-sm mt-0.5">
                İhtiyacınıza uygun taze piliç ve şarküteri reyonlarımızı inceleyin.
              </p>
            </div>
            <Link 
              href="/katalog" 
              className="text-xs font-bold text-brand-charcoal hover:text-brand-red flex items-center gap-1 group shrink-0"
            >
              <span className="hidden sm:inline">Tüm 22 Ürünü Listele</span>
              <span className="sm:hidden text-brand-red font-extrabold">Tümünü Gör</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-red" />
            </Link>
          </div>
          
          {/* Horizontal scrollable rail on mobile, full grid on sm and up */}
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 sm:gap-5">
            {CATEGORIES.map((category) => {
              const count = activeProducts.filter((p) => p.categoryId === category.id).length;
              return (
                <Link 
                  key={category.id} 
                  href={`/katalog?kategori=${category.slug}`}
                  className="group relative w-[160px] sm:w-auto h-48 sm:h-64 shrink-0 snap-start rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-border flex flex-col justify-end p-3.5 sm:p-5"
                >
                  {/* Background Category Image */}
                  <Image
                    src={category.image}
                    alt={category.nameTr}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 50vw, 20vw"
                  />
                  {/* Deep Gradient Overlays for High Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/60 to-transparent" />
                  <div className="absolute inset-0 bg-brand-charcoal/20 group-hover:bg-brand-red/10 transition-colors" />

                  {/* Top Badge: Item Count */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white/95 backdrop-blur-md text-brand-charcoal text-[10px] sm:text-[11px] font-bold shadow-xs">
                      {count} Çeşit
                    </span>
                  </div>

                  {/* Content Area */}
                  <div className="relative z-10 flex flex-col">
                    <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-red-300 transition-colors leading-tight">
                      {category.nameTr}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/80 line-clamp-1 mt-0.5 sm:mt-1 leading-snug">
                      {category.descriptionTr}
                    </p>
                    <div className="mt-2 sm:mt-3 flex items-center text-[11px] sm:text-xs font-semibold text-white/90 group-hover:text-white transition-colors">
                      <span className="group-hover:underline">İncele</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform text-brand-red" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products: 7 Products + 1 Interactive CTA Card */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-6 sm:mb-12">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-brand-red">
                İnegöl'ün Favorileri
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-charcoal mt-0.5">
                Öne Çıkan Ürünler
              </h2>
              <p className="text-brand-text-secondary text-xs sm:text-sm mt-0.5">
                Günlük taze kesim ve en çok tercih edilen lezzetlerimiz.
              </p>
            </div>
            <Link 
              href="/katalog" 
              className="flex items-center text-brand-red font-bold text-xs sm:text-sm hover:underline"
            >
              <span className="hidden sm:inline">Tüm Kataloğu Gör</span>
              <span className="sm:hidden font-extrabold">Tümü</span>
              <ChevronRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {/* 7 Featured Products */}
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}

            {/* 8th Slot: Special CTA Card to View Entire Catalog */}
            <Link
              href="/katalog"
              className="group relative bg-gradient-to-br from-brand-charcoal via-[#2C2D31] to-brand-charcoal text-white rounded-xl sm:rounded-2xl overflow-hidden border border-brand-charcoal/20 hover:border-brand-red p-3 sm:p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 h-full min-h-[220px] sm:min-h-[380px]"
            >
              <div className="space-y-2 sm:space-y-4">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Katalog
                </span>
                
                <div>
                  <h3 className="text-sm sm:text-2xl font-black text-white leading-tight">
                    Tüm Ürünleri<br />
                    <span className="text-brand-red">Keşfedin</span>
                  </h3>
                  <p className="text-[10px] sm:text-xs text-brand-offwhite/80 leading-relaxed mt-1 sm:mt-2.5 line-clamp-2 sm:line-clamp-none">
                    Taze piliçten köy sütüne 22 çeşit ürünümüzü inceleyin.
                  </p>
                </div>
              </div>

              <div className="pt-2.5 sm:pt-6 border-t border-white/10 flex items-center justify-between mt-2 sm:mt-0">
                <div>
                  <span className="text-lg sm:text-3xl font-black text-white block leading-none">22</span>
                  <span className="text-[9px] sm:text-[11px] text-white/60 font-semibold uppercase tracking-wider">
                    Çeşit Ürün
                  </span>
                </div>
                <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-brand-red text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-charcoal transition-all shadow-md group-hover:scale-105">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-6 sm:mt-10 text-center md:hidden">
            <Link 
              href="/katalog" 
              className="inline-flex items-center justify-center w-full py-3 bg-brand-charcoal text-white rounded-xl font-bold text-sm hover:bg-brand-red transition-colors shadow-sm"
            >
              <span>Tüm 22 Ürünü Gör</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section / Story */}
      <section id="hakkimizda" className="py-20 bg-brand-offwhite border-t border-brand-border/60 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-charcoal text-white text-xs font-bold tracking-widest uppercase">
                Hakkımızda
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight">
                2005'ten Bu Yana İnegöl'de <br />
                <span className="text-brand-red">Güven ve Lezzet Dolu Hizmet</span>
              </h2>
              <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                Nazar Piliç Market olarak, kurulduğumuz 2005 yılından bu yana İnegöl halkına her gün taze, hijyenik ve en kaliteli piliç ürünlerini ulaştırıyoruz.
              </p>
              <p className="text-brand-text-secondary text-sm sm:text-base leading-relaxed">
                Kasaplarımızın özenle hazırladığı özel mangal soslu kanat, çıtır kelebek, fırınlık pirzola ve nar gibi kızarmış bütün tavuğumuzla sofralarınıza lezzet katıyoruz.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-brand-border">
                  <Award className="w-6 h-6 text-brand-red mb-2" />
                  <span className="text-lg font-bold text-brand-charcoal block">19+ Yıl</span>
                  <span className="text-xs text-brand-text-secondary">Sektör Tecrübesi</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-brand-border">
                  <ShieldCheck className="w-6 h-6 text-brand-red mb-2" />
                  <span className="text-lg font-bold text-brand-charcoal block">%100 Taze</span>
                  <span className="text-xs text-brand-text-secondary">Günlük Sevkiyat</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-brand-border col-span-2 sm:col-span-1">
                  <Flame className="w-6 h-6 text-brand-red mb-2" />
                  <span className="text-lg font-bold text-brand-charcoal block">Özel Sos</span>
                  <span className="text-xs text-brand-text-secondary">Kasap Marinasyonu</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-brand-border bg-brand-charcoal">
              <Image
                src="/hero.webp"
                alt="Nazar Piliç Market Mağaza ve Taze Ürünler"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-extrabold text-xl">Nazar Piliç Market</p>
                  <p className="text-sm text-white/80">İnegöl / Bursa • WhatsApp Sipariş Hattı: {STORE_CONFIG.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

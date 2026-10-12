export interface ProductVariant {
  id: string;
  label: string; // e.g. "500 g", "1 kg", "1 L", "5 kg (Bidon)", "1 Adet (~1.5 kg)"
  price: number;
  promotionalPrice?: number;
  isAvailable: boolean;
  priceStatus: "provided" | "estimated";
}

export interface Product {
  id: string;
  slug: string;
  nameTr: string;
  descriptionTr?: string;
  categoryId: string; // "beyaz-et" | "soslu-marine" | "corbalik" | "sakatat" | "sut-sarkuteri"
  images: string[];
  variants: ProductVariant[];
  unitReferencePrice?: {
    pricePerKg?: number;
    estimatedWeightKg?: number;
    unitLabel?: string;
  };
  isActive: boolean;
  isFeatured: boolean;
  sortOrder: number;
}

export const PRODUCTS: Product[] = [
  // 1. Bonfile (250 TL/kg)
  {
    id: "p-bonfile",
    slug: "bonfile",
    nameTr: "Bonfile",
    descriptionTr: "Tavuk göğsünden özenle hazırlanan, yağsız ve taze kemiksiz göğüs fileto.",
    categoryId: "beyaz-et",
    images: ["/images/products/bonfile.webp"],
    variants: [
      { id: "v-bonfile-500g", label: "500 g", price: 125.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-bonfile-1kg", label: "1 kg", price: 250.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 1,
  },
  // 2. Bonfile Kuşbaşı (250 TL/kg)
  {
    id: "p-bonfile-kusbasi",
    slug: "bonfile-kus-basi",
    nameTr: "Bonfile Kuşbaşı",
    descriptionTr: "Taze tavuk bonfilenin sote ve tencere yemekleri için ideal küp boyutlarda doğranmış hali.",
    categoryId: "beyaz-et",
    images: ["/images/products/bonfile-kus-basi.webp"],
    variants: [
      { id: "v-bonfile-kusbasi-500g", label: "500 g", price: 125.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-bonfile-kusbasi-1kg", label: "1 kg", price: 250.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 2,
  },
  // 3. Bonfile Tantuni (250 TL/kg)
  {
    id: "p-bonfile-tantuni",
    slug: "bonfile-tantuni",
    nameTr: "Bonfile Tantuni",
    descriptionTr: "Tantuni, sac tava ve hızlı pişirmeye uygun yaprak inceliğinde özel doğranmış taze bonfile eti.",
    categoryId: "beyaz-et",
    images: ["/images/products/bonfile-tantuni.webp"],
    variants: [
      { id: "v-bonfile-tantuni-500g", label: "500 g", price: 125.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-bonfile-tantuni-1kg", label: "1 kg", price: 250.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 3,
  },
  // 4. Kelebek (225 TL/kg)
  {
    id: "p-kelebek",
    slug: "kelebek",
    nameTr: "Kelebek",
    descriptionTr: "Kelebek şeklinde açılmış, kemikli ve derili, ızgaralık ve mangallık taze piliç pirzola kesimi.",
    categoryId: "beyaz-et",
    images: ["/images/products/kelebek.webp"],
    variants: [
      { id: "v-kelebek-500g", label: "500 g", price: 112.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-kelebek-1kg", label: "1 kg", price: 225.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 4,
  },
  // 5. Soslu Kelebek (225 TL/kg)
  {
    id: "p-soslu-kelebek",
    slug: "soslu-kelebek",
    nameTr: "Soslu Kelebek",
    descriptionTr: "Nazar Piliç kasap yapımı özel baharatlı marinasyonla lezzetlendirilmiş kelebek tavuk.",
    categoryId: "soslu-marine",
    images: ["/images/products/soslu-kelebek.webp"],
    variants: [
      { id: "v-soslu-kelebek-500g", label: "500 g", price: 112.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-soslu-kelebek-1kg", label: "1 kg", price: 225.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 5,
  },
  // 6. İncik (245 TL/kg)
  {
    id: "p-incik",
    slug: "incik",
    nameTr: "İncik",
    descriptionTr: "Tavuk budunun alt kısmından hazırlanan, sulu ve lezzetli taze incik parçaları.",
    categoryId: "beyaz-et",
    images: ["/images/products/incik.webp"],
    variants: [
      { id: "v-incik-500g", label: "500 g", price: 122.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-incik-1kg", label: "1 kg", price: 245.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 6,
  },
  // 7. Kanat (300 TL/kg)
  {
    id: "p-kanat",
    slug: "kanat",
    nameTr: "Kanat",
    descriptionTr: "Izgara, fırın veya tavada çıtır çıtır pişirmeye uygun taze, sade piliç kanat.",
    categoryId: "beyaz-et",
    images: ["/images/products/kanat.webp"],
    variants: [
      { id: "v-kanat-500g", label: "500 g", price: 150.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-kanat-1kg", label: "1 kg", price: 300.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 7,
  },
  // 8. Soslu Kanat (300 TL/kg)
  {
    id: "p-soslu-kanat",
    slug: "soslu-kanat",
    nameTr: "Soslu Kanat",
    descriptionTr: "Nazar Piliç'in meşhur mangal sosu ile marine edilmiş, lezzeti içine işlemiş taze piliç kanat.",
    categoryId: "soslu-marine",
    images: ["/images/products/soslu-kanat.webp"],
    variants: [
      { id: "v-soslu-kanat-500g", label: "500 g", price: 150.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-soslu-kanat-1kg", label: "1 kg", price: 300.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 8,
  },
  // 9. Yaprak Kanat (500 TL/kg)
  {
    id: "p-yaprak-kanat",
    slug: "yaprak-kanat",
    nameTr: "Yaprak Kanat",
    descriptionTr: "Orta kanat kısmından özenle ayrılan, çıtır çıtır pişen lezzetli yaprak kanat parçaları.",
    categoryId: "beyaz-et",
    images: ["/images/products/yaprak-kanat.webp"],
    variants: [
      { id: "v-yaprak-kanat-500g", label: "500 g", price: 250.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-yaprak-kanat-1kg", label: "1 kg", price: 500.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 9,
  },
  // 10. Pirzola (245 TL/kg)
  {
    id: "p-pirzola",
    slug: "pirzola",
    nameTr: "Pirzola",
    descriptionTr: "Tavuk but kısmından kemikli olarak hazırlanan, mangallık ve fırınlık dolgun pirzola.",
    categoryId: "beyaz-et",
    images: ["/images/products/pirzola.webp"],
    variants: [
      { id: "v-pirzola-500g", label: "500 g", price: 122.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-pirzola-1kg", label: "1 kg", price: 245.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 10,
  },
  // 11. Soslu Pirzola (245 TL/kg)
  {
    id: "p-soslu-pirzola",
    slug: "soslu-pirzola",
    nameTr: "Soslu Pirzola",
    descriptionTr: "Özel sos harcı ile marine edilmiş, mangalda ve fırında yumuşacık pişen piliç pirzola.",
    categoryId: "soslu-marine",
    images: ["/images/products/soslu-pirzola.webp"],
    variants: [
      { id: "v-soslu-pirzola-500g", label: "500 g", price: 122.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-soslu-pirzola-1kg", label: "1 kg", price: 245.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 11,
  },
  // 12. Kemikli Kuşbaşı (175 TL/kg)
  {
    id: "p-kemikli-kusbasi",
    slug: "kemikli-kus-basi",
    nameTr: "Kemikli Kuşbaşı",
    descriptionTr: "Geleneksel sulu yemekler, tencere yemekleri ve güveçler için kemikli doğranmış taze piliç eti.",
    categoryId: "beyaz-et",
    images: ["/images/products/kemikli-kus-basi.webp"],
    variants: [
      { id: "v-kemikli-kusbasi-500g", label: "500 g", price: 87.5, isAvailable: true, priceStatus: "provided" },
      { id: "v-kemikli-kusbasi-1kg", label: "1 kg", price: 175.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 12,
  },
  // 13. Baget (150 TL/kg)
  {
    id: "p-baget",
    slug: "baget",
    nameTr: "Baget",
    descriptionTr: "Fırında patatesle, haşlama veya ızgarada mükemmel lezzet sunan taze piliç baget.",
    categoryId: "beyaz-et",
    images: ["/images/products/baget.webp"],
    variants: [
      { id: "v-baget-500g", label: "500 g", price: 75.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-baget-1kg", label: "1 kg", price: 150.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 13,
  },
  // 14. Baget Kemiksiz (220 TL/kg)
  {
    id: "p-baget-kemiksiz",
    slug: "baget-kemiksiz",
    nameTr: "Baget Kemiksiz",
    descriptionTr: "Kemiği ve kıkırdağı ayıklanmış, et dokusu sulu ve yoğun taze kemiksiz baget eti.",
    categoryId: "beyaz-et",
    images: ["/images/products/baget-kemiksiz.webp"],
    variants: [
      { id: "v-baget-kemiksiz-500g", label: "500 g", price: 110.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-baget-kemiksiz-1kg", label: "1 kg", price: 220.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 14,
  },
  // 15. Tavuk Ciğer (90 TL/kg)
  {
    id: "p-tavuk-ciger",
    slug: "tavuk-ciger",
    nameTr: "Tavuk Ciğer",
    descriptionTr: "Günlük ve taze, unlanarak tavada veya kavurma olarak pişirmeye uygun piliç ciğeri.",
    categoryId: "sakatat",
    images: ["/images/products/tavuk-ciger.webp"],
    variants: [
      { id: "v-tavuk-ciger-500g", label: "500 g", price: 45.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-tavuk-ciger-1kg", label: "1 kg", price: 90.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 15,
  },
  // 16. Bütün Tavuk (130 TL/kg)
  {
    id: "p-butun-tavuk",
    slug: "butun-tavuk",
    nameTr: "Bütün Tavuk",
    descriptionTr: "Temizlenmiş, nar gibi kızartmaya, fırına veya haşlamaya uygun bütün taze piliç. Bir adet yaklaşık 1.5 kg tartı ağırlığındadır (Referans: 130,00 TL/kg).",
    categoryId: "beyaz-et",
    images: ["/images/products/butun-tavuk.webp"],
    unitReferencePrice: {
      pricePerKg: 130.0,
      estimatedWeightKg: 1.5,
      unitLabel: "1 Adet (~1.5 kg)",
    },
    variants: [
      {
        id: "v-butun-tavuk-1adet",
        label: "1 Adet (~1.5 kg)",
        price: 195.0,
        isAvailable: true,
        priceStatus: "provided",
      },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 16,
  },
  // 17. Kalçalı But (150 TL/kg)
  {
    id: "p-kalcali-but",
    slug: "kalcali-but",
    nameTr: "Kalçalı But",
    descriptionTr: "Tavuk but ve kalça kısmının bir arada sunulduğu etli, dolgun ve fırınlık kesim.",
    categoryId: "beyaz-et",
    images: ["/images/products/kalcali-but.webp"],
    variants: [
      { id: "v-kalcali-but-500g", label: "500 g", price: 75.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-kalcali-but-1kg", label: "1 kg", price: 150.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 17,
  },
  // 18. Sırt Çorbalık (110 TL/kg)
  {
    id: "p-sirt-corbalik",
    slug: "sirt-corbalik",
    nameTr: "Sırt Çorbalık",
    descriptionTr: "Şifalı, kıvamlı ve lezzetli tavuk suyu çorbalar için taze piliç sırt kemik parçaları.",
    categoryId: "corbalik",
    images: ["/images/products/sirt-corbalik.webp"],
    variants: [
      { id: "v-sirt-corbalik-500g", label: "500 g", price: 55.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-sirt-corbalik-1kg", label: "1 kg", price: 110.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 18,
  },
  // 19. Çorbalık (30 TL/kg)
  {
    id: "p-corbalik",
    slug: "corbalik",
    nameTr: "Çorbalık",
    descriptionTr: "Geleneksel tavuk suyu çorbalar ve lezzetli haşlamalar için taze karışık çorbalık piliç parçaları.",
    categoryId: "corbalik",
    images: ["/images/products/corbalik.webp"],
    variants: [
      { id: "v-corbalik-500g", label: "500 g", price: 15.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-corbalik-1kg", label: "1 kg", price: 30.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 19,
  },
  // 20. Köy Sütü (5 kg = 200 TL)
  {
    id: "p-koy-sutu",
    slug: "koy-sutu",
    nameTr: "Köy Sütü",
    descriptionTr: "Doğal ve taze günlük köy sütü (5 kg Bidon: 200 TL). Güvenilir ve sağlıklı lezzetiyle sofralarınızda.",
    categoryId: "sut-sarkuteri",
    images: ["/images/products/koy-sutu.webp"],
    variants: [
      { id: "v-koy-sutu-1l", label: "1 L", price: 40.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-koy-sutu-5kg", label: "5 kg (Bidon)", price: 200.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: true,
    sortOrder: 20,
  },
  // 21. Dilim Sucuk (Tavuk) (350 TL/kg)
  {
    id: "p-dilim-sucuk",
    slug: "dilim-tavuk-sucuk",
    nameTr: "Dilim Sucuk (Tavuk)",
    descriptionTr: "Kahvaltılık ve tostluk olarak pratik şekilde dilimlenmiş, özel baharat çeşnili tavuk sucuğu.",
    categoryId: "sut-sarkuteri",
    images: ["/images/products/dilim-tavuk-sucuk.webp"],
    variants: [
      { id: "v-dilim-sucuk-500g", label: "500 g", price: 175.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-dilim-sucuk-1kg", label: "1 kg", price: 350.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 21,
  },
  // 22. Tavuk Sucuk (350 TL/kg)
  {
    id: "p-tavuk-sucuk",
    slug: "tavuk-sucuk",
    nameTr: "Tavuk Sucuk",
    descriptionTr: "Geleneksel kangal formunda, zengin baharat harcıyla olgunlaştırılmış nefis tavuk sucuğu.",
    categoryId: "sut-sarkuteri",
    images: ["/images/products/tavuk-sucuk.webp"],
    variants: [
      { id: "v-tavuk-sucuk-500g", label: "500 g", price: 175.0, isAvailable: true, priceStatus: "provided" },
      { id: "v-tavuk-sucuk-1kg", label: "1 kg", price: 350.0, isAvailable: true, priceStatus: "provided" },
    ],
    isActive: true,
    isFeatured: false,
    sortOrder: 22,
  },
];

export async function getActiveProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.isActive).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return (await getActiveProducts()).filter((p) => p.isFeatured);
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  return (await getActiveProducts()).filter((p) => p.categoryId === categoryId);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}

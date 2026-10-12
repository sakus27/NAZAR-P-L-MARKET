export const STORE_CONFIG = {
  brandName: "Nazar Piliç Market",
  shortName: "Nazar Piliç",
  established: "2005",
  slogan: "2005'ten Bu Yana Taze Lezzet",
  whatsappNumber: "905011346339", // Official configured WhatsApp number
  address: "Süleymaniye, Altay Cd. No:61, 16400 İnegöl/Bursa",
  neighbourhood: "Süleymaniye Mah.",
  street: "Altay Cd. No:61",
  postalCode: "16400",
  city: "İnegöl / Bursa",
  phone: "0501 134 63 39", // WhatsApp / Mobil
  landlinePhone: "0224 711 26 62", // Dükkan Tel
  landlinePhoneRaw: "02247112662",
  openingHours: "Hergün 08:30 - 21:00",
  currency: "TL",
  googleMapsUrl: "https://maps.app.goo.gl/Z7fcpiSYyUApXPNE6",
  // Exact Google Maps place embed for Nazar Piliç Market (Place ID: 0x14cbcbe750df8937:0x894d4eeb392ce7a4)
  mapsEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.6348834533187!2d29.5017355!3d40.0835557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbcbe750df8937%3A0x894d4eeb392ce7a4!2sNazar%20Pili%C3%A7%20Market!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str",
};

export interface Category {
  id: string;
  slug: string;
  nameTr: string;
  image: string;
  descriptionTr: string;
}

export const CATEGORIES: Category[] = [
  { 
    id: "beyaz-et", 
    slug: "beyaz-et", 
    nameTr: "Beyaz Et",
    image: "/images/products/bonfile.webp",
    descriptionTr: "Taze göğüs, pirzola, but ve incik kesimleri"
  },
  { 
    id: "soslu-marine", 
    slug: "soslu-marine", 
    nameTr: "Soslu / Marine",
    image: "/images/products/soslu-kanat.webp",
    descriptionTr: "Özel baharatlı mangallık kanat, kelebek ve pirzola"
  },
  { 
    id: "corbalik", 
    slug: "corbalik", 
    nameTr: "Çorbalık",
    image: "/images/products/corbalik.webp",
    descriptionTr: "Şifalı nefis çorbalık ve sırt kemik parçaları"
  },
  { 
    id: "sakatat", 
    slug: "sakatat", 
    nameTr: "Sakatat",
    image: "/images/products/tavuk-ciger.webp",
    descriptionTr: "Günlük taze ve unlanmaya hazır piliç ciğeri"
  },
  { 
    id: "sut-sarkuteri", 
    slug: "sut-sarkuteri", 
    nameTr: "Süt & Şarküteri",
    image: "/images/products/koy-sutu.webp",
    descriptionTr: "Doğal günlük köy sütü ve özel tavuk sucukları"
  },
];

export function formatCurrency(amount: number): string {
  return `${amount.toFixed(2).replace(".", ",")} TL`;
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nazar Piliç Market",
    short_name: "Nazar Piliç",
    description: "İnegöl'ün taze piliç ve şarküteri marketi. WhatsApp ile anında sipariş verin.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F2EE",
    theme_color: "#B9253A",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ShoppingBag, ArrowRight, Trash2, Plus, Minus, CheckCircle, ShieldCheck } from "lucide-react";
import { STORE_CONFIG, formatCurrency } from "@/data/config";
import { useCartStore } from "@/store/cartStore";

export default function CartClient() {
  const [mounted, setMounted] = useState(false);
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const hasConfiguredWhatsapp = Boolean(STORE_CONFIG.whatsappNumber);

  const generateWhatsAppLink = () => {
    if (!hasConfiguredWhatsapp || items.length === 0) return "#";
    
    const itemsList = items
      .map(
        (item) =>
          `• *${item.nameTr}* (${item.variantLabel}) × ${item.quantity} ➔ ${formatCurrency(item.price * item.quantity)}`
      )
      .join("\n");

    const message = [
      "🍗 *NAZAR PİLİÇ MARKET | SİPARİŞ*",
      "────────────────────────",
      "",
      "Merhaba, WhatsApp üzerinden aşağıdaki ürünleri sipariş etmek istiyorum:",
      "",
      "📋 *SİPARİŞ DETAYLARI:*",
      itemsList,
      "",
      "────────────────────────",
      `💰 *TOPLAM TUTAR:* *${formatCurrency(getTotalPrice())}*`,
      "────────────────────────",
      "",
      "Teşekkür eder, iyi çalışmalar dilerim.",
    ].join("\n");

    const encodedMessage = encodeURIComponent(message);
    const cleanedNumber = STORE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    
    return `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
  };

  if (!mounted) {
    return <div className="text-center py-16 text-brand-text-secondary font-medium">Yükleniyor...</div>;
  }

  const totalItemsCount = getTotalItems();

  return (
    <>
      <div className="mb-8">
        {items.length === 0 ? (
          <div className="bg-white rounded-3xl border border-brand-border p-12 text-center shadow-xs">
            <div className="w-24 h-24 bg-brand-offwhite rounded-3xl flex items-center justify-center mx-auto mb-6 border border-brand-border/60">
              <ShoppingBag className="w-12 h-12 text-brand-text-secondary/70" />
            </div>
            <h2 className="text-2xl font-black text-brand-charcoal mb-2">Listeniz Henüz Boş</h2>
            <p className="text-brand-text-secondary mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Şu anda sipariş listenizde ürün bulunmuyor. İnegöl'ün taze ve lezzetli piliç çeşitlerini incelemek için kataloğumuza göz atın.
            </p>
            <Link 
              href="/katalog"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-charcoal hover:bg-brand-red text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              <span>Ürün Kataloğunu İncele</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-brand-border overflow-hidden shadow-sm">
            {/* Cart Header */}
            <div className="px-6 py-4 bg-brand-offwhite/70 border-b border-brand-border flex items-center justify-between">
              <span className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                Seçilen Ürünler ({items.length} Kalem)
              </span>
              <span className="text-xs font-extrabold text-brand-red bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
                Toplam {totalItemsCount} Adet/Porsiyon
              </span>
            </div>

            {/* Cart Items List */}
            <ul className="divide-y divide-brand-border">
              {items.map((item) => (
                <li key={item.id} className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 hover:bg-brand-offwhite/20 transition-colors">
                  
                  {/* Thumbnail & Info */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-brand-offwhite shrink-0 border border-brand-border">
                      <Image 
                        src={item.image} 
                        alt={item.nameTr} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-extrabold text-brand-charcoal text-base leading-snug">
                        {item.nameTr}
                      </h3>
                      <div className="inline-block px-2 py-0.5 mt-1 rounded-md bg-brand-offwhite text-brand-text-secondary text-xs font-semibold">
                        {item.variantLabel}
                      </div>
                      <p className="text-xs text-brand-text-secondary mt-1 font-medium">
                        Birim: <span className="font-semibold text-brand-charcoal">{formatCurrency(item.price)}</span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity Stepper & Subtotal */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-brand-border/40">
                    
                    {/* Stepper with Large High-Contrast Buttons */}
                    <div className="flex items-center bg-white border-2 border-brand-charcoal/20 rounded-xl overflow-hidden shadow-xs">
                      <button 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center bg-brand-offwhite hover:bg-brand-red hover:text-white transition-colors text-brand-charcoal font-bold active:scale-95"
                        aria-label={`${item.nameTr} miktarını bir azalt`}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-black text-lg text-brand-charcoal select-none">
                        {item.quantity}
                      </span>
                      <button 
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center bg-brand-offwhite hover:bg-brand-red hover:text-white transition-colors text-brand-charcoal font-bold active:scale-95"
                        aria-label={`${item.nameTr} miktarını bir artır`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Line Total */}
                    <div className="text-right min-w-[100px]">
                      <p className="text-lg font-black text-brand-red leading-tight">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                      <span className="text-[10px] text-brand-text-secondary font-semibold">
                        {item.quantity} × {formatCurrency(item.price)}
                      </span>
                    </div>

                    {/* Delete Item Button */}
                    <button 
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-brand-text-secondary hover:text-brand-red hover:bg-red-50 rounded-xl transition-colors"
                      title="Listeden Kaldır"
                      aria-label={`${item.nameTr} ürününü listeden kaldır`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Cart Footer Summary & WhatsApp Order CTA */}
            <div className="p-6 sm:p-8 bg-brand-offwhite border-t border-brand-border flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-brand-text-secondary uppercase tracking-wider block">
                  Toplam Tutar
                </span>
                <p className="text-3xl font-black text-brand-charcoal">
                  {formatCurrency(getTotalPrice())}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/katalog"
                  className="w-full sm:w-auto px-6 py-4 bg-white border border-brand-border text-brand-charcoal hover:bg-brand-offwhite font-bold rounded-2xl text-center text-sm transition-colors"
                >
                  Ürün Ekle
                </Link>

                <a 
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => !hasConfiguredWhatsapp && e.preventDefault()}
                  className={`w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 text-white font-extrabold rounded-2xl transition-all shadow-lg hover:shadow-xl text-base ${
                    hasConfiguredWhatsapp 
                      ? 'bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98]' 
                      : 'bg-brand-text-secondary cursor-not-allowed opacity-75'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>WhatsApp ile Siparişi Gönder</span>
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Trust & Order Process Guidance */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-brand-border shadow-xs">
        <h3 className="text-lg font-black text-brand-charcoal mb-6 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-brand-red" />
          <span>Sipariş Nasıl Tamamlanır?</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-brand-charcoal text-white font-black text-sm shrink-0">1</span>
            <div>
              <p className="font-bold text-brand-charcoal text-sm">Listeyi Oluşturun</p>
              <p className="text-xs text-brand-text-secondary mt-1 leading-relaxed">İstediğiniz ürünleri ve gramajları seçip sepetinize ekleyin.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-brand-red text-white font-black text-sm shrink-0">2</span>
            <div>
              <p className="font-bold text-brand-charcoal text-sm">WhatsApp'tan İletin</p>
              <p className="text-xs text-brand-text-secondary mt-1 leading-relaxed">Yeşil butona basarak sipariş detaylarınızı WhatsApp hattımıza gönderin.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-2xl bg-emerald-600 text-white font-black text-sm shrink-0">3</span>
            <div>
              <p className="font-bold text-brand-charcoal text-sm">Teyit & Hazırlık</p>
              <p className="text-xs text-brand-text-secondary mt-1 leading-relaxed">Kasabımız siparişinizi onaylayıp taze taze hazırlar.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

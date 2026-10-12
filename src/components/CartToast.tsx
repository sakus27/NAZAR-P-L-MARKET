"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShoppingBag, X, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatCurrency } from "@/data/config";

export default function CartToast() {
  const notification = useCartStore((state) => state.notification);
  const clearNotification = useCartStore((state) => state.clearNotification);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!notification) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => clearNotification(), 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [notification, clearNotification]);

  if (!notification || !visible) return null;

  const { item, quantityAdded, totalQuantity } = notification;

  return (
    <aside
      aria-label="Sepet Bildirimi"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white rounded-2xl p-4 shadow-2xl border-2 border-brand-charcoal/10 backdrop-blur-md flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            <span>Sepete Eklendi</span>
          </div>
          <button
            onClick={() => {
              setVisible(false);
              clearNotification();
            }}
            className="text-brand-text-secondary hover:text-brand-charcoal p-1 rounded-lg transition-colors"
            aria-label="Bildirimi Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 bg-brand-offwhite/60 p-2.5 rounded-xl">
          <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-white border border-brand-border">
            <Image
              src={item.image || "/placeholder.webp"}
              alt={item.nameTr}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-brand-charcoal truncate">
              {item.nameTr}
            </h4>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs font-medium text-brand-text-secondary">
                {item.variantLabel}
              </span>
              <span className="text-xs font-bold text-brand-red">
                {formatCurrency(item.price)}
              </span>
            </div>
            <p className="text-[11px] text-brand-charcoal/80 font-semibold mt-1">
              Sepette: <span className="text-brand-red font-bold">{totalQuantity} adet</span>
              {quantityAdded > 1 && ` (+${quantityAdded})`}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Link
            href="/sepet"
            onClick={() => {
              setVisible(false);
              clearNotification();
            }}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-brand-charcoal hover:bg-brand-red text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Sepeti Gör & Sipariş Ver</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </aside>
  );
}

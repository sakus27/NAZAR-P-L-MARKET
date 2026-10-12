"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export default function CartBadge() {
  const [mounted, setMounted] = useState(false);
  const [bumping, setBumping] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const notification = useCartStore((state) => state.notification);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (notification) {
      setBumping(true);
      const timer = setTimeout(() => setBumping(false), 400);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const itemCount = mounted ? getTotalItems() : 0;

  return (
    <Link 
      href="/sepet" 
      aria-label={`Sipariş Listesi (${itemCount} ürün)`}
      className={`relative p-2.5 rounded-xl transition-all duration-200 ${
        itemCount > 0 ? "text-brand-charcoal hover:bg-brand-offwhite" : "text-brand-text-secondary hover:text-brand-charcoal hover:bg-brand-offwhite"
      }`}
    >
      <ShoppingBag className={`w-5 h-5 transition-transform duration-200 ${bumping ? "scale-125 text-brand-red" : ""}`} />
      {itemCount > 0 && (
        <span className={`absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full bg-brand-red border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm transition-transform duration-200 ${
          bumping ? "scale-125 bg-red-700" : ""
        }`}>
          {itemCount}
        </span>
      )}
    </Link>
  );
}

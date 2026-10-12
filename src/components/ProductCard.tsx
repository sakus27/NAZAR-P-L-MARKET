"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product, ProductVariant } from "@/data/products";
import { CATEGORIES, formatCurrency } from "@/data/config";
import { ShoppingCart, Check, Scale } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const price = selectedVariant?.promotionalPrice || selectedVariant?.price || 0;
  const isAvailable = selectedVariant?.isAvailable ?? true;

  const handleAddToCart = () => {
    if (!isAvailable) return;

    addItem({
      id: `${product.id}-${selectedVariant.id}`,
      productId: product.id,
      variantId: selectedVariant.id,
      nameTr: product.nameTr,
      variantLabel: selectedVariant.label,
      price: price,
      quantity: 1,
      image: product.images[0] || "/placeholder.webp",
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const categoryName = CATEGORIES.find((c) => c.id === product.categoryId)?.nameTr || "Beyaz Et";

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border hover:shadow-xl hover:border-brand-charcoal/20 transition-all duration-300 flex flex-col h-full">
      {/* Product Image Frame */}
      <div className="relative aspect-square sm:aspect-[4/3] w-full bg-brand-offwhite overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.webp"}
          alt={product.nameTr}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-brand-charcoal/70 flex items-center justify-center backdrop-blur-[2px]">
            <span className="text-white text-xs sm:text-sm font-bold tracking-wider px-2.5 py-1 sm:px-4 sm:py-2 border-2 border-white rounded-lg">
              TÜKENDİ
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-2.5 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-brand-red uppercase mb-1 block">
            {categoryName}
          </span>
          <h3 className="text-xs sm:text-lg font-bold text-brand-charcoal mb-1 leading-snug line-clamp-1 sm:line-clamp-none">
            {product.nameTr}
          </h3>
          {product.descriptionTr && (
            <p className="hidden sm:block text-xs text-brand-text-secondary line-clamp-2 leading-relaxed mb-4">
              {product.descriptionTr}
            </p>
          )}
        </div>

        {/* Pricing & Variant Selection Section */}
        <div className="mt-2 space-y-2 sm:space-y-3 pt-2 sm:pt-3 border-t border-brand-border/60">
          {/* Weight / Variant Selector */}
          {product.variants.length > 1 ? (
            <div>
              <span className="hidden sm:block text-[11px] font-semibold text-brand-text-secondary uppercase tracking-wider mb-1.5">
                Miktar / Gramaj Seçimi:
              </span>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {product.variants.map((v) => {
                  const isSelected = selectedVariant.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-lg sm:rounded-xl border text-xs transition-all duration-200 ${
                        isSelected
                          ? "border-brand-red bg-red-50/70 text-brand-charcoal ring-1 ring-brand-red font-semibold shadow-xs"
                          : "border-brand-border text-brand-text-secondary hover:border-brand-charcoal/40 hover:bg-brand-offwhite"
                      }`}
                    >
                      <span className="font-bold text-[10px] sm:text-xs text-brand-charcoal leading-tight">{v.label}</span>
                      <span className={`text-[10px] sm:text-[11px] mt-0.5 leading-tight ${isSelected ? "text-brand-red font-bold" : "text-brand-text-secondary"}`}>
                        {formatCurrency(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : product.unitReferencePrice ? (
            /* Dedicated Whole Chicken or Single Variant with Reference info */
            <div className="bg-brand-offwhite/80 p-2 sm:p-3 rounded-lg sm:rounded-xl border border-brand-border/70 space-y-0.5 sm:space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-brand-charcoal">
                  {selectedVariant?.label}
                </span>
                <span className="text-xs sm:text-base font-extrabold text-brand-red">
                  {formatCurrency(price)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-brand-text-secondary">
                <Scale className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-red/80 shrink-0" />
                <span className="truncate">
                  Ref: {formatCurrency(product.unitReferencePrice.pricePerKg || 130)} / kg
                </span>
              </div>
            </div>
          ) : (
            /* Single Variant */
            <div className="flex items-center justify-between bg-brand-offwhite/80 px-2.5 py-1.5 sm:px-3.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-brand-border/70">
              <span className="text-[11px] sm:text-xs font-semibold text-brand-charcoal">
                {selectedVariant?.label}
              </span>
              <span className="text-xs sm:text-base font-extrabold text-brand-red">
                {formatCurrency(price)}
              </span>
            </div>
          )}

          {/* Add to Cart Button */}
          <button
            type="button"
            disabled={!isAvailable}
            onClick={handleAddToCart}
            className={`w-full flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
              added
                ? "bg-[#25D366] text-white shadow-md shadow-green-200"
                : "bg-brand-charcoal text-white hover:bg-brand-red hover:shadow-lg hover:shadow-red-200/50 active:scale-[0.98]"
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Eklendi</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Sepete Ekle</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";
import { CATEGORIES } from "@/data/config";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface CatalogClientProps {
  initialProducts: Product[];
}

export default function CatalogClient({ initialProducts }: CatalogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const activeCategorySlug = searchParams.get("kategori");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.slug === activeCategorySlug),
  [activeCategorySlug]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory = activeCategory ? product.categoryId === activeCategory.id : true;
      const query = searchQuery.toLowerCase();
      const matchesSearch = product.nameTr.toLowerCase().includes(query) || 
                            (product.descriptionTr?.toLowerCase() || "").includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [initialProducts, activeCategory, searchQuery]);

  const handleCategoryChange = (slug: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("kategori", slug);
    } else {
      params.delete("kategori");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Search and Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-charcoal">
            {activeCategory ? activeCategory.nameTr : "Tüm Ürünler"}
          </h1>
          <p className="text-sm text-brand-text-secondary mt-1">
            {filteredProducts.length} ürün listeleniyor
          </p>
        </div>
        
        <div className="relative w-full md:w-auto flex items-center">
          <input 
            type="text" 
            placeholder="Ürün ara..." 
            value={searchQuery}
            maxLength={60}
            onChange={(e) => {
              // Sanitize input to strip HTML/script tags and limit length
              const cleaned = e.target.value.slice(0, 60).replace(/[<>]/g, "");
              setSearchQuery(cleaned);
            }}
            className="w-full md:w-72 pl-10 pr-10 py-3 bg-white border border-brand-border rounded-xl focus:ring-2 focus:ring-brand-red outline-none text-sm shadow-sm"
          />
          <Search className="w-4 h-4 text-brand-text-secondary absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-text-secondary hover:text-brand-charcoal"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Horizontal Category Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
        <button 
          type="button"
          onClick={() => handleCategoryChange(null)}
          className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border shrink-0 ${
            !activeCategory 
              ? 'bg-brand-red text-white border-brand-red shadow-sm' 
              : 'bg-white text-brand-charcoal border-brand-border hover:border-brand-charcoal/30 hover:bg-brand-offwhite'
          }`}
        >
          Tüm Ürünler ({initialProducts.length})
        </button>
        {CATEGORIES.map((category) => {
          const isSelected = activeCategory?.id === category.id;
          const count = initialProducts.filter(p => p.categoryId === category.id).length;
          return (
            <button 
              key={category.id}
              type="button"
              onClick={() => handleCategoryChange(category.slug)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border shrink-0 flex items-center gap-2 ${
                isSelected 
                  ? 'bg-brand-red text-white border-brand-red shadow-sm' 
                  : 'bg-white text-brand-charcoal border-brand-border hover:border-brand-charcoal/30 hover:bg-brand-offwhite'
              }`}
            >
              <span>{category.nameTr}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isSelected ? 'bg-white/20 text-white' : 'bg-brand-offwhite text-brand-text-secondary'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid Content */}
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white py-16 px-6 rounded-2xl border border-brand-border text-center shadow-sm">
            <p className="text-brand-text-secondary mb-4 text-base">Aradığınız kriterlere uygun ürün bulunamadı.</p>
            <button 
              type="button"
              onClick={() => {
                setSearchQuery("");
                handleCategoryChange(null);
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-charcoal text-white rounded-xl text-sm font-semibold hover:bg-brand-red transition-colors"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

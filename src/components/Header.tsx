"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, ShoppingBag, Sparkles, MapPin, Phone } from "lucide-react";
import { STORE_CONFIG, CATEGORIES } from "@/data/config";
import CartBadge from "./CartBadge";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border/80 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Authentic Store Logo */}
        <Logo variant="horizontal" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link 
            href="/" 
            className="text-sm font-bold text-brand-charcoal hover:text-brand-red transition-colors"
          >
            Ana Sayfa
          </Link>

          {/* Products Dropdown Menu */}
          <div 
            ref={dropdownRef} 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button 
              type="button"
              onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              className={`flex items-center gap-1.5 text-sm font-bold transition-colors py-2 ${
                productsDropdownOpen ? "text-brand-red" : "text-brand-charcoal hover:text-brand-red"
              }`}
              aria-expanded={productsDropdownOpen}
            >
              <span>Ürünler</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? "rotate-180 text-brand-red" : "text-brand-text-secondary"}`} />
            </button>

            {/* Dropdown Card */}
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-brand-border p-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 border-b border-brand-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-text-secondary">
                    Kategoriler
                  </span>
                  <Link
                    href="/katalog"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="text-xs font-bold text-brand-red hover:underline flex items-center gap-1"
                  >
                    <span>Tüm Ürünler (22)</span>
                  </Link>
                </div>

                <div className="space-y-1 mt-2">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/katalog?kategori=${cat.slug}`}
                      onClick={() => setProductsDropdownOpen(false)}
                      className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-offwhite transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-red mt-1.5 shrink-0 group-hover:scale-125 transition-transform"></span>
                      <div>
                        <div className="text-sm font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                          {cat.nameTr}
                        </div>
                        <div className="text-xs text-brand-text-secondary leading-snug line-clamp-1">
                          {cat.descriptionTr}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-brand-border/60">
                  <Link
                    href="/katalog"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-brand-charcoal hover:bg-brand-red text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tüm Kataloğu Gör</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/#hakkimizda" 
            className="text-sm font-bold text-brand-charcoal hover:text-brand-red transition-colors"
          >
            Hakkımızda
          </Link>

          <Link 
            href="/#iletisim" 
            className="text-sm font-bold text-brand-charcoal hover:text-brand-red transition-colors"
          >
            İletişim & Konum
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <Link 
            href="/katalog" 
            aria-label="Ürün Ara" 
            className="p-2.5 text-brand-text-secondary hover:text-brand-charcoal transition-colors rounded-xl hover:bg-brand-offwhite"
          >
            <Search className="w-5 h-5" />
          </Link>
          
          <CartBadge />

          <button 
            type="button"
            aria-label="Menü" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-charcoal hover:bg-brand-offwhite rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white px-4 py-6 shadow-2xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-bold text-brand-charcoal hover:text-brand-red hover:bg-brand-offwhite rounded-xl transition-colors"
            >
              Ana Sayfa
            </Link>
            
            {/* Mobile Products Accordion */}
            <div className="bg-brand-offwhite/70 rounded-2xl p-2.5 border border-brand-border/60">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-2 py-2 text-base font-bold text-brand-charcoal"
              >
                <span>Ürünler</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180 text-brand-red" : ""}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pt-2 pb-1 space-y-1">
                  <Link
                    href="/katalog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm font-bold text-brand-red hover:bg-white rounded-xl transition-colors"
                  >
                    <span>Tüm Ürünler</span>
                    <span className="text-xs bg-red-100 text-brand-red px-2 py-0.5 rounded-full">22 Çeşit</span>
                  </Link>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/katalog?kategori=${cat.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-medium text-brand-charcoal hover:text-brand-red hover:bg-white rounded-xl transition-colors"
                    >
                      {cat.nameTr}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/sepet" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-bold text-brand-charcoal hover:text-brand-red hover:bg-brand-offwhite rounded-xl transition-colors flex items-center justify-between"
            >
              <span>Sipariş Listesi</span>
              <ShoppingBag className="w-5 h-5 text-brand-red" />
            </Link>

            <Link 
              href="/#hakkimizda" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-bold text-brand-charcoal hover:text-brand-red hover:bg-brand-offwhite rounded-xl transition-colors"
            >
              Hakkımızda
            </Link>

            <Link 
              href="/#iletisim" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-bold text-brand-charcoal hover:text-brand-red hover:bg-brand-offwhite rounded-xl transition-colors flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-brand-red" />
              <span>İletişim & Konum</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

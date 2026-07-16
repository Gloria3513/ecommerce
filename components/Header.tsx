"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu, Heart } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with Character Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-amber-100 border border-amber-200">
                <Image src="/lody.png" alt="Lody Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-slate-800 tracking-wider font-sans">
                Lody & Smart-ro <span className="text-xs text-amber-500 font-semibold">소품샵</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#catalog" className="hover:text-amber-500 transition-colors">
              전체상품
            </Link>
            <Link href="#best" className="hover:text-amber-500 transition-colors">
              베스트셀러
            </Link>
            <Link href="#about" className="hover:text-amber-500 transition-colors flex items-center gap-1">
              스토리
              <span className="text-[10px] bg-sky-100 text-sky-600 px-1.5 py-0.5 rounded-full font-bold">
                Lody & Smart-ro
              </span>
            </Link>
            <Link href="#instagram" className="hover:text-amber-500 transition-colors">
              인스타그램
            </Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 text-slate-500 hover:text-amber-500 hover:bg-slate-50 rounded-full transition-all">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-500 hover:text-amber-500 hover:bg-slate-50 rounded-full transition-all relative">
              <Heart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full" />
            </button>
            <button className="p-2 text-slate-500 hover:text-amber-500 hover:bg-slate-50 rounded-full transition-all relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 text-slate-500 hover:text-amber-500 hover:bg-slate-50 rounded-full transition-all md:hidden">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

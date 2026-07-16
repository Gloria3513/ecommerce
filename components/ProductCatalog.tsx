"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  category: string;
  badge?: {
    text: string;
    type: "lody" | "smartro" | "new";
  };
}

const PRODUCTS: Product[] = [
  {
    id: "prod_1",
    name: "Lody's 힐링 소이 캔들",
    price: 18500,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80",
    category: "향기소품",
    badge: { text: "Lody 추천 💤", type: "lody" }
  },
  {
    id: "prod_2",
    name: "Smart-ro's 크로셰 미니 파우치",
    price: 22000,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc085ff6?w=600&auto=format&fit=crop&q=80",
    category: "잡화",
    badge: { text: "Smart-ro 추천 🤖", type: "smartro" }
  },
  {
    id: "prod_3",
    name: "오묘한 마블링 도자기 식기",
    price: 24000,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1576016770956-debb63d90029?w=600&auto=format&fit=crop&q=80",
    category: "테이블웨어",
    badge: { text: "수공예 한정", type: "new" }
  },
  {
    id: "prod_4",
    name: "매일 기록하고픈 다꾸 스티커",
    price: 4500,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=80",
    category: "문구",
    badge: { text: "NEW 🎨", type: "new" }
  },
  {
    id: "prod_5",
    name: "실버 원석 여름 팔찌",
    price: 16000,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
    category: "악세사리",
    badge: { text: "여름한정 ✨", type: "new" }
  },
  {
    id: "prod_6",
    name: "내 방구석 원목 다용도 트레이",
    price: 29000,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&auto=format&fit=crop&q=80",
    category: "리빙소품",
    badge: { text: "Lody 소장템 🌿", type: "lody" }
  }
];

export default function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-amber-600 text-xs font-extrabold uppercase tracking-widest bg-amber-100/50 px-3 py-1 rounded-full">
            Handmade Craft Shop
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mt-3 tracking-tight">
            따뜻한 온기를 품은 정성 소품
          </h2>
          <p className="text-slate-500 text-sm mt-3 leading-relaxed">
            기계로 찍어내는 공산품이 아닙니다. 늘보 Lody의 감성이 담긴 바느질과 로봇 Smart-ro가 테스팅한 실용성을 갖춘 소품들을 직접 소장해보세요.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Overlay */}
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-sm ${
                        product.badge.type === "lody"
                          ? "bg-amber-100 text-amber-800 border border-amber-200"
                          : product.badge.type === "smartro"
                          ? "bg-sky-100 text-sky-800 border border-sky-200"
                          : "bg-pink-100 text-pink-800 border border-pink-200"
                      }`}
                    >
                      {product.badge.text}
                    </span>
                  </div>
                )}

                {/* Hover Quick View Button */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md hover:bg-amber-500 hover:text-white flex items-center justify-center transition-all">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-800 hover:text-amber-500 transition-colors cursor-pointer leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-50">
                  <span className="text-lg font-black text-slate-800">
                    {product.price.toLocaleString()}원
                  </span>
                  <div className="flex items-center gap-1 bg-amber-50/50 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-700">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

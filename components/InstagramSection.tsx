"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InstagramFeed from "./InstagramFeed";

// Custom Instagram SVG Icon to bypass resolve issues
const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-amber-50/10 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl relative">
            {/* Cute mini icons for Lody and Smart-ro observing the feed */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-100/50">
                <InstagramIcon className="w-3.5 h-3.5" />
                Instagram 실시간 소통
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              소소한 일상, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500">
                Lody & Smart-ro
              </span> 피드
            </h2>
            <p className="mt-3 text-slate-500 text-sm md:text-base leading-relaxed">
              늘보 Lody가 한땀한땀 만들고, 로봇 Smart-ro가 꼼꼼하게 검수한 핸드메이드 소품들의 제작 비하인드와 소소한 일상 이야기를 만나보세요!
            </p>
          </div>

          {/* Decorative Characters Badge on the Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] self-start md:self-end"
          >
            <div className="relative flex -space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-amber-50">
                <Image src="/lody.png" alt="Lody" fill className="object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative bg-sky-50">
                <Image src="/smartro.png" alt="Smart-ro" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-700">@lody_smartro_shop</span>
              <span className="text-[10px] text-pink-500 font-semibold animate-pulse">● 실시간 연동 완료</span>
            </div>
          </motion.div>
        </div>

        {/* Swipe Instagram Feed Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <InstagramFeed />
        </motion.div>

        {/* Brand Mentions */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            피드는 매일 자동으로 업데이트됩니다. 문의사항은 인스타그램 DM 또는 사이트 하단 챗봇을 이용해 주세요.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import InstagramSection from "@/components/InstagramSection";
import LodyCharacter from "@/components/LodyCharacter";
import SmartRoCharacter from "@/components/SmartRoCharacter";
import { motion } from "framer-motion";
import { Heart, Compass, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-700 antialiased overflow-x-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-tr from-amber-50/60 via-sky-50/40 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Side: Brand Text */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100/80 text-amber-800 border border-amber-200/50 mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Lody & Smart-ro 공식 플래그십 샵
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight leading-[1.1]"
                >
                  느긋한 감성에 <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-sky-500">
                    스마트한 한땀
                  </span>
                  을 더하다
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed max-w-xl"
                >
                  느림보 나무늘보 <strong className="text-slate-800 font-semibold">Lody</strong>의 따뜻한 손바느질과
                  만능 일꾼 로봇 <strong className="text-slate-800 font-semibold">Smart-ro</strong>의 세련된 디테일이 만났습니다.
                  당신의 일상에 조용한 행복을 선사할 수제 핸드메이드 소품샵에 오신 것을 환영합니다!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-10 flex flex-wrap gap-4 items-center"
                >
                  <a
                    href="#catalog"
                    className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all text-sm flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4" />
                    제품 구경하기
                  </a>
                  <a
                    href="#instagram"
                    className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold border border-slate-200 shadow-sm active:scale-95 transition-all text-sm flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500/20" />
                    인스타그램 소통
                  </a>
                </motion.div>
              </div>

              {/* Right Side: Animated Character Branding */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                {/* Background soft glowing blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl -z-10" />
                <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sky-300/20 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col sm:flex-row items-center gap-12 lg:gap-8 pt-8 sm:pt-0">
                  {/* Lody sloth */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                  >
                    <LodyCharacter
                      bubbleText="음... 천천히 둘러보세요... 💤"
                      size={180}
                    />
                  </motion.div>

                  {/* Smart-ro robot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, type: "spring", bounce: 0.4 }}
                    className="mt-6 sm:mt-16"
                  >
                    <SmartRoCharacter
                      bubbleText="인스타 피드도 실시간 연동 중! 🤖"
                      size={160}
                    />
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product Catalog Section */}
        <ProductCatalog />

        {/* Brand Story banner */}
        <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900 to-slate-950 -z-10" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-amber-400 tracking-tight">
              Lody & Smart-ro의 핸드메이드 철학
            </h2>
            <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-3xl mx-auto">
              세상이 너무 바쁘게 돌아간다면, 가끔은 한 발짝 물러서서 늘보의 눈으로 바라보는 것은 어떨까요? Lody는 캔들 하나, 파우치 한 올을 지을 때에도 늘 느긋하고 차분하게 사랑을 담아 완성합니다. 이에 Smart-ro는 디지털 온도계, 타이머, 정밀 센서 등으로 제작 환경을 세심하게 조절하여 수제 제작의 단점인 균일도를 완벽히 보완합니다. 이 둘의 따뜻하고 정밀한 하모니를 느껴보세요.
            </p>
            <div className="mt-8 flex justify-center items-center gap-2">
              <span className="h-px w-8 bg-slate-700" />
              <span className="text-xs text-slate-500 font-semibold tracking-widest uppercase">
                COZY & SMART CRAFT
              </span>
              <span className="h-px w-8 bg-slate-700" />
            </div>
          </div>
        </section>

        {/* Instagram Section (Swipe layout) */}
        <div id="instagram">
          <InstagramSection />
        </div>
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}

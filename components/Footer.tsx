"use client";

import Link from "next/link";
import { Mail, ShieldAlert, Heart } from "lucide-react";
import Image from "next/image";

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

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Intro */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-amber-100/20 border border-amber-500/20">
                <Image src="/lody.png" alt="Lody Logo" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-white tracking-wider font-sans">
                Lody & Smart-ro <span className="text-xs text-amber-400 font-semibold">소품샵</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              느림의 미학을 전하는 나무늘보 <strong className="text-white">Lody</strong>와 디지털의 편리함을 꼼꼼히 살피는 로봇 <strong className="text-white">Smart-ro</strong>가 운영하는 소품 편집샵입니다. 손끝에서 피어나는 작은 행복을 나누고 싶어요.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@lody.shop"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#catalog" className="hover:text-amber-400 transition-colors">
                  전체 상품보기
                </Link>
              </li>
              <li>
                <Link href="#best" className="hover:text-amber-400 transition-colors">
                  인기 베스트
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  브랜드 이야기
                </Link>
              </li>
              <li>
                <Link href="#instagram" className="hover:text-amber-400 transition-colors">
                  인스타그램 피드
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">CS Center</h3>
            <p className="text-sm leading-relaxed">
              화 - 토 : 오전 11:00 ~ 오후 7:00 <br />
              일, 월요일은 Lody가 깊은 단잠에 들어요. (휴무)
            </p>
            <p className="mt-3 text-xs text-slate-500">
              * 문의사항은 DM 또는 홈페이지 챗봇으로 실시간 상담이 가능합니다.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Lody & Smart-ro Shop. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" />
            <span>by Creative Brand Planners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

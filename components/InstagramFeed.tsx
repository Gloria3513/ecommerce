"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Heart, MessageCircle, ArrowRight, ArrowLeft } from "lucide-react";
import InstagramLoading from "./states/InstagramLoading";
import InstagramEmpty from "./states/InstagramEmpty";

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

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Embla Carousel Hook Setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  useEffect(() => {
    async function fetchFeed() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/instagram");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPosts(data || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFeed();
  }, []);

  // Update button enabled states
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi]);

  if (isLoading) {
    return <InstagramLoading />;
  }

  if (error || posts.length === 0) {
    return <InstagramEmpty message="인스타그램 피드를 가져오는 데 실패했거나 피드가 없습니다." />;
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-2 py-4" ref={emblaRef}>
        <div className="flex gap-5 md:gap-6 select-none">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-[0_0_260px] sm:flex-[0_0_300px] md:flex-[0_0_320px] bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/80 hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                      <InstagramIcon className="w-3.5 h-3.5 text-pink-500" />
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">@lody_smartro_shop</span>
                </div>
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-500 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Media Container */}
              <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
                <Image
                  src={post.media_url}
                  alt={post.caption || "Instagram Feed"}
                  fill
                  sizes="(max-width: 768px) 300px, 320px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-medium">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-current" />
                    <span>84</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>12</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">
                  {post.caption}
                </p>
                <div className="text-[10px] text-slate-400 font-medium">
                  {new Date(post.timestamp).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="absolute -top-16 right-4 flex items-center gap-2">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!prevBtnEnabled}
          className={`p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all ${
            prevBtnEnabled
              ? "hover:bg-slate-50 active:scale-95 hover:border-slate-300"
              : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="Previous posts"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!nextBtnEnabled}
          className={`p-2.5 rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all ${
            nextBtnEnabled
              ? "hover:bg-slate-50 active:scale-95 hover:border-slate-300"
              : "opacity-40 cursor-not-allowed"
          }`}
          aria-label="Next posts"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

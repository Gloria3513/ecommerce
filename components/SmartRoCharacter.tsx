"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SmartRoCharacterProps {
  className?: string;
  bubbleText?: string;
  size?: number;
}

export default function SmartRoCharacter({
  className = "",
  bubbleText,
  size = 180,
}: SmartRoCharacterProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Speech Bubble */}
      {bubbleText && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute -top-16 bg-white text-gray-700 px-4 py-2 rounded-2xl shadow-md border border-sky-100 text-sm font-medium whitespace-nowrap z-10"
        >
          <div className="relative">
            {bubbleText}
            {/* Arrow */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white" />
            <div className="absolute -bottom-[13px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-sky-100/50 -z-10" />
          </div>
        </motion.div>
      )}

      {/* Floating & Rotating Smart-ro Image */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-full border-4 border-sky-100 shadow-lg bg-sky-50/50"
        style={{ width: size, height: size }}
      >
        <Image
          src="/smartro.png"
          alt="Smart-ro the Robot"
          fill
          priority
          sizes={`${size}px`}
          className="object-cover hover:rotate-12 transition-transform duration-300"
        />
      </motion.div>
      <span className="mt-2 text-xs font-bold text-sky-700 tracking-wider bg-sky-100/60 px-2 py-0.5 rounded-full">
        Smart-ro (로봇)
      </span>
    </div>
  );
}

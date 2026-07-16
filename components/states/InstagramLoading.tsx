"use client";

import { motion } from "framer-motion";
import SmartRoCharacter from "../SmartRoCharacter";
import { Loader2 } from "lucide-react";

export default function InstagramLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200/60 max-w-md mx-auto">
      <SmartRoCharacter size={100} bubbleText="피드 신호 수신 중... 삐리빅!" />
      <div className="mt-8 flex items-center space-x-2 text-slate-500 font-medium">
        <Loader2 className="w-5 h-5 animate-spin text-sky-500" />
        <span>인스타그램에서 최신 피드를 로드하고 있어요</span>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-2 text-xs text-slate-400"
      >
        Lody는 옆에서 자는 중... zZZ
      </motion.p>
    </div>
  );
}

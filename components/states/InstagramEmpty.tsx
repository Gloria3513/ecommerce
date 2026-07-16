"use client";

import LodyCharacter from "../LodyCharacter";
import { AlertCircle } from "lucide-react";

interface InstagramEmptyProps {
  message?: string;
}

export default function InstagramEmpty({ message = "아직 올라온 사진이 없어요..." }: InstagramEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-amber-50/20 rounded-3xl border-2 border-dashed border-amber-200/50 max-w-md mx-auto">
      <LodyCharacter size={100} bubbleText="앗, 피드가 비어있네? 🥱" />
      <div className="mt-8 flex items-center space-x-2 text-amber-800/80 font-semibold bg-amber-100/50 px-4 py-2 rounded-full">
        <AlertCircle className="w-4 h-4 text-amber-600" />
        <span className="text-sm">{message}</span>
      </div>
      <p className="mt-3 text-xs text-amber-600/70 text-center leading-relaxed max-w-xs">
        잠시 후 다시 확인하거나, 인스타그램 연동 설정(Behold API)을 확인해 주세요.
      </p>
    </div>
  );
}

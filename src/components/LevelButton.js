"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Lock, Play, CheckCircle2, X, AlertTriangle } from "lucide-react";

export default function LevelButton({ 
  level, 
  idx, 
  isUnlockedByProgress, 
  showTimeLock, 
  isActive, 
  isCompleted, 
  unitId, 
  levelIdNum 
}) {
  const [showModal, setShowModal] = useState(false);
  const safeIdx = String((Number(idx) || 0) + 1);

  const ButtonWrapper = ({ children }) => (
    <div className="w-full aspect-square max-w-[90px] md:max-w-[120px]">
      {children}
    </div>
  );

  // STATE 1: LOCKED
  if (!isUnlockedByProgress) {
    return (
      <ButtonWrapper>
        <div className="w-full h-full rounded-2xl md:rounded-3xl border-2 border-white/5 bg-white/[0.02] flex flex-col items-center justify-center opacity-20 cursor-not-allowed">
          <Lock className="mb-1 w-5 h-5 md:w-6 md:h-6 md:mb-2" />
          <span className="text-[8px] md:text-[10px] font-black">{safeIdx}</span>
        </div>
      </ButtonWrapper>
    );
  }

  // STATE 2: DAILY LIMIT
  if (showTimeLock) {
    return (
      <ButtonWrapper>
        <button 
          onClick={() => setShowModal(true)}
          className="w-full h-full rounded-2xl md:rounded-3xl border-2 border-orange-500/30 bg-orange-500/5 flex flex-col items-center justify-center transition-all hover:bg-orange-500/10 group"
        >
          <Lock className="text-[#ff6600] mb-1 w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          <span className="text-[8px] md:text-[10px] font-black uppercase text-[#ff6600]/50">Lvl {levelIdNum}</span>
        </button>

        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#111] border border-orange-500/40 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl relative">
              <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-white/20 hover:text-white">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <div className="bg-orange-500/20 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <AlertTriangle className="text-orange-500 w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black italic uppercase text-white mb-2 leading-none">Daily Limit Reached</h2>
              <p className="text-white/40 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mb-6">
                The free plan allows 1 level every 24 hours. Come back tomorrow!
              </p>
              <button onClick={() => setShowModal(false)} className="w-full bg-[#ff6600] text-black py-3 md:py-4 rounded-xl font-black uppercase italic hover:brightness-110 transition-all">
                Got it
              </button>
            </div>
          </div>
        )}
      </ButtonWrapper>
    );
  }

  // STATE 3: UNLOCKED / ACTIVE / COMPLETED
  return (
    <ButtonWrapper>
      <Link href={`/unit/${unitId}/level/${level.levelId}`} prefetch={false} className="block w-full h-full">
        <div className={`w-full h-full rounded-2xl md:rounded-3xl border-2 flex flex-col items-center justify-center transition-all hover:scale-105 active:scale-95 group
          ${isActive 
            ? "bg-[#ff6600] border-[#ff6600] shadow-[0_0_30px_rgba(255,102,0,0.3)] text-black" 
            : "bg-white/5 border-white/5 hover:border-white/20 text-white"}
        `}>
          {isCompleted ? (
            <CheckCircle2 className="text-green-500 mb-1 w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <Play fill={isActive ? "black" : "white"} className="mb-1 w-6 h-6 md:w-8 md:h-8" />
          )}
          <span className={`text-[8px] md:text-[10px] font-black uppercase ${isActive ? "text-black/50" : "text-white/20"}`}>
            Lvl {levelIdNum} 
          </span>
        </div>
      </Link>
    </ButtonWrapper>
  );
}
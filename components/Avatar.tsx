"use client";
import React from 'react';

interface AvatarProps {
  volume: number;
}

export default function Avatar({ volume = 0 }: AvatarProps) {
  // Normalisasi volume (0-255) ke skala kecil untuk animasi (0.0 - 1.0)
  const normalizedVolume = Math.min(1, Math.max(0, volume / 255));
  
  // Efek pantulan/berbicara: Avatar akan sedikit membesar dan melompat kecil saat bersuara
  const scale = 1 + (normalizedVolume * 0.15);
  const translateY = normalizedVolume * -8; // Melompat ke atas sedikit (piksel)

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-800">
      <div 
        className="w-full h-full transition-all duration-75 ease-out"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
        }}
      >
        <img 
          src="/avatar.png" 
          alt="Ustadz Avatar"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
}

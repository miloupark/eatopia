// 🧩 맛집 카드 Draft

import React from "react";

type CardProps = {
  name: string;
  category: string;
  rating: number;
  imageUrl: string;
};

export default function Card({ name, category, rating, imageUrl }: CardProps) {
  return (
    <div className="w-2xs bg-white border border-neutral-400 rounded-2xl overflow-hidden">
      {/* 이미지 sec */}
      <div>
        <img src={imageUrl} alt={name} className="w-full h-40" />
      </div>

      <div className="flex justify-between p-4">
        {/* 정보 sec */}
        <div>
          <p>{name}</p>
          <span>{category}</span>
          <span>{rating.toFixed(1)}</span>
        </div>

        {/* 저장 / 기록 / 공유 btns */}
        <div className="flex">
          <button>❤️</button>
          <button>✍🏼</button>
          <button>🐝</button>
        </div>
      </div>
    </div>
  );
}

// 🧩 맛집 카드
import { IMAGE_BASE_URL } from "../../api/constants";
import StarIcon from "../../assets/icons/ico_star.svg?react";

type CardProps = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
};

export default function Card({ title, image, description }: CardProps) {
  return (
    <div className=" bg-white border border-neutral-200 rounded-lg overflow-hidden">
      {/* 이미지 sec */}
      <div>
        <img
          src={`${IMAGE_BASE_URL}${image.src}`}
          alt={`${image.alt}`}
          className="w-full h-40"
        />
      </div>

      <div className="p-3 space-y-1">
        {/* 정보 sec */}
        <div className="flex justify-between items-center gap-1">
          <p className="flex-1 truncate font-medium">{title}</p>
          <button className="p-1 cursor-pointer">
            <StarIcon className="w-5 h-5 text-gray-300 hover:text-gray-400 transition-colors" />
          </button>
        </div>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}

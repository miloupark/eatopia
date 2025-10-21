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
  isSaved?: boolean;
  onToggle?: () => void;
  disabled?: boolean;
};

export default function Card({
  title,
  image,
  description,
  isSaved = false,
  onToggle,
  disabled = false,
}: CardProps) {
  return (
    <article className=" bg-white border border-neutral-200 rounded-lg overflow-hidden">
      {/* 이미지 sec */}
      <div>
        <img
          src={`${IMAGE_BASE_URL}${image.src}`}
          alt={`${image.alt}`}
          loading="lazy"
          className="w-full h-40"
        />
      </div>

      <div className="p-3 space-y-1">
        <div className="flex justify-between items-center gap-1">
          <p className="flex-1 truncate font-medium">{title}</p>
          <button
            type="button"
            onClick={onToggle}
            disabled={disabled}
            aria-label={isSaved ? "찜 해제" : "찜 추가"}
            className="p-1 cursor-pointer"
          >
            <StarIcon
              className={`w-5 h-5 transition-colors [fill:currentColor] [stroke:currentColor] ${
                isSaved
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            />
          </button>
        </div>
        <span className="text-sm line-clamp-2">{description}</span>
      </div>
    </article>
  );
}

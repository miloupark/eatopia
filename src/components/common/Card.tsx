// 🧩 맛집 카드
import { IMAGE_BASE_URL } from "../../api/constants";

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
    <div className=" bg-white border border-neutral-400 rounded-2xl overflow-hidden">
      {/* 이미지 sec */}
      <div>
        <img
          src={`${IMAGE_BASE_URL}${image.src}`}
          alt={`${image.alt}`}
          className="w-full h-40"
        />
      </div>

      <div className="flex justify-between p-4">
        {/* 정보 sec */}
        <div>
          <p>{title}</p>
          <span>{description}</span>
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

import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
interface RatingProps {
  value: number;
  className?: string;
}

const Rating = ({ value, className }: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={`flex${className ? ` ${className}` : ""}`}>
      {stars.map((star) =>
        star <= value ? (
          <AiFillStar className="text-black" />
        ) : (
          <AiOutlineStar className="text-gray-400" />
        )
      )}
    </div>
  );
};

export default Rating;

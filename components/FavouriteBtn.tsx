import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
type Props = {};

const FavouriteBtn = (props: Props) => {
  return (
    <button className="h-10 w-10 rounded-full bg-neutral-100 bg-opacity-50 hover:bg-opacity-80 transition-all grid place-items-center">
      <AiOutlineHeart className="text-black" />
    </button>
  );
};

export default FavouriteBtn;

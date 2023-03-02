import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
type Props = {};

const FavouriteBtn = (props: Props) => {
  return (
    <button className="h-10 w-10 rounded-full bg-neutral-300 bg-opacity-0 hover:bg-opacity-100  transition-all grid place-items-center">
      <AiOutlineHeart className="text-black" size={22} />
    </button>
  );
};

export default FavouriteBtn;

import React from "react";
import { ItemData } from "./types";

const CardItem = ({ id, name, email, avatar }: ItemData) => {
  return (
    <div className="bg-slate-500 rounded-lg p-2 border border-gray-200 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          className="flex-none w-14 h-14 rounded-full shadow-lg object-cover"
        />
        <div className="flex-auto">
          <div className="text-base text-slate-300 font-semibold">{name}</div>
          <span className="text-sm text-gray-100 mt-0.5">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

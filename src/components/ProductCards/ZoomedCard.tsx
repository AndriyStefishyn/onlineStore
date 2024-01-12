// Overlay.tsx
import React from "react";
import { ZoomedCardProps } from "../../types";

export const ZoomedCard: React.FC<ZoomedCardProps> = ({
  selectedCard,
  onClose,
}) => {
  return (
    <div
      className={
        selectedCard.wasClicked
          ? "fixed inset-0 bg-gray-400 bg-opacity-70 z-10 flex justify-center items-center cursor-pointer"
          : "hidden"
      }
      onClick={onClose}
    >
      <div className="w-[25%] h-[60%] flex justify-center items-center cursor-default  rounded-lg">
        <img
          src={selectedCard.product?.image}
          alt="img"
          className="w-full h-full  object-cobver animate__animated animate__fadeIn"
        />
      </div>
    </div>
  );
};

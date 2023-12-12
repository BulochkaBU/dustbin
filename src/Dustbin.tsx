import { memo } from "react";
import { useDrop } from "react-dnd";
import { ProductTypes } from "./ItemTypes";

export interface DustbinProps {
  accept: string[];
  addedProducts?: ProductTypes[];
  onDrop: (product: ProductTypes) => void;
  isDropped: (product: ProductTypes) => boolean;
}

export const Dustbin = memo(function Dustbin({ accept, addedProducts, onDrop }: DustbinProps) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "bg-stone-500";
  if (isActive) {
    backgroundColor = "bg-indigo-800";
  } else if (canDrop) {
    backgroundColor = "bg-indigo-400";
  }

  return (
    <div
      ref={drop}
      className={`h-48 w-48 mr-6 mb-6 text-white p-4 text-center text-base  leading-normal flex flex-col ${backgroundColor} rounded-md`}
      data-testid="dustbin"
    >
      {isActive ? "Release to drop" : `${accept.join(", ")}`}

      {addedProducts &&
        addedProducts.map((product) => (
          <p key={product.name} className="p-2 my-1 bg-pink-300 text-black flex justify-center rounded">
            {product.name}
          </p>
        ))}
    </div>
  );
});
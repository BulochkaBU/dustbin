// import { useDrop } from "react-dnd";
// import { ProductTypes } from "./ItemTypes";

export interface DustbinProps {
  accept: string[];
  // addedProductsInDustbin?: ProductTypes[];
  // onDrop: (product: ProductTypes) => void;
}

export const Dustbin = function Dustbin({ accept }: DustbinProps) {
  // const [{ isOver, canDrop }, drop] = useDrop({
  //   accept,
  //   drop: onDrop,
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // });

  // const isActive = isOver && canDrop;
  // let backgroundColor = "bg-stone-500";
  // if (isActive) {
  //   backgroundColor = "bg-indigo-800";
  // } else if (canDrop) {
  //   backgroundColor = "bg-indigo-400";
  // }

  return (
    <div>{accept}</div>
    // <div
    //   ref={drop}
    //   className={`h-48 w-48 mr-6 mb-6 text-white p-4 text-center text-base  leading-normal flex flex-col ${backgroundColor} rounded-md`}
    //   data-testid="dustbin"
    // >
    //   {isActive ? "Release to drop" : `${accept.join(", ")}`}

    //   {addedProductsInDustbin &&
    //     addedProductsInDustbin.map((product) => (
    //       <p
    //         key={product.name}
    //         className="p-2 my-1npm install redux react-redux bg-pink-300 text-black flex justify-center rounded"
    //       >
    //         {product.name}
    //       </p>
    //     ))}
    // </div>
  );
};

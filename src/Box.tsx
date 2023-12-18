import { useDrag } from "react-dnd";
import { ProductTypes } from "./ItemTypes";

export interface BoxProps {
  product: ProductTypes;
}

export const Box = function Box({ product }: BoxProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: product.category,
      item: product,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [product]
  );

  return (
    <div
      ref={drag}
      className="border border-dashed border-gray-400 bg-white p-2 mr-6 mb-6 cursor-move flex items-center justify-center"
      style={{ opacity }}
      data-testid="box"
    >
      {product.name}
    </div>
  );
};

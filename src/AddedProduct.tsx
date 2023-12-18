import { useDrag } from "react-dnd";
import { ProductTypes } from "./ItemTypes";

export interface AddedProductProps {
  product: ProductTypes;
}

export const AddedProduct = function AddedProduct({ product }: AddedProductProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: product.category,
      item: product,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [product, product.category]
  );

  return (
    <div
      ref={drag}
      className="p-2 my-1 bg-pink-300 text-black flex justify-center rounded cursor-move"
      data-testid="added-product"
      style={{ opacity }}
    >
      {product.name}
    </div>
  );
};

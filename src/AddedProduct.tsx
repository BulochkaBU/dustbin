import { useDrag } from "react-dnd";

export interface AddedProductProps {
  name: string;
  currentCategory: string;
  id: number;
}

export const AddedProduct = function AddedProduct({
  id,
  name,
  currentCategory,
}: AddedProductProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: currentCategory,
      item: { name, id, currentCategory },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, currentCategory]
  );

  return (
    <div
      ref={drag}
      className="p-2 my-1 bg-pink-300 text-black flex justify-center rounded cursor-move"
      data-testid="added-product"
      style={{ opacity }}
    >
      {name}
    </div>
  );
};

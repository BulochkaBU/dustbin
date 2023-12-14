import { useDrag } from "react-dnd";
import { Category } from "./ItemTypes";

export interface BoxProps {
  name: string;
  currentCategory: Category;
  isDropped: boolean;
}

export const Box = function Box({ name, currentCategory, isDropped }: BoxProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: currentCategory,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, currentCategory]
  );

  return (
    <div
      ref={drag}
      className="border border-dashed border-gray-400 bg-white p-2 mr-6 mb-6 cursor-move flex items-center justify-center"
      style={{ opacity }}
      data-testid="box"
    >
      {isDropped ? <s>{name}</s> : name}
    </div>
  );
};

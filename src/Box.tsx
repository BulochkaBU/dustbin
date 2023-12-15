import { useDrag } from "react-dnd";
import { CategoryTypes } from "./ItemTypes";

export interface BoxProps {
  name: string;
  currentCategory: CategoryTypes[];
  isDropped: boolean;
  id: number;
}

export const Box = function Box({ id, name, currentCategory, isDropped }: BoxProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: currentCategory[0],
      item: { name, id },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, currentCategory]
  );

  return (
    <div
      ref={drag}
      className={`border border-dashed border-gray-400 bg-white p-2 mr-6 mb-6 ${
        isDropped ? "" : "cursor-move"
      } flex items-center justify-center`}
      style={{ opacity }}
      data-testid="box"
    >
      {isDropped ? <s>{name}</s> : name}
    </div>
  );
};

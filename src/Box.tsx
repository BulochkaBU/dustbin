import { memo } from "react";
import { useDrag } from "react-dnd";

export interface BoxProps {
  name: string;
  category: string;
  isDropped: boolean;
}

export const Box = memo(function Box({ name, category, isDropped }: BoxProps) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: category,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, category]
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
});

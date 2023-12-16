import { useDrag } from "react-dnd";

export interface BoxProps {
  name: string;
  currentCategory: string;
  id: number;
}

export const Box = function Box({ id, name, currentCategory }: BoxProps) {
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
      className="border border-dashed border-gray-400 bg-white p-2 mr-6 mb-6 cursor-move flex items-center justify-center"
      style={{ opacity }}
      data-testid="box"
    >
      {name}
    </div>
  );
};

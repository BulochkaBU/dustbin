import { useDrag } from "react-dnd";
import { ProductTypes } from "../const/ItemTypes";

export interface ProductProps {
  product: ProductTypes;
  className?: string;
  dataTestid: string;
}

export const Product = function Product({ product, className, dataTestid }: ProductProps) {
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
    <div ref={drag} className={className} data-testid={dataTestid} style={{ opacity }}>
      {product.name}
    </div>
  );
};

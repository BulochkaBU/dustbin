import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProductToDustbin } from "../store/dustbinSlice";
import { ProductTypes } from "../const/ItemTypes";
import { Dustbin } from "./Dustbin";
import { Product } from "./Product";

function Container() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.dustbinsSlice.products);
  const dustbins = useAppSelector((state) => state.dustbinsSlice.dustbins);

  const handleDrop = useCallback(
    (index: number, product: ProductTypes) => {
      dispatch(addProductToDustbin({ index, product }));
    },
    [dispatch]
  );

  return (
    <div>
      <div className="flex justify-center">
        {dustbins.map(({ accepts, addedProductsInDustbin }, index) => (
          <Dustbin
            accept={accepts}
            addedProductsInDustbin={addedProductsInDustbin}
            onDrop={(product: ProductTypes) => handleDrop(index, product)}
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            className="border border-dashed border-gray-400 bg-white p-2 mr-6 mb-6 cursor-move flex items-center justify-center"
            dataTestid="box"
          />
        ))}
      </div>
    </div>
  );
}

export default Container;

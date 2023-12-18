import { useDispatch, useSelector } from "react-redux";
import { DustbinState, addProductToDustbin } from "./dustbinSlice";
import { Box } from "./Box";
import { Dustbin } from "./Dustbin";
import { useCallback } from "react";
import { ProductTypes } from "./ItemTypes";

function Container() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: { dustbinsSlice: DustbinState }) => state.dustbinsSlice.products
  );
  const dustbins = useSelector(
    (state: { dustbinsSlice: DustbinState }) => state.dustbinsSlice.dustbins
  );

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
          <Box product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Container;

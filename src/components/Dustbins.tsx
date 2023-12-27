import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProductToDustbin } from "../store/dustbinSlice";
import { ProductTypes } from "../const/ItemTypes";
import { Dustbin } from "./Dustbin";

export const Dustbins = function Dustbins() {
  const dispatch = useAppDispatch();

  const dustbins = useAppSelector((state) => state.dustbinsSlice.dustbins);

  const handleDrop = useCallback(
    (index: number, product: ProductTypes) => {
      dispatch(addProductToDustbin({ index, product }));
    },
    [dispatch]
  );

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-teal-700 p-5">This dustbin accepts:</h1>
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
    </>
  );
};

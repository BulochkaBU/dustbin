import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DustbinTypes, ProductTypes } from "./ItemTypes";
import { Categories } from "./const";

export interface DustbinState {
  dustbins: DustbinTypes[];
  products: ProductTypes[];
}

const initialState: DustbinState = {
  dustbins: [
    { id: 3, accepts: [Categories.GLASS], addedProductsInDustbin: [] },
    { id: 2, accepts: [Categories.FOOD], addedProductsInDustbin: [] },
    {
      id: 1,
      accepts: [Categories.PAPER, Categories.GLASS],
      addedProductsInDustbin: [],
    },
    { id: 6, accepts: [Categories.PAPER], addedProductsInDustbin: [] },
  ],
  products: [
    { id: 12, name: "Bottle", currentCategory: Categories.GLASS },
    { id: 14, name: "Banana", currentCategory: Categories.FOOD },
    { id: 16, name: "Magazine", currentCategory: Categories.PAPER },
  ],
};

const dustbinSlice = createSlice({
  name: "tt",
  initialState,
  reducers: {
    addProductToDustbin: (
      state,
      action: PayloadAction<{ index: number; product: ProductTypes }>
    ) => {
      const { index, product } = action.payload;

      const isProductInDustbin = state.dustbins[index].addedProductsInDustbin.some(
        (addedProduct) => addedProduct.name === product.name
      );

      if (!isProductInDustbin) {
        state.dustbins[index].addedProductsInDustbin.push(product);

        state.products = state.products.filter((p) => p.id !== product.id);
        // state.dustbins[index].addedProductsInDustbin = state.dustbins[
        //   index
        // ].addedProductsInDustbin.filter((p) => p.id !== productWithCategory.id);
      }
    },
  },
});

export const { addProductToDustbin } = dustbinSlice.actions;
export default dustbinSlice.reducer;

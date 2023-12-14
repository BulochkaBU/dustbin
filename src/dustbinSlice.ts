import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DustbinTypes, ProductTypes } from "./ItemTypes";
import { Categories } from "./const";

export interface DustbinState {
  dustbins: DustbinTypes[];
  products: ProductTypes[];
  addedProductsInDustbin: ProductTypes[];
  droppedBoxNames: string[];
}

const initialState: DustbinState = {
  dustbins: [
    { accepts: [Categories.GLASS], addedProductsInDustbin: [] },
    { accepts: [Categories.FOOD], addedProductsInDustbin: [] },
    {
      accepts: [Categories.PAPER, Categories.GLASS],
      addedProductsInDustbin: [],
    },
    { accepts: [Categories.PAPER], addedProductsInDustbin: [] },
  ],
  products: [
    { id: 12, name: "Bottle", currentCategory: Categories.GLASS },
    { id: 14, name: "Banana", currentCategory: Categories.FOOD },
    { id: 16, name: "Magazine", currentCategory: Categories.PAPER },
  ],
  addedProductsInDustbin: [],
  droppedBoxNames: [],
};

const dustbinSlice = createSlice({
  name: "tt",
  initialState,
  reducers: {
    removeProductFromDustbin(
      state,
      action: PayloadAction<{ product: ProductTypes; dustbinIndex: number }>
    ) {
      const { product, dustbinIndex } = action.payload;
      state.dustbins[dustbinIndex].addedProductsInDustbin = state.dustbins[
        dustbinIndex
      ].addedProductsInDustbin.filter((item) => item.name !== product.name);
      state.addedProductsInDustbin = state.addedProductsInDustbin.filter(
        (item) => item.name !== product.name
      );
    },
    addProductToDustbin(
      state,
      action: PayloadAction<{ product: ProductTypes; dustbinIndex: number }>
    ) {
      const { product, dustbinIndex } = action.payload;
      state.dustbins[dustbinIndex].addedProductsInDustbin.push(product);
      state.addedProductsInDustbin.push(product);
    },
    setDroppedBoxNames(state, action: PayloadAction<{ product: ProductTypes }>) {
      const { product } = action.payload;
      product.name ? state.droppedBoxNames.push(product.name) : null;
    },
  },
});

export const { removeProductFromDustbin, addProductToDustbin, setDroppedBoxNames } =
  dustbinSlice.actions;
export default dustbinSlice.reducer;

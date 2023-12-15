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
      accepts: [Categories.GLASS, Categories.PAPER],
      addedProductsInDustbin: [],
    },
    { id: 6, accepts: [Categories.PAPER], addedProductsInDustbin: [] },
  ],
  products: [
    { id: 12, name: "Bottle", currentCategory: [Categories.GLASS], isDropped: false },
    { id: 14, name: "Banana", currentCategory: [Categories.FOOD], isDropped: false },
    { id: 16, name: "Magazine", currentCategory: [Categories.PAPER], isDropped: false },
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

      const productWithCategory: ProductTypes = {
        ...product,
        currentCategory: state.dustbins[index].accepts,
      };

      const isProductInDustbin = state.dustbins.some((dustbin) =>
        dustbin.addedProductsInDustbin.some((addedProduct) => addedProduct.name === product.name)
      );

      if (!isProductInDustbin) {
        state.dustbins[index].addedProductsInDustbin.push(productWithCategory);
        state.products.map((product) => {
          if (product.id === productWithCategory.id) {
            product.isDropped = true;
          }
        });
      }
    },
  },
});

export const { addProductToDustbin } = dustbinSlice.actions;
export default dustbinSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { CategoryTypes, DustbinTypes, ProductTypes } from "../const/ItemTypes";
import { dustbins, products } from "../const/const";

export interface DustbinState {
  dustbins: DustbinTypes[];
  products: ProductTypes[];
  searchNameProduct: string;
  newProduct: boolean;
  filter: CategoryTypes;
}

const initialState: DustbinState = {
  dustbins: dustbins,
  products: products,
  searchNameProduct: "",
  newProduct: false,
  filter: "",
};

const dustbinSlice = createSlice({
  name: "dustbinsSlice",
  initialState,
  reducers: {
    addProductToDustbin: (
      state,
      action: PayloadAction<{ index: number; product: ProductTypes }>
    ) => {
      const { index, product } = action.payload;

      const productWithCategory: ProductTypes = {
        ...product,
        currentDustbinIndex: index,
      };

      const isProductInDustbin = state.dustbins.some((dustbin) =>
        dustbin.addedProductsInDustbin.some((addedProduct) => addedProduct.id === product.id)
      );

      if (!isProductInDustbin) {
        state.dustbins[index].addedProductsInDustbin.push(productWithCategory);
        state.products = state.products.filter((p) => p.id !== product.id);
      } else {
        const binIndex = state.dustbins.findIndex((dustbin) =>
          dustbin.addedProductsInDustbin.some((p) => p.id === product.id)
        );

        if (binIndex !== -1) {
          state.dustbins[binIndex].addedProductsInDustbin = state.dustbins[
            binIndex
          ].addedProductsInDustbin.filter((p) => p.id !== product.id);
        }
        state.dustbins[index].addedProductsInDustbin.push(productWithCategory);
      }
    },
    createNewProduct: (
      state,
      action: PayloadAction<{ searchNameProduct: string; category: CategoryTypes }>
    ) => {
      const newProduct: ProductTypes = {
        id: uuidv4(),
        name: action.payload.searchNameProduct,
        ...action.payload,
        currentDustbinIndex: null,
      };

      state.products.push(newProduct);
    },
    setSearchNameProduct: (state, action: PayloadAction<string>) => {
      state.searchNameProduct = action.payload;
    },
    setNewProduct: (state, action: PayloadAction<boolean>) => {
      state.newProduct = action.payload;
    },
    setFilter: (state, action: PayloadAction<CategoryTypes>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addProductToDustbin,
  createNewProduct,
  setSearchNameProduct,
  setNewProduct,
  setFilter,
} = dustbinSlice.actions;
export default dustbinSlice.reducer;

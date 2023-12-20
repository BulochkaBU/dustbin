export type CategoryTypes = "FOOD" | "PAPER" | "GLASS" | "";

export interface ProductTypes {
  id: string;
  name: string;
  category: CategoryTypes | string;
  currentDustbinIndex: number | null;
}

export interface DustbinTypes {
  id: string;
  accepts: CategoryTypes[];
  addedProductsInDustbin: ProductTypes[];
}

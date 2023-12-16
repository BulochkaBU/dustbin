export type CategoryTypes = "FOOD" | "PAPER" | "GLASS";

export interface ProductTypes {
  id: number;
  name: string;
  currentCategory: CategoryTypes;
}

export interface DustbinTypes {
  id: number;
  accepts: CategoryTypes[];
  addedProductsInDustbin: ProductTypes[];
}

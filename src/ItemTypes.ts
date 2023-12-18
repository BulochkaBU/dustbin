export type CategoryTypes = "FOOD" | "PAPER" | "GLASS";

export interface ProductTypes {
  id: number;
  name: string;
  category: CategoryTypes;
  currentDustbinIndex: number | null;
}

export interface DustbinTypes {
  id: number;
  accepts: CategoryTypes[];
  addedProductsInDustbin: ProductTypes[];
}

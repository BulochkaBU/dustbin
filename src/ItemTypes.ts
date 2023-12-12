export interface CategoriesTypes {
  FOOD: string;
  GLASS: string;
  PAPER: string;
}

export const Categories: CategoriesTypes = {
  FOOD: "food",
  GLASS: "glass",
  PAPER: "paper",
};

export interface ProductTypes {
  name?: string;
  currentCategory?: string[];
}

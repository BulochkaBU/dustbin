export const Categories = {
  FOOD: "FOOD",
  PAPER: "PAPER",
  GLASS: "GLASS",
} as const;

export const dustbins = [
  { id: 3, accepts: [Categories.GLASS], addedProductsInDustbin: [] },
  { id: 2, accepts: [Categories.FOOD], addedProductsInDustbin: [] },
  {
    id: 1,
    accepts: [Categories.PAPER, Categories.GLASS],
    addedProductsInDustbin: [],
  },
  { id: 6, accepts: [Categories.PAPER], addedProductsInDustbin: [] },
];

export const products = [
  { id: 12, name: "Bottle", category: Categories.GLASS, currentDustbinIndex: null },
  { id: 14, name: "Banana", category: Categories.FOOD, currentDustbinIndex: null },
  { id: 16, name: "Magazine", category: Categories.PAPER, currentDustbinIndex: null },
  { id: 4, name: "Glass mug", category: Categories.GLASS, currentDustbinIndex: null },
  { id: 7, name: "Pineapple", category: Categories.FOOD, currentDustbinIndex: null },
  { id: 46, name: "Love letter", category: Categories.PAPER, currentDustbinIndex: null },
];

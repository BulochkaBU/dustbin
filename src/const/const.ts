export const categories = {
  FOOD: "FOOD",
  PAPER: "PAPER",
  GLASS: "GLASS",
} as const;

export const dustbins = [
  { id: "3", accepts: [categories.GLASS], addedProductsInDustbin: [] },
  { id: "2", accepts: [categories.FOOD], addedProductsInDustbin: [] },
  {
    id: "1",
    accepts: [categories.PAPER, categories.GLASS],
    addedProductsInDustbin: [],
  },
  { id: "6", accepts: [categories.PAPER], addedProductsInDustbin: [] },
];

export const products = [
  { id: "12", name: "Bottle", category: categories.GLASS, currentDustbinIndex: null },
  { id: "14", name: "Banana", category: categories.FOOD, currentDustbinIndex: null },
  { id: "16", name: "Magazine", category: categories.PAPER, currentDustbinIndex: null },
  { id: "4", name: "Glass mug", category: categories.GLASS, currentDustbinIndex: null },
  { id: "7", name: "Pineapple", category: categories.FOOD, currentDustbinIndex: null },
  { id: "46", name: "Love letter", category: categories.PAPER, currentDustbinIndex: null },
];

import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setNewProduct } from "../store/dustbinSlice";
import { ProductTypes } from "../const/ItemTypes";
import { Product } from "./Product";

export const Products = function Products() {
  {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.dustbinsSlice.products);
    const filter = useAppSelector((state) => state.dustbinsSlice.filter);
    const searchNameProduct = useAppSelector((state) => state.dustbinsSlice.searchNameProduct);

    const [visibleProducts, setVisibleProducts] = useState<ProductTypes[]>([]);

    useEffect(() => {
      const result = filterProducts(searchProduct(products, searchNameProduct), filter);
      setVisibleProducts(result);
    }, [products, searchNameProduct, filter]);

    const searchProduct = (products: ProductTypes[], term: string) => {
      if (term.length === 0) {
        dispatch(setNewProduct(false));
        return products;
      }
      const filteredProducts = products.filter((item) => {
        return item.name.toLowerCase().startsWith(term.toLowerCase());
      });
      if (filteredProducts.length === 0) {
        dispatch(setNewProduct(true));
      }

      return filteredProducts;
    };

    const filterProducts = (products: ProductTypes[], filter: string) => {
      switch (filter) {
        case "FOOD":
          return products.filter((item) => item.category.includes("FOOD"));
        case "PAPER":
          return products.filter((item) => item.category.includes("PAPER"));
        case "GLASS":
          return products.filter((item) => item.category.includes("GLASS"));
        default:
          return products;
      }
    };

    return (
      <div className="flex justify-center m-6">
        {visibleProducts.length === 0 ? (
          <div className="flex items-center">
            <div className=" text-xl text-indigo-800 mr-3">No products</div>
          </div>
        ) : (
          visibleProducts.map((product) => (
            <Product
              product={product}
              key={product.id}
              className="border border-dashed border-teal-700 bg-white p-2 mr-6 cursor-move flex items-center justify-center"
              dataTestid="box"
            />
          ))
        )}
      </div>
    );
  }
};

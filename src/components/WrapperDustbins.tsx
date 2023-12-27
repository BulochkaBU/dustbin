import { useCallback, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProductToDustbin, setNewProduct } from "../store/dustbinSlice";
import { ProductTypes } from "../const/ItemTypes";
import { Dustbin } from "./Dustbin";
import { Product } from "./Product";

function Container() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.dustbinsSlice.products);
  const dustbins = useAppSelector((state) => state.dustbinsSlice.dustbins);
  const searchNameProduct = useAppSelector((state) => state.dustbinsSlice.searchNameProduct);

  const handleDrop = useCallback(
    (index: number, product: ProductTypes) => {
      dispatch(addProductToDustbin({ index, product }));
    },
    [dispatch]
  );

  const [visibleProducts, setVisibleProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const result = searchProduct(products, searchNameProduct);
    setVisibleProducts(result);
  }, [products, searchNameProduct]);

  const searchProduct = (products: ProductTypes[], term: string) => {
    dispatch(setNewProduct(false));
    if (term.length === 0) {
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

  return (
    <div>
      <div className="flex justify-center">
        {dustbins.map(({ accepts, addedProductsInDustbin }, index) => (
          <Dustbin
            accept={accepts}
            addedProductsInDustbin={addedProductsInDustbin}
            onDrop={(product: ProductTypes) => handleDrop(index, product)}
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {visibleProducts.map((product) => (
          <Product
            product={product}
            key={product.id}
            className="border border-dashed border-teal-700 bg-white p-2 mr-6 mb-6 cursor-move flex items-center justify-center"
            dataTestid="box"
          />
        ))}
      </div>
    </div>
  );
}

export default Container;

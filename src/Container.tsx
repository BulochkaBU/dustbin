import { useSelector } from "react-redux";
import { DustbinState } from "./dustbinSlice";

function Container() {
  const selectProducts = (state: DustbinState) => state.tt.products;
  const products = useSelector(selectProducts);
  console.log(products);

  // const handleDrop = useCallback(
  //   (product: ProductTypes, index: number) => {
  //     dispatch(setDroppedBoxNames({ product }));
  //     dispatch(addProductToDustbin({ product, dustbinIndex: index }));
  //   },
  //   [droppedBoxNames, dustbins]
  // );

  return (
    <div>
      <div>
        {products.map((product, index) => (
          <div key={index}>{product.name}</div>
        ))}
      </div>
      {/* <div className="flex justify-center">
        {dustbins.length > 0 &&
          dustbins.map(({ accepts }, index) => (
            <Dustbin
              accept={accepts}
              // addedProductsInDustbin={addedProductsInDustbin}
              // onDrop={(product) => handleDrop(product, index)}
              key={index}
            />
          ))}
      </div> */}

      {/* <div className="flex justify-center">
        {products &&
          products.map(({ name, currentCategory }, index) => (
            <Box
              name={name}
              currentCategory={currentCategory}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
      </div> */}
    </div>
  );
}

export default Container;

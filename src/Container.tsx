import update from "immutability-helper";
import { memo, useCallback, useState } from "react";

import { Box } from "./Box";
import { Dustbin } from "./Dustbin";
import { Categories, ProductTypes } from "./ItemTypes";

interface DustbinState {
  accepts: string[];
  addedProducts: ProductTypes[];
}

interface BoxState {
  name: string;
  category: string;
}

export interface DustbinSpec {
  accepts: string[];
  addedProducts: ProductTypes[];
}
export interface BoxSpec {
  name: string;
  addedProducts: ProductTypes[];
}
export interface ContainerState {
  droppedBoxNames: string[];
  dustbins: DustbinSpec[];
  boxes: BoxSpec[];
}

export const Container = memo(function Container() {
  const [dustbins, setDustbins] = useState<DustbinState[]>([
    { accepts: [Categories.GLASS], addedProducts: [] },
    { accepts: [Categories.FOOD], addedProducts: [] },
    {
      accepts: [Categories.PAPER, Categories.GLASS],
      addedProducts: [],
    },
    { accepts: [Categories.PAPER], addedProducts: [] },
  ]);

  const [boxes] = useState<BoxState[]>([
    { name: "Bottle", category: Categories.GLASS },
    { name: "Banana", category: Categories.FOOD },
    { name: "Magazine", category: Categories.PAPER },
  ]);

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  function isDropped(list: string[], boxName: string) {
    return list.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, product: ProductTypes) => {
      const productWithCategory = {
        ...product,
        currentCategory: dustbins[index].accepts,
      };

      setDroppedBoxNames(update(droppedBoxNames, product.name ? { $push: [product.name] } : { $push: [] }));
      setDustbins(
        update(dustbins, {
          [index]: {
            addedProducts: {
              $push: [productWithCategory],
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );

  return (
    <div>
      <div className="flex justify-center">
        {dustbins.map(({ accepts, addedProducts }, index) => (
          <Dustbin
            accept={accepts}
            addedProducts={addedProducts}
            onDrop={(product) => handleDrop(index, product)}
            key={index}
            isDropped={(product) => isDropped(droppedBoxNames, product.name || "")}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {boxes.map(({ name, category }, index) => (
          <Box name={name} category={category} isDropped={isDropped(droppedBoxNames, name)} key={index} />
        ))}
      </div>
    </div>
  );
});

export default Container;

import { Dustbins } from "../components/Dustbins.tsx";
import { Filter } from "../components/Filter.tsx";
import { Form } from "../components/Form.tsx";
import { Products } from "../components/Products.tsx";
import { ResetFilterAndSearch } from "../components/ResetFilterAndSearch.tsx";
import { categories } from "../const/const.ts";

export const MainPage = function MainPage() {
  const categoriesArray = Object.values(categories);

  return (
    <>
      <Dustbins />
      <Products />
      <div className="flex justify-center">
        <Filter allCategories={categoriesArray} />
        <Form allCategories={categoriesArray} />
      </div>
      <ResetFilterAndSearch />
    </>
  );
};

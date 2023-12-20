import WrapperDustbins from "../components/WrapperDustbins.tsx";
import { Form } from "../components/Form.tsx";
import { categories } from "../const/const.ts";

export const MainPage = function MainPage() {
  const categoriesArray = Object.values(categories);
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-teal-700 p-5">This dustbin accepts:</h1>
      <WrapperDustbins />
      <Form allCategories={categoriesArray} />
    </>
  );
};

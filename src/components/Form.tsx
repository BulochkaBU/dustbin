import { CategoryTypes } from "../const/ItemTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createNewProduct, setSearchNameProduct } from "../store/dustbinSlice";
import { useCallback, useState } from "react";

interface FormProps {
  allCategories: CategoryTypes[];
}

export const Form = function Form({ allCategories }: FormProps) {
  const dispatch = useAppDispatch();
  const searchNameProduct = useAppSelector((state) => state.dustbinsSlice.searchNameProduct);
  const newProduct = useAppSelector((state) => state.dustbinsSlice.newProduct);

  const [category, setCategory] = useState<CategoryTypes>("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(createNewProduct({ searchNameProduct, category }));
      dispatch(setSearchNameProduct(""));
      setCategory("");
    },
    [dispatch, searchNameProduct, category]
  );

  const onSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newsearchNameProduct = e.target.value;
    dispatch(setSearchNameProduct(newsearchNameProduct));
  };

  return (
    <div className="flex justify-center">
      <form
        className="bg-stone-500 shadow-md rounded p-3 w-64 flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-white text-center font-bold my-2" htmlFor="name">
            {newProduct ? "Add new product" : "Search product"}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            required
            value={searchNameProduct}
            placeholder="Name product"
            onChange={(e) => onSearchProduct(e)}
          />
        </div>

        {newProduct && (
          <>
            <div className="mb-6">
              <label
                htmlFor="categories"
                className="block text-white text-center text-md font-bold mb-2"
              >
                Select an option
              </label>
              <select
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => setCategory(e.target.value as CategoryTypes)}
                value={category}
              >
                <option value="" disabled hidden>
                  Choose a category
                </option>
                {allCategories.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-indigo-400 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add product
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

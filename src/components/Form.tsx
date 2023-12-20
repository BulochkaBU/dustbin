import { CategoryTypes } from "../const/ItemTypes";
import { useAppDispatch } from "../store/hooks";
import { createNewProduct } from "../store/dustbinSlice";
import { useCallback, useState } from "react";

interface IForm {
  allCategories: CategoryTypes[];
}

export const Form = function Form({ allCategories }: IForm) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<CategoryTypes>("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      dispatch(createNewProduct({ name, category }));

      setName("");
      setCategory("");
    },
    [dispatch, name, category]
  );

  return (
    <div className="flex justify-center">
      <div className="w-64 ">
        <form
          className="bg-stone-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-white text-center text-md font-bold mb-2" htmlFor="name">
              Name product
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
              value={name}
              placeholder="Name product"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
        </form>
      </div>
    </div>
  );
};
import { CategoryTypes } from "../const/ItemTypes";
import { setFilter } from "../store/dustbinSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface FilterProps {
  allCategories: CategoryTypes[];
}
export const Filter = function Filter({ allCategories }: FilterProps) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.dustbinsSlice.filter);

  return (
    <div className="flex flex-col text-black bg-teal-700 rounded mr-3 w-64 p-3">
      <div className="text-lg text-center text-white">Filter</div>
      {allCategories.map((category) => (
        <button
          onClick={() => dispatch(setFilter(category))}
          key={category}
          className={`px-10 py-2 ${
            filter === category ? "bg-indigo-400" : "bg-stone-200  hover:bg-pink-200"
          } my-1 rounded`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

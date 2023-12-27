import { setFilter, setSearchNameProduct } from "../store/dustbinSlice";
import { useAppDispatch } from "../store/hooks";

export const ResetFilterAndSearch = function ResetFilterAndSearch() {
  const dispatch = useAppDispatch();
  const reset = () => {
    dispatch(setFilter(""));
    dispatch(setSearchNameProduct(""));
  };

  return (
    <div className="flex justify-center m-3">
      <button
        className="px-56 py-2 bg-stone-200 my-1 rounded hover:bg-indigo-400 "
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
};

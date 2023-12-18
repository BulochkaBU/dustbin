import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import WrapperDustbins from "./components/WrapperDustbins.tsx";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <h1 className="text-3xl font-bold text-center text-teal-700 p-5">This dustbin accepts:</h1>
        <WrapperDustbins />
      </DndProvider>
    </Provider>
  );
}

export default App;

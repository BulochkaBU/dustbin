import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { MainPage } from "./pages/MainPage.tsx";
import store from "./store/store.ts";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <MainPage />
      </DndProvider>
    </Provider>
  );
}

export default App;

import "./App.css";
import { Counter } from "./components/counter/counter.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

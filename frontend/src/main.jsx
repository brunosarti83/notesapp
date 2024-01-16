import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Use createRoot instead of ReactDOM.render
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

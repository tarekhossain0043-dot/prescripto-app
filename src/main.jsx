import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="prescripto-app">
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);

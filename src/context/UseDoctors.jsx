import { useContext } from "react";
import { AppContext } from "./AppCont";
export const useDoctor = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useDoctor must be used within AppContextProvider");
  }
  return context;
};

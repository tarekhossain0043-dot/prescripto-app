import { doctors } from "../assets/assets";
import { AppContext } from "./AppCont";

function AppContextProvider(props) {
  const value = {
    doctors,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
export default AppContextProvider;

import { useContext } from "react";
import { AppContext } from "../../context";

const useAppContext = () => {
  const contextValue = useContext(AppContext);

  if (contextValue === null) {
    throw new Error("Context is not provided");
  }

  return contextValue;
};

export default useAppContext;

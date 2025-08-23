import { useContext } from "react";
import { MessageContext } from "./messageContext";

export const useMessage = () => {
  const context = useContext(MessageContext);

  if (!context) {
    throw new Error(
      "useMessage deve estar sendo usada dentro do MessageProvider",
    );
  }

  return context;
};

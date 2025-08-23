import { useContext } from "react";
import { AuthContext } from "./auth";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("UseAtuh deve ser usado dentro do AuthProvider");
  }
  return context;
};

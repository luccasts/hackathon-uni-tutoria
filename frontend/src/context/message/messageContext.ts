import { createContext } from "react";
import type { MessageContextType } from "./types";

export const MessageContext = createContext<MessageContextType | null>(null);

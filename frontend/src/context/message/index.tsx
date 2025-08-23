import { createContext } from "react";
import type { IMessageContextType } from "./types";
export const MessageContext = createContext<IMessageContextType | null>(null);

export const MessageProvider = ({ children }: MessageProviderProps) => {};

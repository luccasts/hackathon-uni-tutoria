import { useState } from "react";
import type { MessageProviderProps, MessageType } from "./types";
import { MessageContext } from "./messageContext";

export const MessageProvider = ({ children }: MessageProviderProps) => {
  const [message, setMessage] = useState<MessageType | null>(null);
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

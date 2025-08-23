export interface MessageContextType {
  message: MessageType | null;
  setMessage: (message: MessageType | null) => void;
}

export interface MessageProviderProps {
  children: React.ReactNode;
}

export interface MessageType {
  message: string | null;
  type: "success" | "error" | "info";
}

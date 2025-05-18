import { createContext, useState } from "react";

export const DestaqueContext = createContext();

export function DestaqueProvider({ children }) {
  const [jogoDestaque, setJogoDestaque] = useState(null);
  return (
    <DestaqueContext.Provider value={{ jogoDestaque, setJogoDestaque }}>
      {children}
    </DestaqueContext.Provider>
  );
}

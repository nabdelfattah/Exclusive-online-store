import { createContext, useState } from "react";

export const HeaderContext = createContext({
  isSticky: false,
  setIsSticky: (val) => {},
});
export default function HeaderContextProvider({ children }) {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <HeaderContext.Provider value={{ isSticky, setIsSticky }}>
      {children}
    </HeaderContext.Provider>
  );
}

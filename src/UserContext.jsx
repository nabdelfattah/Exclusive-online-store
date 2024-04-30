import { createContext, useState } from "react";

export const UserContext = createContext({
  user: "",
  setUser: () => {},
});

function UserContextProvider(props) {
  const [user, setUser] = useState("hi");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

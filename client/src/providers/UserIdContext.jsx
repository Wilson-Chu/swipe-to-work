import { createContext, useContext, useState } from "react";

const UserIdContext = createContext();

export const UserIdProvider =({children}) => {

  const [userId, setUserId] = useState("");

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );

};

export const useUserId = () => {
  
};
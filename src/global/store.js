/* eslint-disable prettier/prettier */

import React, {createContext, useContext, useState} from 'react';
const AppContext = createContext();

export function Store({children}) {
  const [user, setUser] = useState({});

  // State Setter
  let data = {
    user,
    setUser,
  };
  // Return Function
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
// Exporting Theme Data for use as a Global State
export function useStore() {
  return useContext(AppContext);
}

import React, { useState } from 'react';

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [isAddFriendVisible, setIsAddFriendVisible] = useState(false);

  return (
    <AppContext.Provider value={{isAddFriendVisible, setIsAddFriendVisible}}>{children}</AppContext.Provider>
  );
}

import { createContext, useState } from 'react';

const AppContext = createContext({ isLoading: false });

function AppContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };

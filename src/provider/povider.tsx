import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface GlobalContextProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const globalContext = createContext<GlobalContextProps | undefined>(undefined);

export const useGlobalStore = (): GlobalContextProps => {
  const value = useContext(globalContext);
  if (!value) {
    throw new Error('useGlobalStore must be used within a Provider');
  }
  return value;
};

interface ProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const Component = globalContext.Provider;

  const values: GlobalContextProps = {
    theme,
    setTheme,
  };

  return (
    <Component value={values}>
      {children}
    </Component>
  );
};

export default Provider;
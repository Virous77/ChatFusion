"use client";

import React, { createContext, useContext, useState } from "react";

type Cool = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const int: Cool = {
  setIsOpen: () => {},
  isOpen: false,
};

const GlobalContext = createContext(int);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;

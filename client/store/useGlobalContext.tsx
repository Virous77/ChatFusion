"use client";
import { useAuth } from "@clerk/nextjs";
import { GetToken } from "@clerk/types";

import React, { createContext, useContext, useState } from "react";

type AppTypes = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  isLoaded: boolean;
  userId: string | null | undefined;
  sessionId: string | null | undefined;
  getToken: GetToken;
};

const initialState: AppTypes = {
  setIsOpen: () => {},
  isOpen: false,
  isLoaded: false,
  userId: "",
  sessionId: "",
  getToken: async () => {
    return "";
  },
};

const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  console.log("isLoaded", isLoaded);
  console.log("userId", userId);
  console.log("sessionId", sessionId);
  // console.log("getToken", getToken);

  return (
    <GlobalContext.Provider
      value={{ isOpen, setIsOpen, isLoaded, userId, sessionId, getToken }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;

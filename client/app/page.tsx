"use client";

import React, { use } from "react";
import { useGlobalContext } from "@/store/useGlobalContext";

const Home = () => {
  const { isOpen, setIsOpen } = useGlobalContext();

  return <div onClick={() => setIsOpen(true)}>Home</div>;
};

export default Home;

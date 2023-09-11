"use client";

import React from "react";
import { Server } from "@/types/interface";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

type NavigationProps = {
  props: Server;
};

const NavigationItem: React.FC<NavigationProps> = ({ props }) => {
  return <div>NavigationItem</div>;
};

export default NavigationItem;

"use client";

import React from "react";
import { Plus } from "lucide-react";
import { ActionTooltip } from "../ui/action-tooltip";

const SidebarAction = () => {
  return (
    <div className="group">
      <ActionTooltip side="right" align="center" label="Add a server">
        <div className="bg-background dark:bg-neutral-700 p-2 rounded-full cursor-pointer group-hover:bg-emerald-500 group-hover:rounded-[16px] transition-all overflow-hidden w-[40px] h-[40px]">
          <Plus size={25} className="text-emerald-500 group-hover:text-white" />
        </div>
      </ActionTooltip>
    </div>
  );
};

export default SidebarAction;

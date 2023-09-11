import { getServerUser } from "@/api/server";
import { Server } from "@/types/interface";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import SidebarAction from "./SidebarAction";
import { Separator } from "../ui/seprator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./NavigationItem";

type ResponseServer = {
  status: boolean;
  data: Server[];
};

const Sidebar = async () => {
  const user = await currentUser();

  if (!user?.id) return redirect("/");

  const { data }: ResponseServer = await getServerUser({
    id: user.id,
    type: "all",
  });

  return (
    <aside className="w-full flex items-center flex-col">
      <SidebarAction />
      <Separator className="h-[2px] rounded-md mx-auto bg-zinc-300 dark:bg-zinc-700 w-full mt-2" />
      <ScrollArea className="flex-1 w-full">
        {data.map((server) => (
          <NavigationItem key={server._id} props={server} />
        ))}
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;

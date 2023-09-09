import { getServerUser } from "@/api/server";
import { Server } from "@/types/interface";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

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

  console.log(data);

  return <div>Sidebar</div>;
};

export default Sidebar;

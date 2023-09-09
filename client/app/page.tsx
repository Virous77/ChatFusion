import { userFetch } from "@/api/user";
import { getServerUser } from "@/api/server";
import { redirect } from "next/navigation";
import Modal from "@/components/modals/Modal";
import { User, Server } from "@/types/interface";

type ResponseUser = {
  status: boolean;
  data: User;
};

export type ResponseServer = {
  status: boolean;
  data: Server;
};

const Home = async () => {
  const { data }: ResponseUser = await userFetch();
  const { data: serverUser }: ResponseServer = await getServerUser({
    id: data.userId,
    type: "one",
  });

  if (serverUser) return redirect(`/server/${serverUser.userAuthId}`);

  return <Modal userData={data} />;
};

export default Home;

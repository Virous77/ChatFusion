import { userFetch } from "@/api/user";
import { getServerUser } from "@/api/server";
import { redirect } from "next/navigation";
import Modal from "@/components/modals/Modal";

const Home = async () => {
  const { data } = await userFetch();
  const { data: serverUser } = await getServerUser(data._id);

  if (serverUser) return redirect(`/server/${serverUser.profileId}`);

  return <Modal />;
};

export default Home;

import { apiPostParams } from "@/utils/util";

export const getServerUser = async ({
  id,
  type,
}: {
  id: string;
  type: string;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/server/${id}/${type}`
  );
  const data = await res.json();
  return data;
};

type ServerData = {
  name: string;
  imageUrl: string;
  userAuthId: string;
  email: string;
};

export const createServerUser = async (data: ServerData) => {
  const params = apiPostParams(data);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/server`, {
    ...params,
  });

  return await res.json();
};

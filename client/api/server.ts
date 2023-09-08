export const getServerUser = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/server/${id}`,
    {}
  );
  const data = await res.json();
  return data;
};

import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { apiPostParams } from "@/utils/util";

export const userFetch = async () => {
  const user = await currentUser();
  if (!user) return redirectToSignIn();

  const data = {
    name: `${user.firstName} ${user.lastName}`,
    userId: user.id,
    email: user.emailAddresses[0].emailAddress,
    imageUrl: user.imageUrl,
  };

  const params = apiPostParams(data);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
    ...params,
  });
  const users = await res.json();
  return users;
};

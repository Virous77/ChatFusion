"use client";

import { ModeToggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";
import { useFetch } from "@/providers/fetch";

async function getUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
    method: "POST",
  });
  const users = await res.json();
  return users;
}

const Home = () => {
  const { data } = useFetch({ action: getUser, key: "user" });

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default Home;

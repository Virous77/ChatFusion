import { ModeToggle } from "@/components/ui/toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default Home;

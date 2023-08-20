import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const NavBar = () => {
  return (
    <nav className="border-bottom-gray-200 border-b py-3">
      <div className="container flex flex-wrap items-center justify-between">
        <div className="flex gap-4">
          <div className=" mr-2 flex items-center">
            <Link href="/" className="flex items-center">
              <Icons.home className="mr-2" />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                HOA
              </span>
            </Link>
          </div>
          <Button variant="ghost">Rules</Button>
          <Button variant="ghost">Votes</Button>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

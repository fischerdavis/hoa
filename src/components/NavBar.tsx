import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ListChecks } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { Icons } from "@/components/ui/Icons";

const NavBar = () => {

  return (
    <nav className="border-bottom-gray-200 border-b py-3">
      <div className="container flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <ListChecks className="mr-2" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Quizit
          </span>
        </Link>
        <div className="flex items-center">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/create"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <Icons.plus />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Create Quiz</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

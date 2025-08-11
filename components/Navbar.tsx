import { Data } from "@/data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModeToggle } from "./dark-mode-toggle";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Navbar() {
  return (
    <div className="fixed mb-4 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center z-50 py-4 rounded-xl px-2 sm:px-4 md:px-6 bg-background/40 max-w-fit shadow dark:shadow-gray-600 shadow-gray-300 backdrop-blur-md border">
      <nav className="flex items-center space-x-1 sm:space-x-4 md:space-x-6">
        <TooltipProvider delayDuration={200}>
          {Data.navLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button
                  key={link.title}
                  variant="outline"
                  asChild
                  className="text-foreground border outline-2 outline-silver-custom shadow dark:shadow-gray-600 shadow-gray-300 hover:scale-110 hover-gradient-border transition-all duration-500 text-base sm:text-lg"
                >
                  <a href={link.href} aria-label={link.title}>
                    <FontAwesomeIcon icon={link.icon} className="text-xl" />
                    <span className="sr-only">{link.title}</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent className="text-xs px-3 py-1.5 rounded-md shadow-md">
                <p>{link.title}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
        <div className="h-6 w-[1px] bg-silver-custom opacity-70 mx-2"></div>
        <ModeToggle className="ml-2 hover:scale-110 transition duration-500 hover-gradient-border" />
      </nav>
    </div>
  );
}

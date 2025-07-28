import { ModeToggle } from "./dark-mode-toggle";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-30 items-center justify-center py-4 px-6 flex h-16
                 shadow-lg shadow-gray-700/50 dark:shadow-gray-300/70
                 outline outline-silver-custom
                 rounded-lg page-gradient-bg"
    >
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <div className="relative z-40 flex items-center gap-4">
        {" "}
        <Button
          variant="outline"
          className="hover-gradient-border dark:border-none"
        >
          Contact me
        </Button>
        <div className="h-6 w-[1px] bg-silver-custom mx-2"></div>
        <ModeToggle className="hover-gradient-border dark:border-none" />
      </div>
    </div>
  );
};

export default Footer;

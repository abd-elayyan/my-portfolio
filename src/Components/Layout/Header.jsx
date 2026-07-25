import { Button } from "../ui/Button";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    //   <div className="flex h-full justify-between max-w-6xl w-full mx-auto items-center"></div>
    <header className="fixed top-0 left-0 right-0 z-50 h-18 pt-4 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-new-background/95 via-new-background/80 to-new-background/50 backdrop-blur-xl  transition-all duration-300">
      <div className="flex  h-full justify-between max-w-6xl w-full mx-auto  items-center   ">
        <h1 className="font-['Pacifico'] text-2xl">ABZO</h1>
        <NavBar />
        <Button title={"Resume"} />
      </div>
    </header>
  );
};

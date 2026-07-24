import { Button } from "../ui/Button";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header className="fixed  w-full ">
      <div className="flex justify-between max-w-6xl w-full mx-auto pt-6 items-center  ">
        <h1 className="font-['Pacifico'] text-2xl">ABZO</h1>
        <NavBar />
        <Button title={"Resume"} />
      </div>
    </header>
  );
};

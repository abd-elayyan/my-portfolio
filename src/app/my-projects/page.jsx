import ProjectCard from "@/Components/ui/Card";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div>
      {/* header */}
      <div className="pt-39 mx-auto w-250">
        <h1 className="text-[56px] font-semibold text-center pb-2">
          My Selected Projects
        </h1>
        <p className="text-[24px] text-center">
          A full-stack project showcasing end-to-end development — from
          intuitive UI/UX design to robust backend architecture — built with
          modern technologies for performance, scalability, and clean code.
        </p>
      </div>

      {/* Pictures */}
      <div className="w-259.5  mx-auto  mt-49.5">
        {/* upper pictures */}
        <div className="flex gap-3">
          <Image
            className="rounded-[10px]"
            width={"713"}
            height={"487"}
            alt="aaa"
            src={"/todo_pics/status.png"}
          />
          <div className="flex flex-col gap-4">
            <Link
              href={"/Frontend_Projects"}
              key={3333}
              className="group relative rounded-[10px] overflow-hidden"
            >
              <Image
                width={"314"}
                height={"235"}
                alt="aaa"
                src={"/Pain.jpg"}
                className="rounded-[10px] group-hover:scale-110 duration-300 "
              />

              <div className="absolute  bottom-0 left-0 right-0 pb-5 pl-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 group-hover:bg-linear-to-t from-black via-black/80 ">
                <p className="text-lg">Frontend Project </p>
                <p className="text-lg w-full">
                  Reactjs Tailwind Css Typescript
                </p>
              </div>
            </Link>

            {/* <ProjectCard href={"/"} image={"/Pain.jpg"} title={"dfdsf"} /> */}

            <Image
              className="rounded-[10px]"
              width={"314"}
              height={"235"}
              alt="aaa"
              src={"/todo_pics/addnewtask.png"}
            />
          </div>
        </div>
        {/* Lower pictures */}
        <div className="flex gap-3 w-full mt-3 mb-20">
          <Image
            className="rounded-[10px]"
            width={"513"}
            height={"385"}
            alt="aaa"
            src={"/todo_pics/todo_dashbord.png"}
          />{" "}
          <Image
            className="rounded-[10px]"
            width={"513"}
            height={"385"}
            alt="aaa"
            src={"/todo_pics/todo_todo.png"}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;

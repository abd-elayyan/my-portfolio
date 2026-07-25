import Image from "next/image";
import Link from "next/link";

export default function Frontend_Projects() {
  return (
    <div className="mt-39 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-[56px] font-semibold mb-24 text-center">
        Frontend Project
      </h1>

      {/* Overview */}
      <h1 className="text-[36px] font-semibold">Overview</h1>
      <div className="flex gap-30">
        <p className="w-137.25 text-xl ">
          This project focuses on building a modern, responsive, and
          user-friendly frontend application. The goal is to deliver clean
          design, smooth interactions, and an accessible interface that enhances
          the overall user experience. Every component is crafted with attention
          to detail, ensuring performance, scalability, and consistency across
          different devices and platforms.
        </p>
        {/* details */}
        <div className="space-y-5">
          <span className="flex gap-20 ">
            <h4 className="w-34.5 text-2xl font-semibold">Live Project</h4>
            <a
              target="_blank"
              className="text-xl underline hover:text-blue-500 hover:scale-110 duration-300"
              href={"localhost:3001"}
              key={"todo"}
            >
              Visit Website
            </a>
          </span>
          <span className="flex gap-20 ">
            <h4 className="w-34.5 text-2xl font-semibold">What I did</h4>
            <p className="text-xl">Frontend Developer</p>
          </span>
          <span className="flex gap-20 ">
            <h4 className="w-34.5 text-2xl font-semibold">Client</h4>
            <p className="text-xl">ABZO</p>
          </span>
          <span className="flex gap-20 ">
            <h4 className="w-34.5 text-2xl font-semibold">Year</h4>
            <p className="text-xl">2026</p>
          </span>
        </div>
      </div>

      {/* pictures */}
      <div className="mt-10 flex gap-6 mb-42.25">
        <Image
          src={"/todo_pics/todo_dashbord.png"}
          width={545}
          height={358}
          alt="dsf"
        />
        <Image
          src={"/todo_pics/todo_todo.png"}
          width={545}
          height={358}
          alt="dsf"
        />
      </div>
    </div>
  );
}

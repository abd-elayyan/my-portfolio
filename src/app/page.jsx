"use client";
import CodeIcon from "@/Components/SVGs/CodeIcon";
import CssIcon from "@/Components/SVGs/CssIcon";
import GitHubIcon from "@/Components/SVGs/GitHubIcon";
import InstagramIcon from "@/Components/SVGs/InestagramIcon";
import JsIcon from "@/Components/SVGs/JSIcon";
import LinkedInIcon from "@/Components/SVGs/LinkedInIcon";
import PythonIcon from "@/Components/SVGs/Python";
import ReactIcon from "@/Components/SVGs/ReactIcon";
import WhatsAppIcon from "@/Components/SVGs/WhatsAppIcon";
import { Button } from "@/Components/ui/Button";
import Image from "next/image";

export default function Home() {
  let size = 40;
  return (
    <div>
      {/* first section */}
      <div className="mt-49 max-w-250.5 mx-auto text-center flex flex-col items-center ">
        <h1 className="font-semibold text-[56px] pb-2">
          Abdulrahman, Full Stack Developer
        </h1>
        <h3 className="text-[32px] font-normal pb-6 ">
          Building amazing web experiences with modern technologies and creative
          solution
        </h3>
        <div className="flex gap-3.5">
          <Button title={"Contact me"} varient="primary" href={"#contact"} />
          <Button title={"Browse projects"} href={"/my-projects"} />
        </div>
      </div>

      {/* second section */}
      <div className="max-w-300 flex flex-row mx-auto mt-50.75  justify-around gap-30 ">
        {/* paragraph  */}
        <div className=" max-w-148 flex flex-col  pt-3.5 pb-18  ">
          <h1 className="text-5xl font-semibold">About Me</h1>
          <p className="text-2xl pt-6">
            I am AbdulRahman Wardeh, a passionate Software Engineer with a deep
            love for creating innovative web experiences. My journey in web
            development has been driven by a constant desire to learn and push
            the boundaries of what's possible on the web.{" "}
          </p>
        </div>
        {/* picture */}
        <Image
          className="rounded-full"
          src={"/Pain.jpg"}
          alt="Portrait of Abdulrahman Wardeh"
          width={340}
          height={340}
          priority
        />
      </div>

      {/* Technologies I’m Using */}
      <div className="mt-34">
        <h1 className="font-semibold text-5xl text-center">
          Technologies I’m Using
        </h1>
        {/* Icons */}
        <div className="flex flex-wrap w-full justify-around pt-20 ">
          <CssIcon size={180} color="#ffffff" />
          <PythonIcon size={180} color="#ffffff" />
          <ReactIcon size={180} color="#ffffff" />
          <JsIcon size={180} color="#ffffff" />
          <GitHubIcon size={180} color="#ffffff" />
          <CodeIcon size={180} color="#ffffff" />
        </div>
      </div>

      {/* Contact me */}
      <div
        id="contact"
        className="flex flex-col items-center pt-44 max-w-2xl mx-auto"
      >
        <h1 className="text-[56px] font-semibold  pt-10 pb-14">
          Have a project in mind? let’s make it happen!
        </h1>
        <div className="px-14 flex flex-col items-start w-full">
          <p className="text-xl pt-14 pb-6">Contact me</p>
          <div className="flex justify-between w-full">
            <p className="text-2xl">Email Address</p>
            <span className=" text-[23px]">→</span>
          </div>
        </div>
        <p className="h-[0.1] bg-white w-140 mt-3 mb-14"></p>
        {/* social media */}

        <div
          className={` flex items-center max-w-74 max-h-14 h-full w-full justify-between`}
        >
          <WhatsAppIcon
            size={20}
            color="#fff"
            className="border border-white rounded-full p-4.5"
          />
          <LinkedInIcon
            size={20}
            color="#fff"
            className="border border-white rounded-full p-4.5"
          />
          <InstagramIcon
            size={20}
            color="#fff"
            className="border border-white rounded-full p-4.5"
          />
          <GitHubIcon
            size={20}
            color="#fff"
            className="border border-white rounded-full p-4.5"
          />
        </div>
      </div>

      {/* Footer */}
      <p className="h-[0.1] w-360 bg-[#595959] mx-auto mt-14 "></p>
      <div className="text-[16px] flex justify-around px-20 gap-215 my-10">
        <p>Abdulrahman Wardeh</p>
        <div className="flex  w-53">
          <p>Privacy Policy</p>
          <p>Support</p>
        </div>
      </div>
    </div>
  );
}

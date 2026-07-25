const AboutMe = () => {
  return (
    <div className="max-w-6xl pt-39.5 mx-auto">
      {/* Title */}
      <p className="text-[56px] font-semibold text-center pb-24">About Me</p>

      {/* Firsst paragraph */}
      <div className="flex flex-col items-start  ">
        <h1 className="text-[36px] font-semibold">Overview</h1>
        <p className="text-[24px]">
          I am AbdulRahman Wardeh, a passionate Software Engineer with a deep
          love for creating innovative web experiences. My journey in web
          development has been driven by a constant desire to learn and push the
          boundaries of what's possible on the web.{" "}
        </p>
      </div>

      {/* History */}
      <div className="flex flex-col mt-19">
        <h1 className="text-[36px] font-semibold mb-4">
          A History Im Proud Of
        </h1>
        <div className="space-y-6">
          {/* 1 */}
          <div className="flex items-center">
            <h6 className="border border-white rounded-full">
              {""}
              <p className="w-4 h-4 rounded-full bg-white m-1.5"></p>
            </h6>
            <p className="bg-white h-1 w-16 mx-3 "></p>
            <h1 className="text-2xl font-semibold mr-3">Full Stack Engineer</h1>
            <p className="text-xl">2024 August - Present</p>
          </div>
          {/* 2 */}
          <div className="flex items-center">
            <h6 className="border border-white rounded-full">
              {""}
              <p className="w-4 h-4 rounded-full bg-white m-1.5"></p>
            </h6>
            <p className="bg-white h-1 w-16 mx-3 "></p>
            <h1 className="text-2xl font-semibold mr-3">
              Full Stack Developer Freelance
            </h1>
            <p className="text-xl">2024 January - Present</p>
          </div>
          {/* 3 */}
          <div className="flex items-center">
            <h6 className="border border-white rounded-full">
              {""}
              <p className="w-4 h-4 rounded-full bg-white m-1.5"></p>
            </h6>
            <p className="bg-white h-1 w-16 mx-3 "></p>
            <h1 className="text-2xl font-semibold mr-3">
              Full Stack Developer Internship
            </h1>
            <p className="text-xl">2024 March - 2024 July</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-[40px] font-semibold w-183 mx-auto text-center mt-58 mb-30">
        I look forward to working with you to create engaging and user-friendly
        digital experiences.
      </div>
    </div>
  );
};
export default AboutMe;

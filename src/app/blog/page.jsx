import NavBar from "../components/navbar";
import Image from "next/image";
import Work from "./Work";
import Link from "next/link";
export default function page() {
  const experience = Work["experience"];
  const education = Work["education"];
  return (
    <>
      <NavBar PageName={"Blog"} />
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="mockup-window border bg-base-300">
            <div className="flex justify-center px-2 py-2 bg-base-200">
              <Image src="/me.jpg" width={490} height={490} />
            </div>
          </div>
          <div className="col-span-2 p-2 bg-amber-100 mockup-window border">
            <h2 className="text-xl font-bold "> Sanya Tangsook </h2>
            <p className="p-1 pl-3 text-m font-bold">
              Hi! I am Currently studying in 2nd year at KMUTNB interested in
              the subject of DevOps , Cloud and Other and I want to learn about
              it to have a better understanding. and new technologies that arise
              or self-improvement in knowledge and others.{" "}
            </p>
            {Object.keys(education).map((keys) => (
              <>
                <div className="mockup-code ml-5 mt-2">
                  <pre data-prefix="$">
                    <code key={keys}>{education[keys][0]}</code>
                  </pre>
                  <pre data-prefix=">" className="text-warning">
                    <code key={keys}>{education[keys][1]}</code>
                  </pre>
                  <pre data-prefix=">" className="text-success">
                    <code key={keys}>{education[keys][2]}</code>
                  </pre>
                </div>
              </>
            ))}
          </div>
          <div className="col-span-2 p-2 pt-10">
            <h2 className="text-xl font-bold ">work experience</h2>
            {Object.keys(experience).map((keys) => (
              <>
                <div className="mockup-window border bg-base-300 p-4 ml-5 mt-5">
                  <h4 key={keys} className="font-normal text-l hover:font-bold">
                    {keys}
                  </h4>
                  <p key={keys} className="ml-5">
                    {experience[keys].date}
                  </p>
                  <p key={keys} className="ml-5">
                    {experience[keys].des}{" "}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="p-2 pt-10">
            <h2 className="text-xl font-bold "> Download </h2>
            <div className="grid justify-items-center my-32">
              <Link
                className="btn btn-block my-2"
                href="https://drive.google.com/file/d/1_AilsBieGbO107esThG_5cqzZI4TT4tY/view?usp=sharing"
                target="_black"
              >
                Resume
              </Link>
              <Link
                className="btn btn-block my-32"
                href="https://drive.google.com/file/d/1jNBasW9JTgd0t-6tkV_Ry6xYGZYX8gOg/view?usp=sharing"
                target="_black"
              >
                Transcript
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

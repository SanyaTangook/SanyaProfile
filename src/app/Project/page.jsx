import React from "react";
import NavBar from "../components/navbar";
import GitHub from "./Project";
import Link from "next/link";

export default async function Project() {
  const dataGit = GitHub["GITHUB"];
  return (
    <>
      <NavBar PageName={"Project"} />
      <div className="flex justify-center">
        {Object.keys(dataGit).map((keys) => (
          <div className="card w-2/3 h-80 bg-base-100 shadow-xl m-8">
            <div className="card-body">
              <h2 className="card-title hover:text-violet-950 hover:text-3xl	">{keys}</h2>
              <p className="text-left">{dataGit[keys].Description}</p>
              <div className="card-actions justify-end">
                <Link href={`${dataGit[keys].url}`} className="btn btn-primary ">
                  {" "}
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

import React from "react";
import NavBar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
export default function Content() {
  return (
    <>
      <NavBar PageName={"Content Us"} />
      <div className="grid justify-items-cente py-5">
        <div className="mockup-phone ">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 ">
              <div className="grid gap-4 grid-cols-2">
                <div>
                <Link href="https://www.facebook.com/sanyatangsook" target="_back">
                  <Image src="/facebook.svg" height={50} width={50} />
                </Link>
                </div>
                  <p>FaceBook</p>
                <div>
                <Link href=" https://line.me/ti/p/tPpt0cbfQF" target="_back">
                  <Image src="/line.svg" height={50} width={50} />
                </Link>
                </div>
                <p>Line</p>
                <div>
                <Link href="https://www.linkedin.com/in/sanya-tangsook-82028b239/" target="_back">
                  <Image src="/linkedin.svg" height={50} width={50} />
                </Link>
                </div>
                <p>Linkedin</p>
                <div>
                <Link href="https://github.com/SanyaTangook" target="_back">
                  <Image src="/github.svg" height={50} width={50} />
                </Link>
                </div>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

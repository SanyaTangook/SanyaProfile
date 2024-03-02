import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function App() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/me2.jpg"
            height={400}
            width={400}
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to My Profile!</h1>
            <p className="py-6">
              I'm Sanya Tangsook Let's collaborate and create something amazing!
              Connect with me via This website. Cheers, Sanya Tangsook
            </p>
            <Link href="/Blog" className="btn btn-primary">
              Let's go
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
export default function NavBar({ PageName }) {
  const meun = ["home", "blog", "Project", "Content Us"];
  const content = [
    {
      id: 1,
      Name: "GitHub",
      Link: "https://github.com/SanyaTangook",
    },
    {
      id: 2,
      Name: "Linkedin",
      Link: "https://www.linkedin.com/in/sanya-tangsook-82028b239/",
    },
  ];

  return (
    <div className="navbar bg-neutral text-base-300 rounded-b-lg">
      <div className="navbar-start">
        <details className="dropdown">
          <summary className="m-1 btn btn-ghost">Meun</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            {meun.map((index) => (
              <li className="hover:bg-warning rounded-full">
                <Link
                  href={`/${index === "Content Us" ? "Content" : index}`}
                  className="text-black"
                >
                  {index}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>
      <div className="navbar-center">
        <a className="text-xl font-bold">{PageName}</a>
      </div>
      <div className="navbar-end">
        {content.map((index) => (
          <div className="mx-2">
            <Link
              href={`${index.Link}`}
              className="link link-hover"
              key={index.id}
            >
              <p>{index.Name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

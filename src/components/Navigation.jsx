import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/boss_lexi.png";

const nav = [
  {
    id: 1,
    name: "Design Tools",
    url: "/",
  },
  {
    id: 2,
    name: "Checklist",
    url: "/checklist",
  },
  {
    id: 3,
    name: "Jutsu Links",
    url: "/jutsu-links",
  },
  {
    id: 4,
    name: "Custom Codes",
    url: "/custom-codes",
  },
  {
    id: 5,
    name: "Scorecard",
    url: "/scorecard",
  },
  {
    id: 6,
    name: "Image Boards",
    url: "/image-board",
  },
];
export default function Navigation() {
  const [navs, setNavs] = useState(1);
  const selectNav = (id) => {
    setNavs(id);
  };

  return (
    <>
      <main className="px-20 bg-naruto bg-no-repeat bg-cover bg-center pt-12">
        <div className="flex">
          <div className="w-2/3">
            <nav className="flex justify-between text-white">
              <div>
                <img src="./images/kunai.svg" className="h-20" alt="" />
                <h1 className="text-4xl font-bold">
                  Forbidden Jutsu (Remastered) 🔥
                </h1>
                <p className="text-sm mt-3">
                  A collection of jutsunism na ginagamit ng isang mahinang
                  nilalang para lumakas. <br /> The world shall know pain.
                  Sheessssh !
                </p>
              </div>
            </nav>

            <nav className="pt-24">
              <ul className="text-white text-sm font-bold flex cursor-pointer gap-px">
                {nav.map((data) => (
                  <>
                    <Link to={data.url}>
                      <li
                        className={`py-3 px-4 ${
                          data.id === navs ? "text-red-700 bg-white" : ""
                        } rounded-t-md hover:bg-white hover:text-red-700`}
                        key={data.id}
                        onClick={() => selectNav(data.id)}
                      >
                        {data.name}
                      </li>
                    </Link>
                  </>
                ))}
              </ul>
            </nav>
          </div>
          <div className="w-1/3 flex items-end">
            <img src={image1} alt="" className="w-3/4" />
          </div>
        </div>
      </main>
    </>
  );
}

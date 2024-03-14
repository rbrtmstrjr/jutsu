import { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../images/boss_lex.png";
import {
  FiLayout,
  FiCheck,
  FiShare2,
  FiStar,
  FiCalendar,
  FiImage,
} from "react-icons/fi";

const nav = [
  {
    id: 1,
    name: "Design Tools",
    url: "/jutsu/",
    icon: <FiLayout />,
  },
  {
    id: 2,
    name: "Checklist",
    url: "/checklist",
    icon: <FiCheck />,
  },
  {
    id: 3,
    name: "Jutsu Links",
    url: "/jutsu-links",
    icon: <FiShare2 />,
  },
  {
    id: 4,
    name: "Custom Codes",
    url: "/custom-codes",
    icon: <FiStar />,
  },
  {
    id: 5,
    name: "Scorecard",
    url: "/scorecard",
    icon: <FiCalendar />,
  },
  {
    id: 6,
    name: "Image Boards",
    url: "/image-board",
    icon: <FiImage />,
  },
];
export default function Navigation() {
  const [navs, setNavs] = useState(1);
  const selectNav = (id) => {
    setNavs(id);
  };

  return (
    <>
      <main className="xl:px-20 2xl:px-32 bg-naruto bg-no-repeat bg-cover bg-center pt-12">
        <div className="flex">
          <div className="xl:w-9/12 2xl:w-2/3">
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

            <nav className="pt-28">
              <ul className="text-white text-sm font-bold flex cursor-pointer gap-px">
                {nav.map((data) => (
                  <Link to={data.url} key={data.id}>
                    <li
                      className={`py-3 px-4 flex gap-2 items-center transition ease-in ${
                        data.id === navs ? "text-red-700 bg-white" : ""
                      } rounded-t-md hover:bg-white hover:text-red-700`}
                      onClick={() => selectNav(data.id)}
                    >
                      <span>{data.icon}</span>
                      {data.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
          <div className="xl:w-3/12 2xl:w-1/3 flex items-end">
            <img src={image1} alt="" className="xl:w-full 2xl:w-4/5" />
          </div>
        </div>
      </main>
    </>
  );
}

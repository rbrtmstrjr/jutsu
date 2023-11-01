import clipboardCopy from "clipboard-copy";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image5 from "../images/jutsu.png";

const customCodes = [
  {
    id: 1,
    purpose: "Flexirisms",
    codes: `display:flex;
        flex-direction:column;
        justify-content:center;`,
    imageUrl: "",
  },
  {
    id: 2,
    purpose: "Center Column Content",
    codes: `margin-top: auto;
    margin-bottom: auto;`,
    imageUrl: "",
  },
  {
    id: 3,
    purpose: "Flip SVG",
    codes: `transform="scale(-1, -1) translate(-1000, -100)"`,
    imageUrl: "",
  },
  {
    id: 4,
    purpose: "Stick Content to Bottom",
    codes: ` display:flex !important;
    flex-direction:column;
    justify-content:flex-end !important;`,
    imageUrl: "",
  },
  {
    id: 5,
    purpose: "Border Nav",
    codes: `*#dm *.p_hfcontainer nav.u_1089676389 ul li a { border:solid 2px red !important; }`,
    imageUrl: "",
  },
  {
    id: 6,
    purpose: "Multi Location Hide Labels",
    codes: `*#dm *.dmBody div.u_1709371189 .dmGeoMLocList {
        columns:2 !important;
        display:none !important;
      }`,
    imageUrl: "",
  },
  {
    id: 7,
    purpose: "5 Starterist",
    codes: `⭐⭐⭐⭐⭐`,
    imageUrl: "",
  },
];

export default function CustomCodes() {
  const showToast = (data) => {
    clipboardCopy(data);
    toast.success("Code Copied", {
      style: {
        background: "#DD6464",
      },
    });
  };

  return (
    <section className="px-32 py-16 bg-slate-50">
      <h1 className="text-2xl mb-10">Safe Custom Codes. (Click to copyrist)</h1>
      <div className="flex gap-6 flex-wrap">
        {customCodes.map((data) => (
          <ul
            className="text-gray-500 bg-white w-slice rounded-lg shadow-md flex hover:scale-105 ease-in transition cursor-pointer hover:bg-red-700 hover:text-white"
            key={data.id}
            onClick={() => showToast(data.codes)}
          >
            <div className="w-1/3 flex justify-center items-center">
              <img
                src={data.imageUrl === "" ? image5 : data.imageUrl}
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className="w-2/3 py-6 pr-6">
              <h1 className="text-2xl font-bold">{data.purpose}</h1>
              <p className="text-sm">{data.codes}</p>
            </div>
          </ul>
        ))}
      </div>
    </section>
  );
}

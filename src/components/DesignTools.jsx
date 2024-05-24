import { useState } from "react";
import image5 from "../images/jutsu.png";

const blank = "_blank";
const designTools = [
  {
    id: 1,
    title: "Google Fonts",
    description: `Making The Web More Beautiful, Fast, And Open Through Great Typography`,
    url: "https://fonts.google.com/",
    imageUrl: "./images/fonts-google.svg",
    category: "typography",
  },
  {
    id: 2,
    title: "Font in Use",
    description: `A Searchable Archive Of Typographic Design`,
    url: "https://fontsinuse.com/",
    imageUrl: "./images/fonts-in-use.svg",
    category: "typography",
  },
  {
    id: 3,
    title: "Font Fabric",
    description: `High-Quality Typefaces, Calligraphy And Lettering`,
    url: "https://www.fontfabric.com/",
    imageUrl: "./images/font-fabric.svg",
    category: "typography",
  },
  {
    id: 4,
    title: "Adobe Fonts",
    description:
      "Find the perfect font for your next project with Adobe Fonts.",
    url: "https://fonts.adobe.com/",
    imageUrl: "./images/adobe-fonts.svg",
    category: "typography",
  },
  {
    id: 5,
    title: "Typography.com",
    description:
      "Discover fonts and design like a professional with Typography.com.",
    url: "https://www.typography.com/",
    imageUrl: "./images/typography.svg",
    category: "typography",
  },
  {
    id: 6,
    title: "Font Squirrel",
    description:
      "Free fonts for commercial use. Download thousands of high-quality free fonts.",
    url: "https://www.fontsquirrel.com/",
    imageUrl: "./images/font-squirrel.svg",
    category: "typography",
  },
  {
    id: 7,
    title: "Fontjoy",
    description:
      "An AI-powered font pairing generator that allows you to adjust the contrast and width of suggested fonts.",
    url: "https://fontjoy.com",
    imageUrl: "./images/font-joy.svg",
    category: "typography",
  },
  {
    id: 8,
    title: "Font Combinator",
    description:
      "An online tool that helps you experiment with different font combinations to see how they look together.",
    url: "https://fontcombinator.com",
    imageUrl: "",
    category: "typography",
  },
  {
    id: 9,
    title: "Type Genius",
    description:
      "This tool helps you find font pairings by suggesting complementary fonts for your selected typeface.",
    url: "https://www.typegenius.com",
    imageUrl: "./images/canva.svg",
    category: "typography",
  },
  {
    id: 10,
    title: "Font Pair",
    description:
      "A simple tool that suggests font pairings using Google Fonts.",
    url: "https://fontpair.co",
    imageUrl: "./images/font-pair.svg",
    category: "typography",
  },
  {
    id: 13,
    title: "Coolors",
    description: "The super fast color schemes generator for cool designers.",
    url: "https://coolors.co/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 14,
    title: "Adobe Color",
    description:
      "Create color schemes with the color wheel or browse thousands of color combinations.",
    url: "https://color.adobe.com/",
    imageUrl: "./images/adobe-fonts.svg",
    category: "color",
  },
  {
    id: 15,
    title: "Color Hunt",
    description:
      "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.",
    url: "https://colorhunt.co/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 16,
    title: "Paletton",
    description:
      "The color scheme designer application and the color scheme generator for your website.",
    url: "http://paletton.com/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 17,
    title: "Material Design",
    description:
      "Create, share, and apply color palettes to your UI, as well as measure the accessibility of any color combination.",
    url: "https://material.io/resources/color/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 18,
    title: "SVG Wave",
    description: "Create SVG wave shapes and dividers.",
    url: "https://www.svgwave.in/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 19,
    title: "Haikei",
    description:
      "A web based design tools to generate unique svg design assets for websites",
    url: "https://app.haikei.app/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 20,
    title: "Shape Divider",
    description:
      "Create customizable SVG shape dividers for your website sections.",
    url: "https://www.shapedivider.app/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 21,
    title: "SVG Shape Generator",
    description:
      "A free svg shape generator to create beautiful svg blob shapes.",
    url: "https://www.softr.io/tools/svg-shape-generator",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 22,
    title: "Shape Dividers - Cesis",
    description: "A free svg shape generator for your web design",
    url: "https://cesis.co/shape-divider/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 23,
    title: "Shapedividers.com",
    description: "Generate vertical responsive & animated shape easily.",
    url: "https://shapedividers.com/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 24,
    title: "Elegant Themes",
    description: "Visualize and edit SVG paths easily with this tool.",
    url: "https://www.elegantthemes.com/preview/Divi/shape-dividers/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 25,
    title: "Get Waves",
    description: "A free svg wave generator to make unique waves.",
    url: "https://getwaves.io/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 26,
    title: "SVG Stripe",
    description: "Svg stripe genrator for web dividers",
    url: "https://svg-stripe-generator.web.app/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 27,
    title: "Css Section Separator",
    description: "Separate your section with this cool dividers.",
    url: "https://wweb.dev/resources/css-separator-generator/",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 28,
    title: "Redpanther.io",
    description: "Complete free 50 sahpe dividers to place on your website.",
    url: "https://www.redpanther.io/blog/shape-dividers",
    imageUrl: "",
    category: "dividers",
  },
  {
    id: 29,
    title: "ColorZilla",
    description:
      "Advanced Eyedropper, Color Picker, Gradient Generator and other colorful goodies.",
    url: "https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 30,
    title: "Window Resizer",
    description: "Resize browser window to emulate various screen resolutions.",
    url: "https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 31,
    title: "Web Developer",
    description: "Adds a toolbar button with various web developer tools.",
    url: "https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 32,
    title: "Lorem Ipsum Generator",
    description: "Quickly generates Lorem Ipsum placeholder text.",
    url: "https://chrome.google.com/webstore/detail/lorem-ipsum-generator-def/mcdcbjjoakogbcopinefncmkcamnfkdb",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 33,
    title: "WhatFont",
    description: "Identify fonts on web pages.",
    url: "https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 34,
    title: "CSS Viewer",
    description: "Simple CSS property viewer.",
    url: "https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 35,
    title: "Dimensions",
    description: "Measure elements on a web page.",
    url: "https://chrome.google.com/webstore/detail/dimensions/baocaagndhipibgklemoalmkljaimfdj",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 36,
    title: "Page Ruler",
    description:
      "Draw a ruler to get pixel dimensions and positioning, and measure elements on any web page.",
    url: "https://chrome.google.com/webstore/detail/page-ruler/emliamioobfffbgcfdchabfibonehkme",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 37,
    title: "Muzli 2",
    description: "Curated design inspiration directly in your new tab.",
    url: "https://chrome.google.com/webstore/detail/muzli-2-stay-inspired-new/efgakmnonhkjemnajnpfkigocbkbjpgk",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 38,
    title: "Check My Links",
    description: "Find broken links on a web page.",
    url: "https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaekbeaelaapakgnjflfglf",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 39,
    title: "Wappalyzer",
    description: "Identify web technologies on websites.",
    url: "https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 40,
    title: "Pesticide",
    description:
      "Outline each element on the page to better visualize the layout.",
    url: "https://chrome.google.com/webstore/detail/pesticide-for-chrome/bblbgcheenepgnnajgfpiicnbbdmmooh",
    imageUrl: "",
    category: "extension",
  },
  {
    id: 41,
    title: "Flat UI Colors",
    description: "Handpicked flat colors for web design.",
    url: "https://flatuicolors.com/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 42,
    title: "Colormind",
    description: "AI-generated color palette generator.",
    url: "http://colormind.io/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 43,
    title: "My Color Space",
    description: "A collection of gradients and color palettes.",
    url: "https://mycolor.space/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 44,
    title: "ColorSpace",
    description:
      "Create, save, and share palettes with an intuitive interface.",
    url: "https://colorspace.io/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 45,
    title: "Color Hex",
    description:
      "Color hex encyclopedia providing information about any color.",
    url: "https://www.colorhexa.com/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 46,
    title: "LOL Colors",
    description: "Curated color palette inspiration.",
    url: "https://www.webdesignrankings.com/resources/lolcolors/",
    imageUrl: "",
    category: "color",
  },
  {
    id: 47,
    title: "ColorSpace",
    description: "Create beautiful color schemes.",
    url: "https://colorspace.grabient.com/",
    imageUrl: "",
    category: "color",
  },

  {
    id: 48,
    title: "Dora Ai",
    description: "Create powerful, fully editable websites using just prompts",
    url: "https://www.dora.run/ai",
    imageUrl: "",
    category: "design",
  },
  {
    id: 49,
    title: "Relume.io",
    description:
      "Build and design better websites with a library of Webflow components.",
    url: "https://relume.io",
    imageUrl: "",
    category: "design",
  },
  {
    id: 50,
    title: "Tilebit",
    description: "A collection of design inspiration and resources.",
    url: "https://tilebit.io",
    imageUrl: "",
    category: "design",
  },
  {
    id: 51,
    title: "Flowbase",
    description: "Premium Webflow templates and design resources.",
    url: "https://flowbase.co",
    imageUrl: "",
    category: "design",
  },
  {
    id: 52,
    title: "Landbook",
    description: "Inspiration for beautiful landing pages.",
    url: "https://land-book.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 53,
    title: "Godly",
    description: "Curated collection of stunning websites for inspiration.",
    url: "https://godly.website",
    imageUrl: "",
    category: "design",
  },
  {
    id: 54,
    title: "Dark Design",
    description: "Collection of beautifully designed dark websites.",
    url: "https://dark.design",
    imageUrl: "",
    category: "design",
  },
  {
    id: 55,
    title: "Mobbin",
    description: "Browse the latest mobile design patterns.",
    url: "https://mobbin.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 56,
    title: "Inspovault",
    description: "Vault of design inspiration and creative resources.",
    url: "https://inspovault.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 57,
    title: "Navbar Gallery",
    description: "Curated collection of navigation bar designs.",
    url: "https://navbar.gallery",
    imageUrl: "",
    category: "design",
  },
  {
    id: 58,
    title: "Storytale",
    description: "High-quality illustrations for your projects.",
    url: "https://storytale.io",
    imageUrl: "",
    category: "design",
  },
  {
    id: 59,
    title: "Colourcontrast",
    description: "Check the contrast ratio of your color combinations.",
    url: "https://colourcontrast.cc",
    imageUrl: "",
    category: "design",
  },
  {
    id: 60,
    title: "Typescale",
    description: "Visualize and create consistent typography.",
    url: "https://typescale.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 61,
    title: "Colors Eva Design",
    description: "Color palette generator for designers.",
    url: "https://colors.eva.design",
    imageUrl: "",
    category: "design",
  },
  {
    id: 62,
    title: "Footer Design",
    description: "Curated collection of footer designs for inspiration.",
    url: "https://footer.design",
    imageUrl: "",
    category: "design",
  },
  {
    id: 63,
    title: "Magnific Ai",
    description: "AI-powered design tool for creating stunning visuals.",
    url: "https://magnific.ai",
    imageUrl: "",
    category: "design",
  },
  {
    id: 64,
    title: "Squoosh App",
    description: "Compress and optimize your images for the web.",
    url: "https://squoosh.app",
    imageUrl: "",
    category: "design",
  },
  {
    id: 65,
    title: "Startupwebsites",
    description: "A gallery of inspiring websites from startups.",
    url: "https://startupwebsites.co",
    imageUrl: "",
    category: "design",
  },
  {
    id: 66,
    title: "Minimal Gallery",
    description: "Showcase of minimalistic website designs.",
    url: "https://minimal.gallery",
    imageUrl: "",
    category: "design",
  },
  {
    id: 67,
    title: "Darkmodedesign",
    description: "Inspiration and resources for dark mode designs.",
    url: "https://darkmodedesign.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 68,
    title: "Fontsinthewild",
    description: "Explore fonts used in real-world designs.",
    url: "https://www.fontsinthewild.com/",
    imageUrl: "",
    category: "design",
  },
  {
    id: 69,
    title: "Heroicons",
    description: "Free, open-source icons for your projects.",
    url: "https://heroicons.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 70,
    title: "Drawkit",
    description: "Hand-drawn vector illustration resources.",
    url: "https://drawkit.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 71,
    title: "Emaillove",
    description: "Curated collection of beautiful email designs.",
    url: "https://emaillove.com",
    imageUrl: "",
    category: "design",
  },
  {
    id: 72,
    title: "ModularScale",
    description: "A tool for creating harmonious typography scales.",
    url: "https://www.modularscale.com/",
    imageUrl: "",
    category: "design",
  },
  {
    id: 73,
    title: "Gridlover",
    description:
      "Fine-tune your web typography with modular scale and vertical rhythm.",
    url: "https://gridlover.net/try",
    imageUrl: "",
    category: "design",
  },
];

const category = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Typography",
  },
  {
    id: 3,
    name: "Color",
  },
  {
    id: 4,
    name: "Dividers",
  },
  {
    id: 4,
    name: "Extension",
  },
  {
    id: 5,
    name: "Design",
  },
  {
    id: 6,
    name: "Others",
  },
];

export default function DesignTools() {
  const [showCategory, isShowCategory] = useState(false);
  const [selectCategory, isSelectCategory] = useState(designTools);
  const [cat, isCat] = useState("All");

  const openCategory = () => {
    isShowCategory(!showCategory);
  };

  const getCategory = (data) => {
    const meow = designTools.filter((category) => {
      return category.category.toLowerCase() === data.toLowerCase();
    });
    data === "All" ? isSelectCategory(designTools) : isSelectCategory(meow);
    isCat(data);
    isShowCategory(!showCategory);
  };

  return (
    <>
      <section className="xl:px-20 2xl:px-32 pt-10 flex justify-between bg-slate-50">
        <h1 className="text-2xl">{`Filtered by: ${cat}`}</h1>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          className="text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-700"
          type="button"
          onClick={() => openCategory()}
        >
          Select Category{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {showCategory && (
          <section className="absolute right-20 mt-12 rounded-lg shadow-md px-2 py-4 bg-white w-60 z-50">
            <ul className="cursor-pointer">
              {category.map((data) => (
                <li
                  className="py-3 px-5 hover:bg-red-700 rounded-md font-bold text-gray-500 hover:text-white"
                  onClick={() => getCategory(data.name)}
                  key={data.id}
                >
                  {data.name}
                </li>
              ))}
            </ul>
          </section>
        )}
      </section>

      <section className="xl:px-20 2xl:px-32 py-20 bg-slate-50">
        <div className="flex gap-6 flex-wrap">
          {selectCategory.map((data) => (
            <a
              href={data.url}
              target={blank}
              className="text-gray-500 bg-white w-slice rounded-lg shadow-md flex hover:scale-105 ease-in transition cursor-pointer hover:bg-red-700 hover:text-white"
              key={data.id}
            >
              <div className="w-1/3 flex justify-center items-center">
                <img
                  src={data.imageUrl === "" ? image5 : data.imageUrl}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="w-2/3 py-6 pr-6">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-sm">{data.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

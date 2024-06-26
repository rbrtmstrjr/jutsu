import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";

const checklist = [
  { id: 1, name: "Check if HIPAA/Canadian account" },
  { id: 2, name: "CCF" },
  { id: 3, name: "Getting the EID and VID for the site name" },
  { id: 4, name: "Check Design Instructions" },
  { id: 5, name: "Check ABOVE THE FOLD INSTRUCTION" },
  { id: 6, name: "BACKUP" },
  { id: 7, name: "GLOBAL SEO" },
  { id: 8, name: "BUSINESS INFO" },
  { id: 9, name: "JAVASCRIPT" },
  { id: 10, name: "FAVICON 48X48" },
  { id: 11, name: "CHECK NO INDEX INDICATOR MUST BE TURNED OFF" },
  { id: 12, name: "PAGE SEO" },
  { id: 13, name: "REDIRECT" },
  { id: 14, name: "No set global page backgrounds" },
  { id: 15, name: "Brighter color minimal use only or as accent" },
  { id: 16, name: "Color scheme" },
  { id: 17, name: "Up to 2 fonts only" },
  { id: 18, name: "Used no more than 3 colors in design" },
  { id: 19, name: "Check for Contrast Issue" },
  { id: 20, name: "Avoided fancy fonts for long sentences & using all caps" },
  { id: 21, name: "Primary contact details are easy to find" },
  { id: 22, name: "All main navigation titles clean & clearly visible" },
  { id: 23, name: "Is header sleek or well-organized (not bloated)" },
  { id: 24, name: "No contact forms or complex widgets above the fold" },
  { id: 25, name: "CONTENT" },
  { id: 26, name: "Content alignment consistency" },
  { id: 27, name: "No mixed alignments" },
  { id: 28, name: "BUTTON CONSISTENCY" },
  { id: 29, name: "LINKS" },
  { id: 30, name: "H2-H6 linked on respective pages" },
  { id: 31, name: "Heading tags visually follow hierarchy" },
  { id: 32, name: "Active links are easy to identify" },
  { id: 33, name: "No image sliders on MKVs" },
  { id: 34, name: "DISABLE MOBILE ANIMATION" },
  { id: 35, name: "Sufficient spacing between elements" },
  { id: 36, name: "TRAILING SPACES" },
  { id: 37, name: "DOUBLE SPACES" },
  { id: 38, name: "SCREENSHOTS" },
  { id: 39, name: "65 x 65 padding" },
  { id: 40, name: "1200 screen width" },
  { id: 41, name: "ALL DEVICES" },
  {
    id: 42,
    name: "5 or more lines of text not center align for Desktop Platform View",
  },
  { id: 43, name: "Phone number in one line only for all devices" },
  { id: 44, name: "Focal point of the images are visible on all devices" },
  { id: 45, name: "SMALL SCREEN" },
  { id: 46, name: "ORPHAN" },
  { id: 47, name: "MOBILE ALIGNMENT" },
  { id: 48, name: "No background image used on mobile header" },
  {
    id: 49,
    name: "No Entrance and scrolling animation on Mobile or above the fold on desktop and tablet",
  },
  { id: 50, name: "contrast checker" },
  { id: 51, name: "IMAGES" },
  { id: 52, name: "ALT TAGS" },
  { id: 53, name: "300kb images" },
  { id: 54, name: "Up to 15 images per page" },
  { id: 55, name: "Ensure all logos & images appear sharp & clear" },
  {
    id: 56,
    name: "Don't enlarge an already blurry image, use it at a reduced size for better results",
  },
  {
    id: 57,
    name: "All images displayed at their native resolution to be sharp and clear",
  },
  { id: 58, name: "Images are relevant to the business & location" },
  { id: 59, name: "All text laid over images are easy to read" },
  {
    id: 60,
    name: "Faces not covered with content/obstructed especially customer images",
  },
  { id: 61, name: "NAMING CONVENTION" },
  { id: 62, name: "IMAGES BY FOLDER" },
  { id: 63, name: "ENAGAGE ICONS" },
  { id: 64, name: "Yelp review widget add only if requested" },
  { id: 65, name: "CONTACT FORM" },
  { id: 66, name: "SF NOTES (created while building the website)" },
  { id: 67, name: "Update Business Schema" },
];

export default function Checklist() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [items, setItems] = useState(checklist);

  const capitalizeFirstLetter = (str) => {
    const lowercase = str.toLowerCase();
    return str.toLowerCase().charAt(0).toUpperCase() + lowercase.slice(1);
  };

  useEffect(() => {
    if (items.length === 0) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
  }, [items]);

  const handleCheckboxChange = (id, name) => {
    const message = `${name} Done.`;
    const itemToRemove = items.find((item) => item.id === id);
    toast.success(message, {
      style: {
        background: "#DD6464",
      },
    });
    if (itemToRemove) {
      // Add a delay of 1 second before removing the item
      setTimeout(() => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      }, 1000);
    }
  };

  return (
    <section className="xl:px-20 2xl:px-32 py-16 bg-slate-50">
      {items.length === 0 ? (
        <h1 className="text-2xl mb-10">
          Checklist Completed. For PR mo na yan lods. 👌
        </h1>
      ) : (
        <h1 className="text-2xl mb-10">Check Once Completed.</h1>
      )}
      <div className="flex flex-wrap gap-6">
        {items.map((data) => (
          <div
            className="w-slice p-8 shadow-md rounded-md hover:bg-red-700 text-gray-500 hover:text-white hover:scale-105 ease-in transition cursor-pointer"
            key={data.id}
          >
            <div className="flex items-center">
              <div className="w-6 h-6">
                <input
                  id={data.id}
                  checked={data.status}
                  type="checkbox"
                  value=""
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => handleCheckboxChange(data.id, data.name)}
                />
              </div>

              <label htmlFor={data.id} className="ml-4 text-sm font-medium">
                {capitalizeFirstLetter(data.name)}
              </label>
            </div>
          </div>
        ))}
      </div>
      {showConfetti && <Confetti />}
    </section>
  );
}

import { useState } from "react";
import image5 from "../images/jutsu.png";

const blank = "_blank";
const dataArray = [
  {
    id: 1,
    title: "Aircon",
    url: "https://www.gettyimages.com/collaboration/boards/2DZxQxnr6ES-dwvBlVkowQ?invitation_code=PkV6I9TWaky9H7B_N7wO1Q",
    imageUrl: "",
  },
  {
    id: 2,
    title: "Appliance Repair",
    url: "https://www.gettyimages.com/collaboration/boards/q8_U-CwHvES24XE_YB9emw?invitation_code=6ONN9xTMAUuE53uwtSt9ow",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Auto Detailing",
    url: "https://www.gettyimages.com/collaboration/boards/vNWXDs1geE-F8QVLIg9jHrgQ?invitation_code=nxWxDiiscUyOu4sY0dS1Dg",
    imageUrl: "",
  },
  {
    id: 4,
    title: "Business",
    url: "https://www.gettyimages.com/collaboration/boards/bI-B8TYSdEmKvkdrX0EJdw?invitation_code=wvF0N5lM0kuAei7QyPFHdg",
    imageUrl: "",
  },
  {
    id: 5,
    title: "Cars & Motorcycle/Auto Repair",
    url: "https://www.gettyimages.com/collaboration/boards/Qny94ihXZU-fGoVX9jH-GQ?invitation_code=g9dt5QclOk2VT4YBM_ZMAg",
    imageUrl: "",
  },
  {
    id: 6,
    title: "Cars & Motorcycle/Auto Repair",
    url: "https://www.gettyimages.com/collaboration/boards/h_f30sd57EORQEAFw38d9Q?invitation_code=-fySr5RYVEeiU_yODPux0g",
    imageUrl: "",
  },
  {
    id: 7,
    title: "Coffee Shop",
    url: "https://www.gettyimages.com/collaboration/boards/18qg8QnZlEOwig30SWFF0A?invitation_code=RvX7rZpPskeNLROXHuCJxQ",
    imageUrl: "",
  },
  {
    id: 8,
    title: "Construction and Home Remodeling",
    url: "https://www.gettyimages.com/collaboration/boards/eLpRgNSGiUWuFW73Q4LYZQ?invitation_code=jaKZ7_3CmE-88HMynyWoLQ",
    imageUrl: "",
  },
  {
    id: 9,
    title: "Copy Machine",
    url: "https://www.gettyimages.com/collaboration/boards/qZXCRBPqmUa0iLuSR655YQ?invitation_code=yHO-ychIsEWbz-iiY9fmgg",
    imageUrl: "",
  },
  {
    id: 10,
    title: "Daycare",
    url: "https://www.gettyimages.com/collaboration/boards/mlZZJuUPUkKWfzWr5j5AAw?invitation_code=-QinwYD6xUiNJAJCm-8sUw",
    imageUrl: "",
  },
  {
    id: 11,
    title: "Dental",
    url: "https://www.gettyimages.com/collaboration/boards/zhwL39cMKkene_zbeJ9j0A?invitation_code=02vamOQrpEaPW1nvngjZ6w",
    imageUrl: "",
  },
  {
    id: 12,
    title: "Disposal/Garbage",
    url: "https://www.gettyimages.com/collaboration/boards/utWDs9lAbkyAR4sHsirdqQ?invitation_code=VicXHAAtFEKXzXYx9rVYtw",
    imageUrl: "",
  },
  {
    id: 13,
    title: "Drainage/Septic",
    url: "https://www.gettyimages.com/collaboration/boards/1nGvtQTUTk6u4yucyUFXGw?invitation_code=ejp-eFwIb0GMzkP3JDlolQ",
    imageUrl: "",
  },
  {
    id: 14,
    title: "Driving",
    url: "https://www.gettyimages.com/collaboration/boards/RzP4BHVWL0eXB2TG9vORZA?invitation_code=ybBmujKwSUCh-3ffscmKTg",
    imageUrl: "",
  },
  {
    id: 15,
    title: "Electrical",
    url: "https://www.gettyimages.com/collaboration/boards/KQ01SireLE-6GR7B2vkYEA?invitation_code=-rksWfPLUk6eYRI-ZGlzxw",
    imageUrl: "",
  },
  {
    id: 16,
    title: "Excavation",
    url: "https://www.gettyimages.com/collaboration/boards/lmUCZGrt602BdW7tFy3sog?invitation_code=Qz4DN1VPgkuhobdbAlo7lQ",
    imageUrl: "",
  },
  {
    id: 17,
    title: "Fitness/Gym",
    url: "https://www.gettyimages.com/collaboration/boards/4Tng3W2MDEacFa27g6JTIQ?invitation_code=8RtWz5oqSEmX0VgPrwHZHA",
    imageUrl: "",
  },
  {
    id: 18,
    title: "Flooring",
    url: "https://www.gettyimages.com/collaboration/boards/_pTO67aK406PlGL4HC7Kfw?invitation_code=tyo-rsKjHEeuFpDCrkVI7w",
    imageUrl: "",
  },
  {
    id: 19,
    title: "Food/Restaurant",
    url: "https://www.gettyimages.com/collaboration/boards/aCFqehXNTUenLDBi4lKnLg?invitation_code=ky82dGtSfEug6LQpD40qxA",
    imageUrl: "",
  },
  {
    id: 20,
    title: "General Health/Medical",
    url: "https://www.gettyimages.com/collaboration/boards/_hHMk2h9aEa3vKmdrf3UNA?invitation_code=GEjgskJJQ0GQxbCJaeCisg",
    imageUrl: "",
  },
  {
    id: 21,
    title: "Glass",
    url: "https://www.gettyimages.com/collaboration/boards/Q197xtiWqUySO2rcLW1Oiw?invitation_code=_n4g9X5oSE2xl4yxmBLp-g",
    imageUrl: "",
  },
  {
    id: 22,
    title: "HVAC",
    url: "https://www.gettyimages.com/collaboration/boards/nI2l3yC_f0G5QTYRn7QVVA?invitation_code=N2N1FQQeekegBd5Oyvm5cA",
    imageUrl: "",
  },
  {
    id: 23,
    title: "Icons",
    url: "https://personiva-my.sharepoint.com/personal/marichris_dikit_personiv_com/_layouts/15/onedrive.aspx?ct=1659934244851&or=Teams%2DHL&ga=1&id=%2Fpersonal%2Fmarichris%5Fdikit%5Fpersoniv%5Fcom%2FDocuments%2FIcons%20that%20can%20be%20used%20to%20site",
    imageUrl: "",
  },
  {
    id: 24,
    title: "Icons Image Board",
    url: "https://www.gettyimages.com/collaboration/boards/9Kxii36-_kiK0MZGlJBv-w?invitation_code=HsLH3nIiDUekMMK_Lw2F_w",
    imageUrl: "",
  },
  {
    id: 25,
    title: "Jewelry",
    url: "https://www.gettyimages.com/collaboration/boards/pKZpRTJqOECEvEiOsH95eA?invitation_code=0029rJFzEEOgHl2wT53N-Q",
    imageUrl: "",
  },
  {
    id: 26,
    title: "Landscaping",
    url: "https://www.gettyimages.com/collaboration/boards/b-2oMXNUqU-V6mxWYGYbOA?invitation_code=JhgHuiPrX0uPx7mKtNynjg",
    imageUrl: "",
  },
  {
    id: 27,
    title: "Landscaping",
    url: "https://www.gettyimages.com/collaboration/boards/-bOKToL_vUGaXlaGPMdXSQ?invitation_code=r0OLx6SZrEmGU9oPLXx74g",
    imageUrl: "",
  },
  {
    id: 28,
    title: "Law",
    url: "https://www.gettyimages.com/collaboration/boards/LUAlhzh-h0yQ97m3vKlFKg?invitation_code=EumNuD8zxUWbSXCU8zOe4A",
    imageUrl: "",
  },
  {
    id: 29,
    title: "Lawn Care",
    url: "https://www.gettyimages.com/collaboration/boards/N1hbD9ukCkq53j5wppmtIA?invitation_code=pI05IIUnaEqb8yusYL1OUA",
    imageUrl: "",
  },
  {
    id: 30,
    title: "Law Office",
    url: "https://www.gettyimages.com/collaboration/boards/w4rCTEvvFkCsqgCA1RA4Uw?invitation_code=gItH9YcNIkGTWJvKdccbOQ",
    imageUrl: "",
  },
  {
    id: 31,
    title: "Locksmith",
    url: "https://www.gettyimages.com/collaboration/boards/C822FQKodUaTNA-tCTrD1Q?invitation_code=dFz82hbti02jgghe1jmHjw",
    imageUrl: "",
  },
  {
    id: 32,
    title: "Locksmith",
    url: "https://www.gettyimages.com/collaboration/boards/ScDjJm-DDk6iCIQRP84Etg?invitation_code=nNdxrXe6DkqPvsAYr9ClIw",
    imageUrl: "",
  },
  {
    id: 33,
    title: "Painting",
    url: "https://www.gettyimages.com/collaboration/boards/Cn7dwSQW1U695Co7bCkZcQ?invitation_code=PeLW6_HFRUiLrqxSFI-cEg",
    imageUrl: "",
  },
  {
    id: 34,
    title: "Paving",
    url: "https://www.gettyimages.com/collaboration/boards/QE4uF0H0YUS31XBd6vJNag?invitation_code=F7dM6Hh_skmyhN-Pd4z56A",
    imageUrl: "",
  },
  {
    id: 35,
    title: "Pest Control",
    url: "https://www.gettyimages.com/collaboration/boards/9xAQvS0Sx0S-eV69HcGnNg?invitation_code=jHDtt8tFR0mN0VrAmdYZIA",
    imageUrl: "",
  },
  {
    id: 36,
    title: "Pet Care/ Vet",
    url: "https://www.gettyimages.com/collaboration/boards/Xs_T8uOOfU2XvPfV7iewoQ?invitation_code=iACCJSheD0y4Ogbr1pF2gA",
    imageUrl: "",
  },
  {
    id: 37,
    title: "Plumbing",
    url: "https://www.gettyimages.com/collaboration/boards/JSOEsj3b_EWjwrp4WEpN9Q?invitation_code=MzHtni1APUy7clOAkOBvFQ",
    imageUrl: "",
  },
  {
    id: 38,
    title: "Plumbing",
    url: "https://www.gettyimages.com/collaboration/boards/KV0lSPhKrEOxAEc37oletw?invitation_code=99kox9UwdU-kiWOB2epDMQ",
    imageUrl: "",
  },
  {
    id: 39,
    title: "Printing Services",
    url: "https://www.gettyimages.com/collaboration/boards/-EtcUQh7RUiUOW84mAgwMg?invitation_code=s3-jzZTopkmgd6BKEct7qg",
    imageUrl: "",
  },
  {
    id: 40,
    title: "Roofing",
    url: "https://www.gettyimages.com/collaboration/boards/3bSRK216gkS39oYI6OS_fQ?invitation_code=I9iD6xofeEq_nGpSi_BPGQ",
    imageUrl: "",
  },
  {
    id: 41,
    title: "Roofing",
    url: "https://www.gettyimages.com/collaboration/boards/RbLsBSUS9kK1h7BdZOKuww?invitation_code=1Gi6jPHE60KAvu-KJsijOQ",
    imageUrl: "",
  },
  {
    id: 42,
    title: "Salon and Spa",
    url: "https://www.gettyimages.com/collaboration/boards/SvGSlNVP4EKjIul5LgChRA?invitation_code=yAY3HyCKLUq9VZbLzI3LlQ",
    imageUrl: "",
  },
  {
    id: 43,
    title: "Silhouette Image",
    url: "GettyImages-1298261537 / Men - 1142192548 / Women - 1142192666",
    imageUrl: "",
  },
  {
    id: 44,
    title: "Solar",
    url: "https://www.gettyimages.com/collaboration/boards/f2bxnnwKuk6zzQPEEE9rSw?invitation_code=V_-dTNV5-EK6ZytRGDx9lQ",
    imageUrl: "",
  },
  {
    id: 45,
    title: "Tree Service",
    url: "https://www.gettyimages.com/collaboration/boards/DitTpS5RQEKMbEi8QVJ12g?invitation_code=QpCsVy6LDESgVYMxeG3Hdw",
    imageUrl: "",
  },
  {
    id: 46,
    title: "Tires",
    url: "https://www.gettyimages.com/collaboration/boards/TSveNrvcQkihpo9DZVPOeg",
    imageUrl: "",
  },
  {
    id: 47,
    title: "SVG Icon Library",
    url: "https://thryv-my.sharepoint.com/personal/w83617_thryv_com/_layouts/15/onedrive.aspx?ct=1666251897723&or=OWA%2DNT&cid=4d48adbb%2D4aa6%2Da28e%2D4138%2D9ec8a0295477&ga=1&id=%2Fpersonal%2Fw83617%5Fthryv%5Fcom%2FDocuments%2FWebsite%20Icon%20Library",
    imageUrl: "",
  },
];

export default function ImageBoards() {
  const [filterValue, setFilterValue] = useState("");

  const filteredArray = dataArray.filter((item) =>
    item.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <section className="px-32 py-16 bg-slate-50">
      <div className="flex justify-between">
        {filteredArray.length === 0 ? (
          <h1 className="text-2xl mb-10">No Result Found.</h1>
        ) : (
          <h1 className="text-2xl mb-10">
            Stock Images for Different Businesses.
          </h1>
        )}
        <div>
          <input
            type="text"
            className="w-64 py-3 px-5 bg-white rounded-full border border-gray-500 focus:outline-red-700"
            placeholder="Search"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-6 flex-wrap">
        {filteredArray.map((data) => (
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
            <div className="w-2/3 p-6">
              <h1 className="text-2xl font-bold">{data.title}</h1>
              <p className="text-sm">{data.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

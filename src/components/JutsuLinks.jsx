import { useState } from "react";
import image5 from "../images/jutsu.png";

const blank = "_blank";

const dataArray = [
  {
    id: 1,
    title: "Mods Template",
    url: "https://personiva-my.sharepoint.com/:w:/g/personal/dfd_onedrive_personiv_com/ERxRWy5vNOtDqViOkX9BxDYBWNuF514Q2L5cqxZfROpUnA?rtime=1knIGzbt2kg&xsdata=MDV8MDF8fDk3OGZmZDVkODdlYTQ4YzhmNWFiMDhkYWVkMzYzY2E0fGRiZDNhOGY1MjMyNzQxOTM5NTU5YTM2ZTljY2I0MGY5fDB8MHw2MzgwODMxMTQ0Mjc4MDcxNDd8VW5rbm93bnxWR1ZoYlhOVFpXTjFjbWwwZVZObGNuWnBZMlY4ZXlKV0lqb2lNQzR3TGpBd01EQWlMQ0pRSWpvaVYybHVNeklpTENKQlRpSTZJazkwYUdWeUlpd2lWMVFpT2pFeGZRPT18MXxNVFkzTWpjeE5EWTBNVGM1TURzeE5qyURZMlpqVTNRSFJvY21WaFpDNTJNZz09fGJiYjUxZGM5YWVhMjQwNGFmNWFiMDhkYWVkMzYzY2E0fDMxMDJkZTYwMTljNjRiNjU8iMzEyZmZh&sdata=d2x6ZXRtVWErKzd4aFJuQ3FPak5JQjZXQjlNSTRDR1EvaTZ2LzRjWUFLND0%3D&ovuser=dbd3a8f5-2327-4193-9559-a36e9ccb40f9%2Clagaya01%40thryv.com&OR=Teams-HL&CT=1674743511745&clickparams=eyJBcHBOYW1lIjoiVGVhbXMtRGVza3RvcCIsIkFwcFZlcnNpb24iOiIyNy8yMzAxMTEwNTYwMCIsIkhhc0ZlZGVyYXRlZFVzZXIiOmZhbHNlfQ%3D%3D",
    imageUrl: "",
  },
  {
    id: 2,
    title: "New PRCDR 2023",
    url: "https://personiva-my.sharepoint.com/:x:/g/personal/dfd_onedrive_personiv_com/ETBPfIQ-xtBKh08JNgh4rBMBCelWbW1IpkjYelMP_ErHBQ?e=00Z5Qk&CID=12e065d9-cb1b-4e0f-8e87-ebb3a25cc966",
    imageUrl: "",
  },
  {
    id: 3,
    title: "Quality Dashboard",
    url: "https://thryv-my.sharepoint.com/:x:/p/aquink01/ER3KJ38UWRtNrp-KjF52-FEBUAJpuhHihZOr6cUjhydZ_w?rtime=NOWGDGFj20g",
    imageUrl: "",
  },
  {
    id: 4,
    title: "HR Portal",
    url: "https://web.personiv.com/hrportal/public/login",
    imageUrl: "",
  },
  {
    id: 5,
    title: "Service Desk",
    url: "https://web.personiv.com/service-desk/public/login",
    imageUrl: "",
  },
  {
    id: 6,
    title: "Reservation Portal",
    url: "https://web.personiv.com/reservation-portal/public/login",
    imageUrl: "",
  },
  {
    id: 7,
    title: "Personiv Sign",
    url: "https://web.personiv.com/personivsign/public/login",
    imageUrl: "",
  },
  {
    id: 8,
    title: "DMS",
    url: "https://web.personiv.com/dms/public/login",
    imageUrl: "",
  },
  {
    id: 9,
    title: "Getnext",
    url: "https://df.getnext.personiv.com/Gnext/index.php",
    imageUrl: "",
  },
  {
    id: 10,
    title: "Thryv Portal",
    url: "https://go.thryv.com/management#/login",
    imageUrl: "",
  },
  {
    id: 11,
    title: "Okta",
    url: "https://dexmedia.okta.com/app/UserHome?fromLogin=true",
    imageUrl: "",
  },
  {
    id: 12,
    title: "PMA",
    url: "https://performance.corp.pvt/metrics/",
    imageUrl: "",
  },
  {
    id: 13,
    title: "Weblog",
    url: "https://web.personiv.com/weblog/public/entries",
    imageUrl: "",
  },
  {
    id: 14,
    title: "Team Tracker",
    url: "https://docs.google.com/spreadsheets/d/1scDAtF8Y77_ajHTASi3VGkxldFvPlk6UybgUSMJ7Mx8/edit?pli=1#gid=67694930",
    imageUrl: "",
  },
  {
    id: 15,
    title: "Dashboard Teams",
    url: "https://teams.microsoft.com/l/message/19:4f06ac0c8fc04cbb8c60d71922066f57@thread.v2/1690573276877?context=%7B%22contextType%22%3A%22chat%22%7D",
    imageUrl: "",
  },
  {
    id: 16,
    title: "DF Hub",
    url: "https://personiva.sharepoint.com/sites/PersonivManila/DigitalFulfillment/SitePages/QC---TIPS-%26-UPDATES.aspx?CT=1691603574777&OR=OWA-NT&CID=0d09ab55-0614-4166-9ef9-65fe36983d7e",
    imageUrl: "",
  },
  {
    id: 17,
    title: "IT Service Desk",
    url: "https://web.personiv.com/service-desk/public/ticket/open",
    imageUrl: "",
  },
  {
    id: 18,
    title: "Utilization",
    url: "https://personiva-my.sharepoint.com/:x:/g/personal/dfd_onedrive_personiv_com/EYNjUzzgE99Onse70YjdYJsBEFNnYJ6gH3aX370RgqddJg?rtime=xurmmdKs20g",
    imageUrl: "",
  },
];

export default function JutsuLinks() {
  const [filterValue, setFilterValue] = useState("");
  const filteredArray = dataArray.filter((item) =>
    item.title.toLowerCase().includes(filterValue.toLowerCase())
  );
  return (
    <section className="px-32 py-16 bg-slate-50">
      <div className="flex justify-between">
        <h1 className="text-2xl mb-10">Different Links for Web Designer</h1>
        <div>
          <input
            type="text"
            className="w-64 py-2 px-5 bg-white rounded-full border-2 border-gray-300"
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

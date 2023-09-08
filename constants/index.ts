import { OptionProps } from "@/types";

export const manufacturers:{ [key:string]:string[] } = {
  Toyota: [
    "Camry",
    "Corolla",
    "Prius",
    "RAV4",
    "Highlander",
    "Tacoma",
    "4Runner",
    "Sienna",
    "Land Cruiser",
    "Supra",
  ],
  Chevrolet: [
    "Silverado",
    "Camaro",
    "Malibu",
    "Equinox",
    "Traverse",
    "Tahoe",
    "Suburban",
    "Impala",
    "Corvette",
    "Volt",
  ],
  Honda: [
    "Civic",
    "Accord",
    "CR-V",
    "Pilot",
    "Odyssey",
    "HR-V",
    "Ridgeline",
    "Fit",
    "Insight",
    "Passport",
  ],
  Volkswagen: [
    "Golf",
    "Jetta",
    "Passat",
    "Tiguan",
    "Atlas",
    "Beetle",
    "Touareg",
    "Arteon",
    "Golf GTI",
    "ID.",
  ],
  Nissan: [
    "Altima",
    "Rogue",
    "Sentra",
    "Maxima",
    "Pathfinder",
    "Versa",
    "Murano",
    "Frontier",
    "370Z",
    "Leaf",
  ],
  BMW: [
    "3 Series",
    "5 Series",
    "X3",
    "X5",
    "7 Series",
    "X1",
    "X7",
    "2 Series",
    "4 Series",
    "i3",
  ],
  "Mercedes-Benz": [
    "C-Class",
    "E-Class",
    "S-Class",
    "GLC",
    "GLE",
    "A-Class",
    "G-Class",
    "CLA",
    "GLA",
    "SLC",
  ],
  Audi: ["A4", "A6", "Q5", "Q7", "A3", "A5", "Q3", "Q8", "RS5", "TT"],
  Tesla: [
    "Model 3",
    "Model S",
    "Model X",
    "Model Y",
    "Cybertruck",
    "Roadster",
    "Semi",
    "Powerwall",
    "Powerpack",
    "Solar Roof",
  ],
  Lamborghini: [
    "Aventador",
    "Huracan",
    "Urus",
    "Sian",
    "Centenario",
    "Gallardo",
    "Veneno",
    "Murcielago",
    "Reventon",
    "Diablo",
  ],
  Hyundai: [
    "Elantra",
    "Sonata",
    "Tucson",
    "Santa Fe",
    "Kona",
    "Veloster",
    "Accent",
    "Venue",
    "Palisade",
    "IONIQ",
  ],
  Kia: [
    "Optima",
    "Sportage",
    "Sorento",
    "Forte",
    "Soul",
    "Telluride",
    "Rio",
    "Stinger",
    "Carnival",
    "Niro",
  ],
  Subaru: [
    "Outback",
    "Forester",
    "Impreza",
    "Crosstrek",
    "Legacy",
    "Ascent",
    "BRZ",
    "WRX",
    "XV",
    "Levorg",
  ],
  Mazda: [
    "Mazda3",
    "Mazda6",
    "CX-5",
    "CX-9",
    "MX-5",
    "CX-30",
    "MX-30",
    "CX-3",
    "RX-7",
    "RX-8",
  ],
  Volvo: [
    "S60",
    "XC60",
    "XC90",
    "V60",
    "V90",
    "XC40",
    "S90",
    "C40",
    "V40",
    "Polestar 2",
  ],
  Jeep: [
    "Wrangler",
    "Grand Cherokee",
    "Cherokee",
    "Compass",
    "Renegade",
    "Gladiator",
    "Commander",
    "Patriot",
    "Wagoneer",
    "CJ",
  ],
  Acura: [
    "MDX",
    "RDX",
    "TLX",
    "ILX",
    "NSX",
    "RLX",
    "RSX",
    "CL",
    "ZDX",
    "Integra",
  ],
  Lexus: ["ES", "RX", "NX", "IS", "GX", "UX", "LS", "LC", "GS", "LX"],
  Porsche: [
    "911",
    "Cayenne",
    "Panamera",
    "Macan",
    "Cayman",
    "Boxster",
    "Taycan",
    "718",
    "Mission E",
    "959",
  ],
};

export const yearsOfProduction : OptionProps[]= [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels : OptionProps[] = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
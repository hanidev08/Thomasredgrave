export type SampleDataItem = {
  id: number;
  slug: string;
  src: string;
  className: string;
  images: string[];
  details?: {
    title: string;
    agency: string;
    model: string;
    year: number;
  };
};

export type SampleDataType = SampleDataItem[];

export const sampleData: SampleDataType = [
  {
    id: 1,
    slug: "VelvetShadows",
    src: "/assets/image1.png",
    className: "col-span-2 md:col-span-1",
    images: ["/assets/image2.png", "/assets/image3.png"],
    details: {
      title: "Desert Escape",
      agency: "Nomad Studio",
      year: 2022,
      model: "Kaia Monroe",
    },
  },
  {
    id: 2,
    slug: "EchoesofNeon",
    src: "/assets/img28.jpg",
    className: "md:col-span-2",
    images: ["/assets/img29.jpg", "/assets/img30.jpg", "/assets/img28.jpg"],
    details: {
      title: "Urban Threads",
      agency: "Drip House",
      year: 2023,
      model: "Lana Cruz",
    },
  },
  {
    id: 3,
    slug: "GlassSkin",
    src: "/assets/image4.png",
    className: "md:col-span-2",
    images: ["/assets/image5.png", "/assets/image6.png"],
    details: {
      title: "Mood & Motion",
      agency: "Studio Flux",
      year: 2022,
      model: "Noura El-Sayegh",
    },
  },
  {
    id: 4,
    slug: "CrimsonSyntax",
    src: "/assets/image7.png",
    className: "col-span-2 md:col-span-3 max-md:justify-self-end",
    images: ["/assets/image8.png", "/assets/image9.png"],
    details: {
      title: "Neon Mirage",
      agency: "Visionary Lab",
      year: 2021,
      model: "Aya Nakamura",
    },
  },
  {
    id: 5,
    slug: "NoirReverie",
    src: "/assets/image10.png",
    className: "col-span-2 max-md:justify-self-end md:col-span-4 ",
    images: [
      "/assets/image11.png",
      "/assets/image12.png",
      "/assets/image13.png",
    ],
    details: {
      title: "Quiet Power",
      agency: "Signal Creative",
      year: 2023,
      model: "Sasha Lin",
    },
  },
  {
    id: 6,
    slug: "ElectricStillness",
    src: "/assets/image14.png",
    className: "col-span-2 max-md:justify-self-end md:col-span-1 ",
    images: ["/assets/image15.png", "/assets/image16.png"],
    details: {
      title: "City Depths",
      agency: "Nova",
      year: 2022,
      model: "Amira Taleb",
    },
  },
  {
    id: 7,
    slug: "TheSilkRitual",
    src: "/assets/image19.png",
    className: "col-span-2 md:col-span-2 ",
    images: ["/assets/image18.png", "/assets/image19.png"],
    details: {
      title: "Night Pulse",
      agency: "Inkblot Studio",
      year: 2023,
      model: "Jade Laurent",
    },
  },
  {
    id: 8,
    slug: "DustDissonance",
    src: "/assets/img16.jpeg",
    className: "col-span-2 md:col-span-2 ",
    images: [],
    details: {
      title: "Stillness & Storm",
      agency: "Haze Agency",
      year: 2021,
      model: "Noor Azhari",
    },
  },
  {
    id: 9,
    slug: "MonochromeBloom",
    src: "/assets/img5.jpeg",
    className: "col-span-2 max-md:justify-self-end md:col-span-2",
    images: [],
    details: {
      title: "New Range Rover Sport",
      agency: "Accenture Song",
      year: 2023,
      model: "Isla Reyes",
    },
  },
  {
    id: 10,
    slug: "HeatwaveArchive",
    src: "/assets/img20.jpeg",
    className: "col-span-2 max-md:justify-self-end md:col-span-2",
    images: [],
    details: {
      title: "New Range Rover Sport",
      agency: "Accenture Song",
      year: 2023,
      model: "Isla Reyes",
    },
  },
];

// export const sampleData: SampleDataType = [
//   {
//     slug: "img1",
//     src: "/assets/img1.jpeg",
//     className: "col-span-2 md:col-span-1",
//   },
//   { slug: "img10", src: "/assets/img10.jpeg", className: "md:col-span-2" },
//   { slug: "img11", src: "/assets/img11.jpeg", className: "md:col-span-2" },
//   {
//     slug: "img12",
//     src: "/assets/img12.jpeg",
//     className: "col-span-2 md:col-span-3 max-md:justify-self-end",
//   },
//   {
//     slug: "img13",
//     src: "/assets/img13.jpeg",
//     className: "col-span-2 max-md:justify-self-end md:col-span-4 ",
//   },
//   {
//     slug: "img14",
//     src: "/assets/img14.jpeg",
//     className: "col-span-2 max-md:justify-self-end md:col-span-1 ",
//   },
//   {
//     slug: "img15",
//     src: "/assets/img15.jpeg",
//     className: "col-span-2 md:col-span-2 ",
//   },
//   {
//     slug: "img16",
//     src: "/assets/img16.jpeg",
//     className: "col-span-2 md:col-span-2 ",
//   },
//   { slug: "img17", src: "/assets/img17.jpeg", className: "md:col-span-1" },
//   { slug: "img8", src: "/assets/img8.jpeg", className: "md:col-span-2" },
//   {
//     slug: "img6",
//     src: "/assets/img6.jpeg",
//     className: "col-span-2 md:col-span-3",
//   },
//   { slug: "img7", src: "/assets/img7.jpeg", className: "md:col-span-3" },
//   { slug: "img9", src: "/assets/img9.jpeg", className: "md:col-span-3" },
//   {
//     slug: "img4",
//     src: "/assets/img4.jpeg",
//     className: "col-span-2 md:col-span-2",
//   },
//   {
//     slug: "img5",
//     src: "/assets/img5.jpeg",
//     className: "col-span-2 max-md:justify-self-end md:col-span-2",
//   },
//   {
//     slug: "img2",
//     src: "/assets/img2.jpeg",
//     className: " col-span-2 max-md:justify-self-end md:col-span-2",
//   },
//   { slug: "img3", src: "/assets/img3.jpeg", className: " md:col-span-1" },
//   { slug: "img19", src: "/assets/img19.jpeg", className: " md:col-span-2" },
//   { slug: "img20", src: "/assets/img20.jpeg", className: " md:col-span-1" },
//   {
//     slug: "img21",
//     src: "/assets/img21.jpeg",
//     className: "col-span-2 md:col-span-2",
//   },
//   {
//     slug: "img22",
//     src: "/assets/img22.jpeg",
//     className: "col-span-2 max-md:justify-self-end md:col-span-2",
//   },
//   { slug: "img23", src: "/assets/img23.jpeg", className: " md:col-span-2" },
//   { slug: "img24", src: "/assets/img24.jpeg", className: " md:col-span-2" },
//   {
//     slug: "img25",
//     src: "/assets/img25.jpeg",
//     className: "col-span-2 md:col-span-2",
//   },
//   {
//     slug: "img28",
//     src: "/assets/img28.jpg",
//     className: "col-span-2 md:col-span-1",
//   },
//   { slug: "img32", src: "/assets/img32.jpeg", className: " md:col-span-2" },
//   { slug: "img33", src: "/assets/img33.jpeg", className: " md:col-span-3" },
//   {
//     slug: "img34",
//     src: "/assets/img34.jpeg",
//     className: "col-span-2 max-md:justify-self-end md:col-span-2",
//   },
// ];

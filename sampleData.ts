export type SampleDataItem = {
  id: number;
  slug: string;
  src: string;
  className: string;
  images: string[];
  details?: {
    title: string;
    agency: string;
    client: string;
    type: string;
    year: number;
  };
};

export type SampleDataType = SampleDataItem[];

export const sampleData: SampleDataType = [
  {
    id: 1,
    slug: "img1",
    src: "/assets/img1.jpeg",
    className: "col-span-2 md:col-span-1",
    images: ["/assets/img2.jpeg", "/assets/img3.jpeg", "/assets/img4.jpeg"],
    details: {
      title: "Desert Escape",
      agency: "Nomad Studio",
      client: "Jeep",
      type: "Personal",
      year: 2022,
    },
  },
  {
    id: 2,
    slug: "img28",
    src: "/assets/img28.jpg",
    className: "md:col-span-2",
    images: ["/assets/img29.jpg", "/assets/img30.jpg", "/assets/img28.jpg"],
    details: {
      title: "Urban Threads",
      agency: "Drip House",
      client: "Zara",
      type: "Commissioned",
      year: 2023,
    },
  },
  {
    id: 3,
    slug: "img11",
    src: "/assets/img17.jpeg",
    className: "md:col-span-2",
    images: ["/assets/img12.jpeg", "/assets/img13.jpeg", "/assets/img14.jpeg"],
    details: {
      title: "Mood & Motion",
      agency: "Studio Flux",
      client: "IKEA",
      type: "Commissioned",
      year: 2022,
    },
  },
  {
    id: 4,
    slug: "img12",
    src: "/assets/img12.jpeg",
    className: "col-span-2 md:col-span-3 max-md:justify-self-end",
    images: ["/assets/img13.jpeg", "/assets/img14.jpeg", "/assets/img15.jpeg"],
    details: {
      title: "Neon Mirage",
      agency: "Visionary Lab",
      client: "Adidas",
      type: "Concept",
      year: 2021,
    },
  },
  {
    id: 5,
    slug: "img13",
    src: "/assets/img13.jpeg",
    className: "col-span-2 max-md:justify-self-end md:col-span-4 ",
    images: ["/assets/img14.jpeg", "/assets/img15.jpeg", "/assets/img16.jpeg"],
    details: {
      title: "Quiet Power",
      agency: "Signal Creative",
      client: "Volvo",
      type: "Commissioned",
      year: 2023,
    },
  },
  {
    id: 6,
    slug: "img14",
    src: "/assets/img14.jpeg",
    className: "col-span-2 max-md:justify-self-end md:col-span-1 ",
    images: ["/assets/img15.jpeg", "/assets/img16.jpeg", "/assets/img17.jpeg"],
    details: {
      title: "City Depths",
      agency: "Nova",
      client: "Canon",
      type: "Personal",
      year: 2022,
    },
  },
  {
    id: 7,
    slug: "img15",
    src: "/assets/img15.jpeg",
    className: "col-span-2 md:col-span-2 ",
    images: ["/assets/img16.jpeg", "/assets/img17.jpeg", "/assets/img18.jpeg"],
    details: {
      title: "Night Pulse",
      agency: "Inkblot Studio",
      client: "Netflix",
      type: "Commissioned",
      year: 2023,
    },
  },
  {
    id: 8,
    slug: "img16",
    src: "/assets/img16.jpeg",
    className: "col-span-2 md:col-span-2 ",
    images: ["/assets/img17.jpeg", "/assets/img18.jpeg", "/assets/img19.jpeg"],
    details: {
      title: "Stillness & Storm",
      agency: "Haze Agency",
      client: "Sony",
      type: "Personal",
      year: 2021,
    },
  },
  {
    id: 9,
    slug: "img5",
    src: "/assets/img5.jpeg",
    className: "col-span-2 max-md:justify-self-end md:col-span-2",
    images: ["/assets/img6.jpeg", "/assets/img7.jpeg", "/assets/img8.jpeg"],
    details: {
      title: "New Range Rover Sport",
      agency: "Accenture Song",
      client: "Range Rover",
      type: "Commissioned",
      year: 2023,
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

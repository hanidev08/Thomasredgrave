"use client";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React, { useRef } from "react";
import one from "@/public/assets/img28.jpg";
import "./style.scss";
import useLocoScroll from "@/hooks/useLocoScroll";
import { useInView } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

const phrase =
  "Thomas Redgrave is a color-driven visual designer and art director based in London. His style revolves around contrast, imagination, and immersive scenes, often described as bold and expressive, leaving a strong visual impression.";

const Page = () => {
  useLocoScroll(true);
  const description = useRef(null);
  const isInView = useInView(description);

  return (
    <section ref={description} id="main-container" data-scroll-container>
      <div className="container relative h-screen">
        <div className=" lg:flex lg:justify-between">
          <div className=" flex flex-col">
            <div className=" mt-5">
              <h1 className="full-title uppercase max-md:max-w-[300px] lg:max-w-[300px]">
                Info
              </h1>
            </div>
            <div className=" flex items-start gap-32 mt-8 lg:mt-16">
              <div className="desc-title uppercase hidden lg:block">
                Photographer
              </div>
              <div>
                <div className="">
                  <h2 className="desc-title uppercase">About/</h2>
                  <p className="desc-title mt-2  uppercase  text-gray-400 max-w-[300px] md:max-w-[600px] lg:max-w-[300px]">
                    <AnimatedText phrase={phrase} isInView={isInView} />
                  </p>
                </div>
                <div className=" mt-16 ">
                  <h2 className=" desc-title uppercase">Project/</h2>
                  <ul className=" desc-title mt-2 uppercase text-gray-400">
                    <AnimatedText
                      phrase={"Velvet Shadows"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Echoes of Neon"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Glass Skin"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Crimson Syntax"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Noir Reverie"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Electric Stillness"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"The Silk Ritual"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Dust & Dissonance"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Monochrome Bloom"}
                      isInView={isInView}
                    />{" "}
                    <br />
                    <AnimatedText
                      phrase={"Heatwave Archive"}
                      isInView={isInView}
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" relative w-[70vh] max-w-[450px] aspect-[3/5] hidden lg:block mr-32">
            <Image
              data-scroll
              src={one}
              alt=""
              fill
              className="image object-cover"
            />
          </div>
        </div>
        <div className=" absolute bottom-10 flex gap-4">
          <Link href="#" className=" uppercase text-[10px]">
            Instgram
          </Link>
          <Link href="#" className=" uppercase text-[10px]">
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;

// import { Link } from "next-view-transitions";
// import Image from "next/image";
// import React from "react";
// import one from "@/public/assets/img28.jpg";

// const Page = () => {
//   return (
//     <section>
//       <div className="container relative h-screen">
//         <div className=" absolute hidden md:block left-5 top-[20%]">
//           <h2 className="text-[10px] uppercase">Photographer</h2>
//         </div>
//         <div className=" mt-5">
//           <h1 className=" text-6xl uppercase leading-14">
//             <span>Pierre</span>
//             <br />
//             <span>Cathala</span>
//           </h1>
//         </div>
//         <div className=" md:ml-64">
//           <div className=" mt-8">
//             <h2 className=" text-[10px] uppercase">About/</h2>
//             <p className=" mt-2 text-[10px] uppercase leading-4 text-gray-400 tracking-tighter max-w-[250px]">
//               PIERRE CATHALA is a color-first editorial and commercial
//               photographer and art director based in Paris. His style revolves
//               around contrasty, surreal and extravagant sceneries. Often
//               characterized as bold and strong.
//             </p>
//           </div>
//           <div className=" mt-16">
//             <h2 className=" text-[10px] uppercase">About/</h2>
//             <ul className=" mt-2 uppercase text-[10px] text-gray-400 leading-4">
//               <li>Taste of blue</li>
//               <li>Cadaver Beauty</li>
//               <li>Somber lover</li>
//               <li>The New Coutures Series</li>
//               <li>Schott Campaign</li>
//               <li>RVB</li>
//               <li>Planete Morte Bag Campaign</li>
//               <li>Give me Red!</li>
//             </ul>
//           </div>
//         </div>
//         <div className=" absolute bottom-10 flex gap-4">
//           <Link href="#" className=" uppercase text-[10px]">
//             Instgram
//           </Link>
//           <Link href="#" className=" uppercase text-[10px]">
//             Linkedin
//           </Link>
//         </div>
//         <div className=" hidden md:block absolute right-[5%] top-[0%] w-[500px] h-[800px]">
//           <Image src={one} alt="one" fill className=" size-full object-cover" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Page;

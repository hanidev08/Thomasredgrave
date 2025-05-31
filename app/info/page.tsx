import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";
import one from "@/public/assets/img28.jpg"

const Page = () => {
  return (
    <section>
      <div className="container relative h-screen">
        <div className=" absolute hidden md:block left-5 top-[20%]">
          <h2 className="text-[10px] uppercase">Photographer</h2>
        </div>
        <div className=" mt-5">
          <h1 className=" text-6xl uppercase leading-14">
            <span>Pierre</span>
            <br />
            <span>Cathala</span>
          </h1>
        </div>
        <div className=" md:ml-64">
          <div className=" mt-8">
            <h2 className=" text-[10px] uppercase">About/</h2>
            <p className=" mt-2 text-[10px] uppercase leading-4 text-gray-400 tracking-tighter max-w-[250px]">
              PIERRE CATHALA is a color-first editorial and commercial
              photographer and art director based in Paris. His style revolves
              around contrasty, surreal and extravagant sceneries. Often
              characterized as bold and strong.
            </p>
          </div>
          <div className=" mt-16">
            <h2 className=" text-[10px] uppercase">About/</h2>
            <ul className=" mt-2 uppercase text-[10px] text-gray-400 leading-4">
              <li>Taste of blue</li>
              <li>Cadaver Beauty</li>
              <li>Somber lover</li>
              <li>The New Coutures Series</li>
              <li>Schott Campaign</li>
              <li>RVB</li>
              <li>Planete Morte Bag Campaign</li>
              <li>Give me Red!</li>
            </ul>
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
        <div className=" hidden md:block absolute right-[5%] top-[0%] w-[500px] h-[800px]">
          <Image src={one} alt="one" fill className=" size-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Page;

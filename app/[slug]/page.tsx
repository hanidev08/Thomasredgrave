import { sampleData } from "@/sampleData";
import { notFound } from "next/navigation";
import React from "react";
import "./style.scss";
import Image from "next/image";

const getPageData = (slug: string) => {
  return sampleData.find((sample) => sample.slug === slug);
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = getPageData(slug);
  if (!data) return notFound();

  return (
    <section data-scroll-section>
      <div className="container relative">
        <div className="">
          <h2 className="text-[12px] text-[#080808]">/0{data.id}</h2>
          {data.details && (
            <ul className="mt-2 text-[12px] leading-4 uppercase text-[#080808]">
              <li>{data.details.title}</li>
              <li>Agency: {data.details.agency}</li>
              <li>Client: {data.details.client}</li>
              <li>Type: {data.details.type}</li>
              <li>Year: {data.details.year}</li>
            </ul>
          )}
        </div>
        <div className="flex items-center justify-center h-[70vh]">
          <div className=" relative w-[50vw] max-w-[400px] aspect-[4/5] ">
            <Image
              data-scroll
              src={data.src}
              alt={data.slug}
              fill
              className="image object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className=" relative w-[50vw] max-w-[400px] aspect-[4/5] ">
            <Image
              data-scroll
              src={data.images[0]}
              alt={data.slug}
              fill
              className="image object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          <div className=" relative w-[50vw] max-w-[400px] aspect-[4/5] ">
            <Image
              data-scroll
              src={data.images[1]}
              alt={data.slug}
              fill
              className="image object-cover"
            />
          </div>
        </div>{" "}
        <div className="flex items-center justify-center h-screen">
          <div className=" relative w-[50vw] max-w-[400px] aspect-[4/5] ">
            <Image
              data-scroll
              src={data.images[2]}
              alt={data.slug}
              fill
              className="image object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;

{
  /* <div className=" grid grid-cols-1 md:grid-cols-2 gap-42 place-items-center md:mt-10">
          <div className=" md:col-span-1 relative w-[95vw] md:w-[50vw] md:max-w-[400px] md:aspect-[4/5] max-w-[700px] aspect-[3/5]">
            <Image
              data-scroll
              src={data.src}
              alt="src"
              fill
              className="image object-cover"
            />
          </div>
        </div> */
}

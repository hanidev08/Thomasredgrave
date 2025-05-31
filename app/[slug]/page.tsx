import { sampleData } from "@/sampleData";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import "./style.scss";

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
      <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-42 place-items-center md:mt-10">
          <div className=" md:col-span-1 relative w-[95vw] md:w-[50vw] md:max-w-[400px] md:aspect-[4/5] max-w-[700px] aspect-[3/5]">
            <Image
              data-scroll
              src={data.src}
              alt="src"
              fill
              className="image object-cover"
            />
          </div>
          <div className=" md:col-span-1 relative w-[65vw]  md:w-[30vw] md:max-w-[300px] md:aspect-[4/5] max-w-[500px] aspect-[3/5]">
            <Image
              data-scroll
              src={data.src}
              alt="src"
              fill
              className="image object-cover"
            />
          </div>
          <div className=" md:col-span-1 relative w-[95vw] md:w-[50vw] md:max-w-[400px] md:aspect-[4/5] max-w-[700px] aspect-[3/5]">
            <Image
              data-scroll
              src={data.src}
              alt="src"
              fill
              className="image object-cover"
            />
          </div>
          <div className=" md:col-span-1 relative w-[65vw]  md:w-[30vw] md:max-w-[300px] md:aspect-[4/5] max-w-[500px] aspect-[3/5]">
            <Image
              data-scroll
              src={data.src}
              alt="src"
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

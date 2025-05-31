"use client";
import useLocoScroll from "@/hooks/useLocoScroll";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLocoScroll(true);

  return (
    <div id="main-container" data-scroll-container>
      <div className=" bg-white flex flex-col justify-center items-center text-center h-[70px]">
        <h1 className=" text-5xl mix-blend-difference text-white z-10">RVB</h1>
        <p className=" mix-blend-difference text-gray-400 z-10 max-w-[250px] text-[10px]">
          A personal exploration of colorblindness and the deeper sense of
          purpose it has revealed.
        </p>
      </div>
      {children}
    </div>
  );
}

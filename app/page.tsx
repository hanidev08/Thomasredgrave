"use client";
import useLocoScroll from "@/hooks/useLocoScroll";
import { Hero } from "@/sections/Hero";

export default function Home() {
  useLocoScroll(true);

  return (
    <div id="main-container" data-scroll-container>
      <Hero />
    </div>
  );
}

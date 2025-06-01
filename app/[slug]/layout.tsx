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
      {children}
    </div>
  );
}

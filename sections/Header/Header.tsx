"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="container">
        <div className=" flex items-center justify-between">
          <Button href="/" className=" uppercase text-sm">
            Thomasredgrave
          </Button>
          {pathname === "/" ? (
            <Button href="/info" className=" uppercase text-xs">
              Info
            </Button>
          ) : (
            <Button href="/" className="uppercase text-sm">
              Back
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

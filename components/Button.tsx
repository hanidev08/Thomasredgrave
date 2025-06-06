"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Button = (
  props: {
    className?: string;
    href: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const { href, children, className } = props;
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
      }}
      className={`${className}`}
    >
      {children}
    </Link>
  );
};

export const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.2,
        transform: "translateY(-35%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      },
    ],
    {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Button;

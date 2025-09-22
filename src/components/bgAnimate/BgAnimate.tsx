"use client";

import { ReactNode } from "react";
import "./bg-animate.css";

type BgAnimateProps = {
  children: ReactNode;
};

export default function BgAnimate({ children }: BgAnimateProps) {
  return <div className="animation">{children}</div>;
}

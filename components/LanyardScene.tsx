"use client";

import { Suspense } from "react";
import Lanyard from "./Lanyard/Lanyard";

export default function LanyardScene() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={null}>
        <Lanyard />
      </Suspense>
    </div>
  );
}

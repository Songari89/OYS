import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function useScrollObserver() {
  const { ref, inView, enrty } = useInView({
    root: null,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "10rem", backgroundColor: "gray" }}
    >
      {console.log(inView)}
    </div>
  );
}

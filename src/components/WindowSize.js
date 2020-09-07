import { useState, useEffect } from "react";

export default function useWindowSize(cb) {
  const [[windowWidth, windowHeight], setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const handleResize = () => {
    if (cb && typeof cb === "function") {
      cb();
      setWindowSize([window.innerWidth, window.innerHeight]);
    } else {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
  };

  useEffect(handleResize, []);
  return [windowWidth, windowHeight];
}

import { useEffect, useState } from "react";

export default function useResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return isMobile;
}

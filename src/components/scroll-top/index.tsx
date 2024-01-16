import { useEffect } from "react";

const ScrollTopOnMount = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

export default ScrollTopOnMount;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Immediately scroll to the top without animation
    window.scrollTo(0, 0);
  }, [location.pathname]); // Runs whenever the route path changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;


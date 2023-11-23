
import { useInView } from "react-intersection-observer";

export const useCustomInView = (customOptions) => {
    const defaultOptions = {
      threshold: 0.15,
      rootMargin: "-100px",
    };
  
    const options = { ...defaultOptions, ...customOptions };
  
    return useInView(options);
  };

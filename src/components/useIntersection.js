import { useState, useRef, useEffect } from "react";

function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          setIsIntersecting(true)
        } 
         
      });

  
    }, options);

    

    if (element) {
      observer.observe(element);
    }

   
     return () => {
       if (element) {
         observer.unobserve(element);
       }

     };
  }, [options]);

  

  return [elementRef, isIntersecting];
  
}

export default useIntersection;

import { useEffect } from "react";

export const usePreventYScroll = (state:boolean) => {
     useEffect(() => {
       const handleBodyOverflow = () => {
         if (state) {
           document.body.classList.add("overflow-hidden");
         } else {
           document.body.classList.remove("overflow-hidden");
         }
       };

       handleBodyOverflow();

       return () => {
         document.body.classList.remove("overflow-hidden");
       };
     }, [state]);
};

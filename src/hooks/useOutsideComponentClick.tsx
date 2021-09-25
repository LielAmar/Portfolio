import { MutableRefObject, useEffect } from "react";

const useOutsideComponentClick = (ref: MutableRefObject<any>, postClick: () => any) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if(ref.current && !ref.current.contains(event.target))
        postClick();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
}

export default useOutsideComponentClick;
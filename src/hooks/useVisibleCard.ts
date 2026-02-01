// // useVisibleCards.ts
// import { useEffect, useState } from "react";

// export const useVisibleCards = () => {
//   const [visible, setVisible] = useState(1);

//   useEffect(() => {
//     const update = () => {
//       if (window.innerWidth >= 1280) setVisible(4); // xl
//       else if (window.innerWidth >= 768) setVisible(2); // md
//       else setVisible(1);
//     };

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return visible;
// };

import { useEffect, useState } from "react";

export  const useVisibleCards = () => {
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCards;
};

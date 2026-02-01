import { motion, AnimatePresence } from "framer-motion";
import { useVisibleCards } from "@/hooks/useVisibleCard";
import { useEffect, useState } from "react";
 interface Testimonial {
  quote: string;
  name: string;
  role: string;
  highlight?: string;
  initials: string;
}

 const testimonials: Testimonial[] = [
  {
    quote:
      "Ric helped keep our community active and engaged. He handled bull posting and raid management consistently, which made a clear difference in daily activity and overall engagement.",
    name: "Alex L",
    role: "Community Lead",
    initials: "AL",
  },
  {
    quote:
      "Ricvinny managed the CRAZYLIVE project from start to finish. His execution and strategic input played a major role in taking the project to an all-time high of $16.5M market cap.",
    name: "Warren W",
    role: "Founder — CRAZYLIVE",
    highlight: "$16.5M Market Cap",
    initials: "WW",
  },
  {
    quote:
      "Ric supported both community management and advisory for our project. His guidance and hands-on involvement helped us grow steadily and reach $600k market cap.",
    name: "Adam",
    role: "Project Founder",
    highlight: "$600k Market Cap",
    initials: "AD",
  },
  {
    quote:
      "Richard assisted with community management for the Odin project and handled multiple operational tasks. He was reliable, organized, and understood how to manage community dynamics effectively.",
    name: "Boris",
    role: "Operations",
    initials: "BO",
  },
  {
    quote:
      "He worked with me across multiple projects, helping create momentum and drive early buying activity. He understands how to activate communities and support growth at critical stages.",
    name: "Harvey",
    role: "Web3 Builder",
    initials: "HA",
  },
  
  
];





// const ReviewSection = () => {
//   const visibleCards = useVisibleCards();
//   const [index, setIndex] = useState(0);

//   const maxIndex = testimonials.length - visibleCards;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   return (
//     <section className="relative py-24 overflow-hidden">
//       <div className="container px-6 mx-auto">
//         {/* Header */}
//         <div className="mb-14 text-center">
//           <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
//             Trusted by <span className="text-gradient">Web3 Founders</span>
//           </h2>
//           <p className="text-muted-foreground">
//             Real feedback from teams I’ve worked with
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="relative overflow-hidden">
//           <motion.div
//             className="flex md:gap-2"
//             animate={{
//               x: `-${(index * 100) / visibleCards}%`,
//             }}
//             transition={{ ease: "easeInOut", duration: 0.6 }}
//           >
//             {testimonials.map((review, i) => (
//               <div
//                 key={i}
//                 className={`flex-shrink-0 ${
//                   visibleCards === 1
//                     ? "w-full"
//                     : visibleCards === 2
//                     ? "w-1/2"
//                     : "w-1/4"
//                 }`}
//               >
//                 <div className="h-full p-6 border rounded-2xl bg-card border-border card-glow">
//                   <p className="mb-4 text-muted-foreground">
//                     “{review.quote}”
//                   </p>

//                   {review.highlight && (
//                     <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/15 text-primary">
//                       {review.highlight}
//                     </span>
//                   )}

//                   <div className="flex items-center gap-3 mt-4">
//                     <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full bg-primary/20 text-primary">
//                       {review.initials}
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold">{review.name}</p>
//                       <p className="text-xs text-muted-foreground">
//                         {review.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-6">
//           {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               className={`h-2 rounded-full transition-all ${
//                 i === index
//                   ? "w-6 bg-primary"
//                   : "w-2 bg-muted-foreground/40"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

const ReviewSection = () => {
  const visibleCards = useVisibleCards();
  const [index, setIndex] = useState(0);

  const maxIndex =
    Math.ceil(testimonials.length / visibleCards) - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section className="relative  overflow-hidden">
      <div className="container px-6 mx-auto">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl font-display">
            Trusted by <span className="text-gradient">Web3 Founders</span>
          </h2>
          <p className="text-muted-foreground">
            Real feedback from teams I’ve worked with
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex md:gap-2"
            animate={{ x: `-${index * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
          >
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-full p-6 border rounded-2xl bg-card border-border card-glow">
                  <p className="mb-4 text-muted-foreground">
                    “{review.quote}”
                  </p>

                  {review.highlight && (
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/15 text-primary">
                      {review.highlight}
                    </span>
                  )}

                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center justify-center w-10 h-10 text-sm font-semibold rounded-full bg-primary/20 text-primary">
                      {review.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};






export default ReviewSection;

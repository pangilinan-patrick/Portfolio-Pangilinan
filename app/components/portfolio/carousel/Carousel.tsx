import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "app/components/portfolio/carousel/styles.css";

interface CarouselProps {
  folder: string[];
}

export const Carousel = ({ folder }: CarouselProps) => {
  const [isLoading, setLoading] = useState(true);
  const [imageLoadError, setImageLoadError] = useState(false);

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, folder.length, page);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleImageError = () => {
    setImageLoadError(true);
    setLoading(false);
  };

  return (
    <>
      {/* while image is loading */}
      <div
        className={`animate-pulse absolute w-full justify-center items-center ${
          isLoading ? "flex" : "hidden"
        }`}
      >
        <div className="relative w-full">
          <div className={`bg-slate-200 w-full pt-[50%]`}></div>
        </div>
      </div>
      {imageLoadError && (
        <div
          className={`absolute w-full justify-center items-center ${
            imageLoadError ? "flex" : "hidden"
          }`}
        >
          {"Error loading image :("}
        </div>
      )}

      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={`absolute w-[100vw] ${isLoading ? "hidden" : ""}`}
          key={page}
          src={folder[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </AnimatePresence>
      <div className="next text-black" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev text-black" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};

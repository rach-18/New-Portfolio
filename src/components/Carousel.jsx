import React, { useRef } from 'react';

const Carousel = () => {
  const containerRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: amount,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    console.log("Next clicked!");
    if (containerRef.current) {
      const slideWidth = containerRef.current.querySelector('div').offsetWidth;
      scrollByAmount(slideWidth);
    }
  };

  const handlePrev = () => {
    console.log("Prev clicked!");
    if (containerRef.current) {
      const slideWidth = containerRef.current.querySelector('div').offsetWidth;
      scrollByAmount(-slideWidth);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
      <div
        ref={containerRef}
        className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth"
      >
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-blue-200 md:w-[calc(33.33%-(32px/3))]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl font-bold text-white">{index + 1}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination my-4 flex gap-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 ease-out duration-300 rounded-full bg-black ${
              index === 0 ? 'w-8' : ''
            }`}
          />
        ))}
      </div>

      <div className="flex space-x-4 z-70">
        <button
          onClick={handlePrev}
          className="prev-btn bg-gray-200 p-2 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="next-btn bg-gray-200 p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;

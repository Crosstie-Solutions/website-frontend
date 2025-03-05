import React, { useEffect, useRef, useState } from "react";


function OurReach() {

  const counterRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  const counters = [
    { label: "Employees", end: 600 },
    { label: "Participants Trained Monthly", end: 40 },
    { label: "Consulting Projects", end: 40 },
    { label: "Trainers and Consultants", end: 30 },
    { label: "Training Programmes", end: 50 },
  ];

  const startCounting = (end, setValue) => {
    let start = 0;
    const duration = 4000; // 2 seconds
    const increment = end / (duration / 16.67); // Smooth increment based on frame rate

    const step = () => {
      start += increment;
      if (start < end) {
        setValue(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <div className="flex flex-col h-auto gap-5 large:w-80vw small:w-90vw">
      
      <div className="flex flex-col h-auto gap-0.5 w-100">
        <div className="flex items-center w-auto h-auto gap-1">
          <hr className="h-2px w-40px bg-crossLightPurple" />
          <h5 className="text-crossLightPurple text-15px">OUR NUMBERS</h5>
        </div>
        <h3 className="font-bold text-20px">Our Reach & Impact</h3>
        <p className="text-15px text-crossTextGray">
          Empowering People, Delivering Results
        </p>
      </div>

      <div
        className="flex items-center justify-center gap-3 border border-gray-300 large:flex-row large:h-150px w-100 bg-crossIconBg rounded-10 small:flex-col small:h-auto small:py-2 large:py-0"
        ref={counterRef}
      >

        {counters.map((counter, index) => {
          const [value, setValue] = useState(0);

          useEffect(() => {
            if (hasCounted) startCounting(counter.end, setValue);
          }, [hasCounted, counter.end]);

          return (

            <div
              className={`flex flex-col justify-start h-70 border-crossLightPurple w-150px  border-r`}
              key={index}
            >
              <h3 className="font-bold text-center text-30px text-crossLightPurple">
              {value}+
              </h3>
              <p className="text-center text-15px w-80">{counter.label}</p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default OurReach;

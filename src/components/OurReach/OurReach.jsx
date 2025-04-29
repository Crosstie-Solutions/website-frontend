import React, { useEffect, useRef, useState } from "react";


function OurReach() {

  const counterRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  const counters = [
    { label: "Employees Trained", end: 6000 },
    { label: "Clients", end: 60 },
    { label: "Participants Trained Monthly", end: 40 },
    { label: "Consulting Projects", end: 40 },
    { label: "Trainers And Consultants", end: 30 },
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
    <div className="flex flex-col h-auto gap-5 large:w-83vw small:w-90vw">
      
      <div className="flex flex-col h-auto gap-0.5 w-100">
        <div className="flex items-center w-auto h-auto gap-1">
          <hr className="h-2px w-40px bg-crossLightPurple" />
          <h5 className="text-crossLightPurple text-17px">OUR NUMBERS</h5>
        </div>
        <h3 className="font-bold text-25px">Our Reach & Impact</h3>
        <p className="text-15px text-crossTextGray">
          Transforming Individuals, Building Organizations… Delivering Results
        </p>
      </div>



      <div
        className="flex items-center justify-center border border-gray-300 large:gap-2 small:gap-5 rounded-tr-3xl large:flex-row large:h-150px w-100 bg-crossIconBg small:flex-wrap small:h-auto small:py-4 large:py-0 rounded-bl-3xl"
        ref={counterRef}
      >


        {counters.map((counter, index) => {
          const [value, setValue] = useState(0);

          useEffect(() => {
            if (hasCounted) startCounting(counter.end, setValue);
          }, [hasCounted, counter.end]);

          return (

            <div
              className={`flex flex-col justify-start large:h-70 border-crossLightPurple large:w-150px ${index === 0 ? "" : "border-l"} small:w-120px small:h-100px `}
              key={index}
            >
              <h3 className="font-bold text-center text-30px text-crossLightPurple w-100 px-1">
              {value}+
              </h3>

              <p className="text-center text-15px w-100 px-1">{counter.label}</p>

            </div>
            

            // https://drive.google.com/file/d/1NE1Q99QWisrQKDsaIwRDsGL07POdx3VK/view?usp=sharing
            // batch40-fullname
          );
        })}

      </div>
    </div>
  );
}

export default OurReach;

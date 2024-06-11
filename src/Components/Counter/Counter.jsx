import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import "./Counter.css";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 1, // Percentage of the element's visibility to trigger
  });

  return (
    <div className="counter">
    {/* <div className="counter" ref={ref}>
      {inView && (
          <CountUp
          start={0}
          end={100000}
          duration={5}
          delay={2}
          />
          )}
    </div> */}
    <div className="counter-box">
        <div className="counter-up"><div className="counter-start" ref={ref}>
      {inView && (
          <CountUp
          start={0}
          end={1000}
          duration={5}
          delay={2}
          />
          )}
    </div></div>
        <div className="counter-text">YEARS OF
        EXPERIENCED</div>
    </div>
    <div className="counter-box">
        <div className="counter-up"><div className="counter-start" ref={ref}>
      {inView && (
          <CountUp
          start={0}
          end={1000}
          duration={5}
          delay={2}
          />
          )}
    </div></div>
        <div className="counter-text">PROJECT
        DONE</div>
    </div>
    <div className="counter-box">
        <div className="counter-up"><div className="counter-start" ref={ref}>
      {inView && (
          <CountUp
          start={0}
          end={1000}
          duration={5}
          delay={2}
          />
          )}
    </div></div>
        <div className="counter-text">LICENSED
        ARCHITECT</div>
    </div>
    <div className="counter-box">
        <div className="counter-up"><div className="counter-start" ref={ref}>
      {inView && (
          <CountUp
          start={0}
          end={1000}
          duration={5}
          delay={2}
          />
          )}
    </div></div>
        <div className="counter-text">HAPPY
        CUSTOMERS</div>
    </div>
    
        </div>
  );
};

export default Counter;

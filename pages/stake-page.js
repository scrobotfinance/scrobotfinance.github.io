import Stake from "../components/stake";
import Header from "../components/header";
import Footer from "../components/footer";
import React, { useState, useEffect } from 'react';

const Frame = () => {

  const [connectedAddress, setConnectedAddress] = useState(null);
  console.log("🚀 ~ file: stake-page.js:9 ~ Frame ~ connectedAddress:", connectedAddress)

  
  useEffect(() => {
      const scrollAnimElements = document.querySelectorAll(
        "[data-animate-on-scroll]"
      );
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio >= 1.0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 1.0,
        }
      );

      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }

      return () => {
        for (let i = 0; i < scrollAnimElements.length; i++) {
          observer.unobserve(scrollAnimElements[i]);
        }
      };
    }, []);
  return (
    <div className="relative bg-garbi-version-2-30-white w-full overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] text-left text-base text-apple-style-dark-2"
     data-animate-on-scroll
     >
      <Header setConnectedAddress={setConnectedAddress}/>
      <div>
        <Stake connectedAddress={connectedAddress}/>
      </div>
      <Footer />
    </div>
  );
};

export default Frame;

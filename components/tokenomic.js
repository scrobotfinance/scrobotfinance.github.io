import { useEffect } from "react";

const Tokenomic = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
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
    <div id="tokenomic"
      className="bg-apple-style-white-2 w-full flex flex-col items-start justify-start py-[120px] box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-5xl text-apple-style-dark-4 font-sf-pro-display-heading-h6"
      data-animate-on-scroll
    >
      <div className="relative flex items-center container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className="px-[16px] lg:px-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="text-apple-style-dark-1 border-b-[2px] border-solid border-garbi-version-2-30-white-85 py-[40px] px-[16px] lg:px-0">
            <div className=" text-13xl leading-[120%] font-semibold text-garbi-version-2-60-black   mb-[16px]">
              ROAD MAP
            </div>
            <div className="mb-[24px]">
              <div className=" leading-[120%] font-semibold text-garbi-version-2-60-black   mb-[8px]">
                  Stone 1: Foundation
              </div>
              <div className="text-base leading-[150%] font-semibold font-inherit text-apple-style-dark-4  ">
                <ul className="m-0 pl-[27px]">
                  <li className="mb-0">
                    Concept design and initial infrastructure development for the ScroBot trading platform.
                  </li>
                  <li className="mb-0">
                    Website and social media setup for community engagement.
                  </li>
                  <li className="mb-0">
                    Successful deployment on the testnet.
                  </li>
                  <li>
                    Implementation of targeted marketing strategies to build awareness.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-[24px]">
              <div className="leading-[120%] font-semibold text-garbi-version-2-60-black mb-[8px]">
                Stone 2: Launching and building community 
              </div>
              <div className="text-base leading-[150%] font-semibold font-inherit text-apple-style-dark-4">
                <ul className="m-0 pl-[27px]">
                  <li className="mb-0">
                    Building a strong and engaged community of users.
                  </li>
                  <li className="mb-0">
                    Successful token launch to kickstart the ScroBot ecosystem.
                  </li>
                  <li className="mb-0">
                    Strategic partnerships to enhance platform capabilities.
                  </li>
                  <li className="mb-0">
                    Mainnet
                  </li>
                  <li className="mb-0">
                    Apply dynamic revenue sharing mechanism.
                  </li>
                  <li className="mb-0">
                    Referral Program
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-[24px]">
              <div className="leading-[120%] font-semibold text-garbi-version-2-60-black mb-[8px]">
                Stone 3: Market Growth and User Interface Refinement
              </div>
              <div className=" text-base leading-[150%] font-semibold font-inherit text-apple-style-dark-4">
                <ul className="m-0 pl-[27px]">
                  <li className="mb-0">
                    Market growth
                  </li>
                  <li>
                    User Interface (UI) Refinement
                  </li>
                  <li>
                    Point conversion
                  </li>
                  <li>
                    Unveiling innovative trading tools and features to enhance user capabilities.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-[24px]">
              <div className="leading-[120%] font-semibold text-garbi-version-2-60-black mb-[8px]">
                Stone 4: UX/Ul update
              </div>
              <div className=" text-base leading-[150%] font-semibold font-inherit text-apple-style-dark-4">
                <ul className="m-0 pl-[27px]">
                  <li className="mb-0">Unveiling innovative trading tools and features to enhance user capabilities.</li>
                  <li className="mb-0">
                    User Interface (Ul) Refinement
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className=" leading-[120%] font-semibold text-garbi-version-2-60-black mb-[8px]">
                Stone 5: DAO Launch and DEX Integration
              </div>
              <div className="text-base leading-[150%] font-semibold font-inherit text-apple-style-dark-4   ">
                <ul className="m-0 pl-[27px]">
                  <li className="mb-0">
                    Establishing a Decentralized Autonomous Organization (DAO) for community-driven governance.
                  </li>
                  <li className="mb-0">
                    Integrating additional DEX routers to diversify trading options for users.
                  </li>
                  <li>
                      Improving the voting system to amplify the influence of token holders in crucial development decisions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
        <div className="img px-[16px] lg:px-0">
          <img
            className=" w-full h-auto object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
            alt=""
            src="/group-1407-10@2x.png"
            data-animate-on-scroll
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;

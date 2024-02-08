import { useState } from "react";
import Image from "next/image";
import { ElfsightWidget } from "react-elfsight-widget";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDoubleQuotesR } from "react-icons/ri";
import MotionX from "../ui/MotionX";
// import LoadingAnimation from "../ui/LoadingAnimation";
import FadeIn from "../ui/fadeIn";
export default function Guests() {
  // const [loading, setLoading] = useState(false);

  const [toggle, setToggle] = useState("booking"); // ["booking", "airbnb"]

  return (
    <section id="guests" className="guests pt-20 overflow-hidden">
      <div className="container">
        <div className="heading">
          <MotionX>
            <h2 className="title">
              <span>G</span>uests
            </h2>
          </MotionX>
          <div className="icon">
            <RiDoubleQuotesR />
          </div>
        </div>

        {/* rating */}
        <FadeIn>
          <div className="rating mt-12 max-h-[40rem]">
            <div className="toggle-btn flex gap-12 justify-center">
              <div className="wrap flex gap-12 relative">
                <button
                  className="booking"
                  onClick={() => setToggle("booking")}
                >
                  <Image
                    src="../assets/images/guests/bookinglogo-150x142.webp"
                    alt="booking"
                  />
                </button>
                <button className="airbnb" onClick={() => setToggle("airbnb")}>
                  <Image
                    src="../assets/images/guests/airbnblogo-150x142.webp"
                    alt="airbnb"
                  />
                </button>

                {/* arrow */}
                <div
                  className={`arrow w-full transition-all duration-500 absolute top-[110%]  text-4xl ${
                    toggle === "booking"
                      ? "left-[10%] text-[#004683]"
                      : "left-[73%] text-[#ff5b67]"
                  }`}
                >
                  <TiArrowSortedDown />
                </div>
              </div>
            </div>

            {/* <div className="loading-animation h-20">
              {loading ? <LoadingAnimation /> : <></>}
            </div> */}
            {/* widgets */}
            <div className={`widgets mt-12`}>
              <div
                className={`booking transition-all duration-300 ${
                  toggle === "booking"
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none"
                }`}
              >
                <ElfsightWidget
                  widgetId="471c2567-fc50-4d8b-b46c-0aef6e8f5276F"
                  lazy
                  modern
                />
              </div>
              <div
                className={`airbnb transition-all transform -translate-y-full duration-300${
                  toggle === "airbnb"
                    ? "visible opacity-100"
                    : "invisible opacity-0 pointer-events-none"
                }`}
              >
                <ElfsightWidget
                  widgetId="0842e0c0-7524-46d9-b4ef-daae89153573F"
                  lazy
                  modern
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
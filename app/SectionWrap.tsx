import { useRef } from "react";
import "./App.css";

import Gallery from "./components/Gallery";
import Room from "./components/Room";
// import Calendar from "./components/Calendar";
import Contact from "./components/Contact";

import Guests from "./components/Guests";
import { lazy, Suspense } from "react";
import LoadingAnimation from "./ui/LoadingAnimation";

import BookNow from "./components/BookNow";

export default function SectionWrap() {
  const Calendar = lazy(() => import("./components/Calendar"));
  const sections = useRef<HTMLDivElement | null>(null);  return (
    <div ref={sections}>
      <Suspense
        fallback={
          <div className="container">
            <LoadingAnimation />
          </div>
        }
      >
        <Calendar />
        <BookNow />
      </Suspense>
      <Gallery />
      <Room />
      <Guests />
      <Contact />
    </div>
  );
}

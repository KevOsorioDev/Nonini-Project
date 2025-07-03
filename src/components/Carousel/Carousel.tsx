import { useState, useRef, useEffect, useId } from "react";
import type { SlideData } from "../../data/carouselItems";
import "./Carousel.css";

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);
  const id = useId();

  const handlePrevious = () =>
    setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const handleNext = () =>
    setCurrent(prev => (prev + 1) % slides.length);
  const handleSlideClick = (index: number) => {
    if (index !== current) setCurrent(index);
  };

  return (
    <div
      className="carousel-container"
      aria-labelledby={`carousel-${id}`}
    >
      <ul
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <Slide
            key={idx}
            slide={slide}
            index={idx}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="carousel-controls">
        <button onClick={handlePrevious} aria-label="Previous">
          <i className="fa-solid fa-arrow-left icon left"></i>
        </button>
        <button onClick={handleNext} aria-label="Next">
          <i className="fa-solid fa-arrow-right icon right"></i>
        </button>
      </div>
    </div>
  );
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (i: number) => void;
}

function Slide({
  slide,
  index,
  current,
  handleSlideClick,
}: SlideProps) {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const el = slideRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${xRef.current}px`);
      el.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current!);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = e.clientX - (r.left + r.width / 2);
    yRef.current = e.clientY - (r.top + r.height / 2);
  };
  const onMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const isActive = current === index;

  return (
    <li
      ref={slideRef}
      className={`carousel-slide ${isActive ? "active" : ""}`}
      onClick={() => handleSlideClick(index)}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="carousel-image-wrapper">
        <img src={slide.src} alt={slide.title} />
        {isActive && <div className="overlay" />}
      </div>
      <div className={`carousel-content ${isActive ? "show" : ""}`}>
        <h2>{slide.title}</h2>
        <button>{slide.button}</button>
      </div>
    </li>
  );
}

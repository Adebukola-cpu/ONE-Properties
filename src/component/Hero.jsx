import { useEffect, useState } from "react";

const heroImages = [
  "/images/hero.jpg",
  "/images/Exterior.jpg",
  "/images/interior-decor.jpg",
  "/images/residence1.jpg",
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="hero" id="home">
      {/* Background images */}
      <div className="hero-slides">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-content">
        <p className="hero-eyebrow">
          A NEW STANDARD OF LIVING
        </p>

        <h1>
          Live with
          <br />
          <em>intention.</em>
        </h1>

        <p className="hero-description">
          A collection of refined residences designed
          <br />
          for those who appreciate the extraordinary.
        </p>

        <a
          href="#residences"
          className="text-link intro-slide-left"
        >
          Discover the Properties <span>↗</span>
        </a>
      </div>

      {/* Carousel controls */}
      <div className="hero-bottom">
        <div className="hero-counter">
          <span>
            {String(currentSlide + 1).padStart(2, "0")}
          </span>

          <div className="hero-line"></div>

          <span>
            {String(heroImages.length).padStart(2, "0")}
          </span>
        </div>

        <div className="hero-controls">
          <button onClick={previousSlide} aria-label="Previous slide">
            ←
          </button>

          <button onClick={nextSlide} aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
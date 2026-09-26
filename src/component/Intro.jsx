import { useEffect, useRef, useState } from "react";

function Intro() {
  const introRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`intro section ${
        isVisible ? "intro-visible" : ""
      }`}
      ref={introRef}
    >
      <div className="section-label intro-slide-left">
        <span>ONE PROPERTIES</span>
      </div>

      <div className="intro-content">
        <p className="small-heading intro-slide-left">
          DESIGNED FOR
          <br />
          MODERN LIVING
        </p>

        <h2 className="intro-slide-right">
          Where architecture
          <br />
          meets <em>elegance.</em>
        </h2>

        <p className="intro-text intro-slide-right">
          ONE Residence brings together refined architecture,
          considered interiors and an atmosphere designed around
          comfort, privacy and effortless living.
        </p>

        <a
          href="#residences"
          className="text-link intro-slide-left"
        >
          Discover the Properties <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Intro;
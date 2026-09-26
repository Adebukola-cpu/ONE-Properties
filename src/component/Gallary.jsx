import { useEffect, useRef, useState } from "react";

function Gallery() {
  const galleryRef = useRef(null);
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

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="gallery section"
      ref={galleryRef}
    >
      <div className="section-label">
        {/* <span>04</span> */}
        <span>THE ARCHITECTURE</span>
      </div>

      <div className="gallery-intro">
        <h2>
          A quiet expression
          <br />
          of <em>luxury.</em>
        </h2>
      </div>

      <div
        className={`gallery-grid ${
          isVisible ? "gallery-grid-visible" : ""
        }`}
      >
        <div className="gallery-large">
          <img
            src="/images/apartment1.jpg"
            alt="Modern residence exterior"
          />
        </div>

        <div className="gallery-small">
          <img
            src="/images/residence1.jpg"
            alt="Residence architecture"
          />

          <p>
            Every line, material and proportion contributes to
            an architecture that feels timeless.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
import { useEffect, useRef, useState } from "react";

function Location() {
  const locationRef = useRef(null);
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

    if (locationRef.current) {
      observer.observe(locationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="location"
      id="location"
      ref={locationRef}
    >
      <div className="location-image">
        <img
          src="/images/Osun.jfif"
          alt="ONE PROPERTIES"
          className={isVisible ? "location-image-visible" : ""}
        />
      </div>

      <div
        className={`location-content ${
          isVisible ? "location-content-visible" : ""
        }`}
      >
        <div className="section-label light">
          {/* <span>05</span> */}
          <span>THE LOCATION</span>
        </div>

        <p className="small-heading">
          Block 11A, Oroki Estate, Adjacent Tinumola, Osogbo
          <br />
          Osun State, Nigeria
        </p>

        <h2>
          Your city.
          <br />
          Your <em>place.</em>
        </h2>

        <p>
          Positioned within a vibrant neighbourhood, ONE
          Properties places culture, dining, business and
          everyday essentials within easy reach.
        </p>

        <a href="#contact" className="outline-button">
          Enquire about a residence
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Location;
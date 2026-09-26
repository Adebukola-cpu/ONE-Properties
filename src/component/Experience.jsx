import { useEffect, useRef, useState } from "react";

function Experience() {
  const experienceRef = useRef(null);
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

  if (experienceRef.current) {
    observer.observe(experienceRef.current);
  }

  return () => observer.disconnect();
}, []);

  return (
    <section
      className="experience section"
      id="experience"
      ref={experienceRef}
    >
      <div className="experience-image">
        <img
          src="/images/interior-decor2.jpg"
          alt="Elegant interior of Elyse Residence"
        />

        <div className="experience-image-label">
          <span>ONE</span>
          <span>PROPERTIES</span>
        </div>
      </div>

      <div
        className={`experience-content ${
          isVisible ? "experience-content-visible" : ""
        }`}
      >
        <div className="section-label">
          <span>THE EXPERIENCE</span>
        </div>

        <p className="experience-small-heading">
          DESIGNED FOR LIVING
        </p>

        <h2>
          Beauty in
          <br />
          <em>every detail.</em>
        </h2>

        <p className="experience-description">
          From the moment you arrive, every element of ONE Properties
          has been considered to create a feeling of calm, comfort
          and belonging.
        </p>

        <p className="experience-description">
          Natural materials, generous spaces and carefully considered
          details create an environment that feels both timeless and
          distinctly modern.
        </p>

        <a href="#location" className="experience-link">
          Discover the experience
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Experience;
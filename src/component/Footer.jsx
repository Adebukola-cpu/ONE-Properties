import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToSection = (sectionId) => {
    navigate("/");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <footer
      className={`footer ${isVisible ? "footer-visible" : ""}`}
      ref={footerRef}
      id="contact"
    >
      <div className="footer-top">

        <div className="footer-brand">

          <p className="footer-eyebrow">
            ONE PROPERTIES
          </p>

          <h2>
            Find your
            <br />
            <em>place.</em>
          </h2>

          <p className="footer-description">
            A collection of refined residences created for
            considered living, timeless comfort and everyday
            beauty.
          </p>

          <a
            href="mailto:contact@oneproperties.com"
            className="footer-email"
          >
            contact@oneproperties.com
            <span>↗</span>
          </a>

        </div>


        <div className="footer-navigation">

          <div className="footer-column">

            <p>EXPLORE</p>

            <button onClick={() => goToSection("home")}>
              Home
            </button>

            <button onClick={() => goToSection("residences")}>
              Residences
            </button>

            <button onClick={() => goToSection("experience")}>
              Experience
            </button>

            <button onClick={() => goToSection("location")}>
              Location
            </button>

          </div>


          <div className="footer-column">

            <p>CONNECT</p>

            <button onClick={() => navigate("enquire")}>
              <a href="/enquire">
                Enquire
             </a>
            </button>

            <button onClick={() => goToSection("contact")}>
              <a href="/enquire">
                contact
             </a>
            </button>

            <a href="#contact">
              Instagram
            </a>

            <a href="#contact">
              LinkedIn
            </a>

          </div>

        </div>

      </div>


      <div className="footer-logo">
        ONE
        <span>PROPERTIES</span>
      </div>


      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} ONE PROPERTIES
        </span>

        <span>
          Designed for considered living.
        </span>

        <button onClick={() => goToSection("home")}>
          Back to top ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;
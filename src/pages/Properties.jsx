import { useParams, Link } from "react-router-dom";


const residences = {
  penthouse: {
    title: "The Penthouse",
    description:
      "An exceptional private residence with expansive views and elevated living.",
    size: "216 m²",
    bedrooms: "4 Bedrooms",
    bathrooms: "4 Bathrooms",
    type: "Penthouse",
    video: "/videos/penthouse.mp4",
  },

  "two-bedroom": {
    title: "The Two Bedroom",
    description:
      "Generous proportions and elegant living spaces designed for modern comfort.",
    size: "124 m²",
    bedrooms: "2 Bedrooms",
    bathrooms: "2 Bathrooms",
    type: "Apartment",
    image: "/images/properties2.jpg",
  },

  "three-bedroom": {
    title: "The Three Bedroom",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    size: "78 m²",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    type: "Apartment",
    image: "/images/properties2.jpg",
  },

  bungalow: {
    title: "Bungalow",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    size: "78 m²",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    type: "Bungalow",
    image: "/images/properties4.jpg",
  },

  duplex: {
    title: "Duplex",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    size: "78 m²",
    bedrooms: "3 Bedrooms",
    bathrooms: "3 Bathrooms",
    type: "Duplex",
    image: "/images/properties5.jpg",
  },
};


function Properties() {
  const { slug } = useParams();

  const residence = residences[slug];


  if (!residence) {
    return (
      <main className="property-not-found">

        <h1>Property not found</h1>

        <Link to="/">
          Return home
        </Link>

      </main>
    );
  }


  return (
    <main className="residence-details">

      <section className="property-hero">
        {residence.video ? (
          <video
            src={residence.video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={residence.image}
            alt={residence.title}
          />
        )}

        <div className="property-hero-overlay"></div>

        <div className="property-hero-content">
          <p>ELYSE RESIDENCE</p>
          <h1>{residence.title}</h1>
        </div>
      </section>


      <section className="property-information">

        <div className="property-heading">

          <p className="small-heading">
            RESIDENCE DETAILS
          </p>

          <h2>
            Designed for
            <br />
            <em>considered living.</em>
          </h2>

        </div>


        <div className="property-description">

          <p>
            {residence.description}
          </p>


          <div className="property-features">

            <div>
              <span>PROPERTY TYPE</span>
              <strong>
                {residence.type}
              </strong>
            </div>


            <div>
              <span>SIZE</span>
              <strong>
                {residence.size}
              </strong>
            </div>


            <div>
              <span>BEDROOMS</span>
              <strong>
                {residence.bedrooms}
              </strong>
            </div>


            <div>
              <span>BATHROOMS</span>
              <strong>
                {residence.bathrooms}
              </strong>
            </div>

          </div>


          <a
            href="#contact"
            className="property-enquire"
          >
            Enquire about this residence
            <span>↗</span>
          </a>

        </div>

      </section>


      {/* <section className="property-back">

        <Link to="/#residences">
          ← Back to residences
        </Link>

      </section> */}

    </main>
  );
}


export default Properties;
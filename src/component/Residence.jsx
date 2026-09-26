const residences = [
  {
    number: "03",
    title: "The Penthouse",
    slug: "penthouse",
    description:
      "An exceptional private residence with expansive views and elevated living.",
    video: "https://res.cloudinary.com/dgovewawt/video/upload/v1790457034/penthouse_ewxflq.mp4",
    size: "216 m²",
  },

  {
    number: "02",
    title: "The Two Bedroom",
    slug: "two-bedroom",
    description:
      "Generous proportions and elegant living spaces designed for modern comfort.",
    video: "https://res.cloudinary.com/dgovewawt/video/upload/v1790457133/two-bedroom_xjkqc5.mp4",
    size: "124 m²",
  },

  {
    number: "01",
    title: "The Three Bedroom",
    slug: "three-bedroom",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    image: "/images/properties2.jpg",
    size: "78 m²",
  },

  {
    number: "04",
    title: "Bungalow",
    slug: "bungalow",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    image: "/images/properties4.jpg",
    size: "78 m²",
  },

  {
    number: "05",
    title: "Duplex",
    slug: "duplex",
    description:
      "An intimate residence designed with simplicity, warmth and refined details.",
    image: "/images/properties5.jpg",
    size: "78 m²",
  },
];

function Residence() {
  return (
    <section className="residences section" id="residences">
      <div className="section-label light">
        {/* <span>02</span> */}
        <span>Properties For Sale / Rentage</span>
      </div>

      <div className="residences-heading">
        <p className="small-heading">FIND YOUR SPACE</p>

        <h2>
          Homes with
          <br />
          <em>character.</em>
        </h2>
      </div>

      <div className="residence-list">
        {residences.map((residence) => (
          <article className="residence-card" key={residence.number}>
            <div className="residence-image-wrapper">
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

              <span className="residence-number">
                {residence.number}
              </span>
            </div>

            <div className="residence-info">
              <div>
                <h3>{residence.title}</h3>

                <p>{residence.description}</p>
              </div>

              <div className="residence-meta">
                <span>{residence.size}</span>

            <a
                href={`/residences/${residence.slug}`}
                aria-label={`View ${residence.title}`}
            >
                ↗
            </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Residence;
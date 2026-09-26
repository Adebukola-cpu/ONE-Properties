import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Enquire() {
  const [searchParams] = useSearchParams();

  const property = searchParams.get("property") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residence: property,
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("sending");

  try {
    // 1. Send enquiry to ONE Properties
    await emailjs.send(
      "service_bgwmai8",
      "template_epopqqr",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        residence: formData.residence,
        interest: formData.interest,
        message: formData.message,
      },
      "7bQYT5skyVkq-0jAb"
    );

    // 2. Send confirmation to the person who submitted the form
    await emailjs.send(
      "service_bgwmai8",
      "template_vbqm837",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        residence: formData.residence,
        interest: formData.interest,
        message: formData.message,
      },
      "7bQYT5skyVkq-0jAb"
    );

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      phone: "",
      residence: "",
      interest: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS error:", error);

    setStatus("error");
  }
};

  return (
    <main className="enquire-page">

      <section className="enquire-section">

        <div className="enquire-contact">

          <p className="small-heading enquire-label">
            GET IN TOUCH
          </p>

          <h2 className="enquire-main-heading">
            Let's talk about
            <br />
            <em>your next home.</em>
          </h2>

          <p className="enquire-description">
            Whether you have found a residence that speaks to you
            or you're still exploring your options, we're here to
            help you find a space that feels right.
          </p>

          <div className="enquire-details">

            <div>
              <span>EMAIL</span>

              <a href="mailto:hello@oneproperties.com">
                hello@oneproperties.com
              </a>
            </div>

            <div>
              <span>PHONE</span>

              <a href="tel:+2348088033643">
                +234 808 803 3643
              </a>
            </div>

            <div>
              <span>Block 11A, Oroki Estate, Adjacent Tinumola, Osogbo</span>

              <p>Osun, Nigeria</p>
            </div>

          </div>

        </div>


        <div className="enquire-form-wrapper">

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="name">
                FULL NAME
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-row">

              <div className="form-group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="phone">
                  PHONE NUMBER
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="residence">
                I'M INTERESTED IN
              </label>

              <select
                id="residence"
                name="residence"
                value={formData.residence}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a residence
                </option>

                <option value="The Penthouse">
                  The Penthouse
                </option>

                <option value="The Two Bedroom">
                  The Two Bedroom
                </option>

                <option value="The Three Bedroom">
                  The Three Bedroom
                </option>

                <option value="Bungalow">
                  Bungalow
                </option>

                <option value="Duplex">
                  Duplex
                </option>

                <option value="General Enquiry">
                  General Enquiry
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="interest">
                WHAT ARE YOU LOOKING FOR?
              </label>

              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select an option
                </option>

                <option value="Buying">
                  Buying
                </option>

                <option value="Renting">
                  Renting
                </option>

                <option value="More information">
                  More information
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                rows="5"
              />

            </div>


            <button
              type="submit"
              className="enquire-submit"
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending..."
                : "Send enquiry"}

              <span>↗</span>
            </button>


            {status === "success" && (
              <p className="enquire-success">
                Thank you. Your enquiry has been sent successfully.
              </p>
            )}


            {status === "error" && (
              <p className="enquire-error">
                Something went wrong. Please try again.
              </p>
            )}

          </form>

        </div>

      </section>

    </main>
  );
}

export default Enquire;
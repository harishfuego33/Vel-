import { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
const Contact = () => {
  return (
    <main className="contact__main">
      <ContactSection />;
    </main>
  );
};
const ContactSection = () => {
  const style = { height: "2.5rem", width: "2.5rem" };
  const [fullName, setFullName] = useState("");
  const [mailId, setMailId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  return (
    <section className="contact__section">
      <div className="contact__img-box">
        <div className="contact__title">
          <h1 className="greet__welcome">CONTACT US</h1>
        </div>
        <a
          href="https://www.google.com/maps/place/Vel+Farms/@10.7048482,77.2475136,780m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba9cb67cae4dd49:0x78ea3a13793335f1!8m2!3d10.7048447!4d77.2492482!16s%2Fg%2F11ks2s3vh_?entry=ttu"
          target="_blank"
          className="location-link"
        >
          <div className="location-box">
            <div className="location-place">
              <SlLocationPin color="white" style={style} />
              <span className="location-name">Pollachi</span>
            </div>
            <p className="location-info">
              Vel Farms, headquartered in Pollachi, Tamil Nadu, has been a
              leader in the coconut industry since 2004.
            </p>
          </div>
        </a>
      </div>

      <div className="contact__details">
        <div className="contact__address">
          <h1 className="">GET IN TOUCH</h1>
          <p>
            &quot; Together, we grow strong like a coconut tree, thriving with
            unity and purpose. &quot;
          </p>
          <hr />
        </div>
        <div className="contact__map">
          <iframe
            className="map-img"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.603234970942!2d77.2492482!3d10.704844699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cb67cae4dd49%3A0x78ea3a13793335f1!2sVel%20Farms!5e1!3m2!1sen!2sin!4v1719210551960!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>
      <div className="contact">
        <div className="contact__mail">
          <h1 className="contact__mail-us">MAIL US</h1>
          <form action="#" className="contact__form">
            <div className="contact__first-name">
              <p className="contact__input-info">FULL NAME</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="contact__input-field"
                required
              />
            </div>
            <div className="contact__first-name">
              <p className="contact__input-info">E-MAIL ID</p>
              <input
                type="email"
                className="contact__input-field"
                value={mailId}
                onChange={(e) => setMailId(e.target.value)}
                required
              />
            </div>
            <div className="contact__first-name">
              <p className="contact__input-info">SUBJECT</p>
              <input
                type="email"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contact__input-field"
                required
              />
            </div>
            <div className="contact__description">
              <p className="contact__input-info">DESCRIPTION</p>
              <textarea
                type="email"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="contact__input-field description-custom"
                required
              />
            </div>
            <button className="contact__mail-btn">MAIL</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;

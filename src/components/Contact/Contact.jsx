import React from "react";
import "./Contact.css";
import mail_icon from "../../assets/assets/mail_icon.svg";
import call_icon from "../../assets/assets/call_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";
import theme_pattern from "../../assets/assets/theme_pattern.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c366ff8f-2ce4-4a64-bb48-1ca35cfb022c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Get in Touch</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send anything that you want me to work on. You can contact me
            anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>dulanprabashwara@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+94 776277320</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Bandarawela, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onsubmit} action="" className="contact-right">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Enter your message"
            name="message"
            rows="5"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

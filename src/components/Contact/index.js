import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  //initialize form with EmailJS user
  emailjs.init("user_m4msbnn4tLByLnKZIOn7H");

  //set up useState to monitor status of form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //function to send email on submit
  function sendEmail() {
    let templateParams = {
      from_name: name,
      reply_to: email,
      to_name: "Shawn Littrel",
      message: message,
    };
    emailjs
      .send(
        "service_zqr1dhi",
        "template_y8d5k8r",
        templateParams,
        "user_m4msbnn4tLByLnKZIOn7H"
      )
      .then(
        (response) => {
          alert("Email successfully sent!");
          console.log("Status: ", response.status);
          console.log("Message: ", response.message);
        },
        (err) => {
          alert("Error: ", err);
        }
      );
  }
  return (
    <div className="contactWrapper container">
      <h2> Send me a message!</h2>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">
          Name:
        </label>
        <input
          type="name"
          className="form-control"
          id="nameInput"
          placeholder="Your Name"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email Address:
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@email.com"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">
          Message:
        </label>
        <textarea
          className="form-control"
          id="messageInput"
          rows="5"
          required
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <br />
      <div className="d-grid d-md-flex justify-content-end">
        <button type="button" className="btn btn-primary" onClick={sendEmail}>
          <i className="bi bi-check2-circle"></i> Send
        </button>
      </div>
    </div>
  );
}

export default Contact;

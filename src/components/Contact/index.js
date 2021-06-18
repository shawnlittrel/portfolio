import React, { useState } from "react";
import emailjs from "emailjs-com";
//import Toast from "react-bootstrap/Toast";

function Contact() {
  //initialize form with EmailJS user
  emailjs.init("user_m4msbnn4tLByLnKZIOn7H");

  //set up useState to monitor status of form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //const [showToast, setShowToast] = useState(false);
  //const toggleShowToast = () => setShowToast(!showToast);
  //TODO: Get toasts working

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
          //toggleShowToast();
          alert("Email sent successfully!");
          console.log("Status: ", response.status);
          console.log("Message: ", response.message);
        },
        (err) => {
          alert("Error: ", err);
        }
      );
  }
  return (
    <div className="componentWrapper">
      <div className="contactWrapper row">
        <h2 className="message-title text-center"> Send me a message!</h2>
        <div className="message-text" key="msgWrapper">
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
            <button
              type="button"
              className="btn btn-all text-light"
              onClick={sendEmail}
            >
              <i className="bi bi-check2-circle"></i> Send
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="row align-items-center">
        <div className="col">
          <img key="leftImg" src="images/leftImg.jpg" alt="" />
        </div>
        <div className="col justify-content-center">
          <img key="rightImg" src="images/rightImg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

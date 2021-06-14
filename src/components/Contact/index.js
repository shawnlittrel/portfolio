import React from "react";

function Contact() {
  return (
    <div className="contactWrapper container">
      <h2> Send me a message!</h2>
      <div className="mb-3">
        <label for="emailInput" className="form-label">
          Email Address:
        </label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          placeholder="name@email.com"
        />
      </div>
      <div className="mb-3">
        <label for="messageInput" className="form-label">
          Message:
        </label>
        <textarea className="form-control" id="messageInput" rows="5" />
      </div>
      <br />
      <div className="d-grid d-md-flex justify-content-end">
        <button type="button" className="btn btn-primary">
          <i class="bi bi-check2-circle"></i>  Send
        </button>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container mt-5">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8">
            <h1 className="mb-4 contact-head">Contact Living Doll PH</h1>
            <hr />
            <p>
              We'd love to hear from you! Whether you have a question about our dolls, customizations, or anything else—our team is ready to help.
            </p>
          </div>
        </div>
      
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form action="#" method="POST" className="contact-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name" className="mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="email" className="mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="mb-2 mt-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="mb-2 mt-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="6"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button
                  type="submit"
                  className="btn btn-primary-contact rounded-pill px-4 py-2 mt-5"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-8 text-center">
            <h3 className="contact-head">Contact Details</h3>
            <p>Email: <a href="mailto:hello@livingdollph.com">hello@livingdollph.com</a></p>
            <p>Phone: <a href="tel:+639123456789">+63 912 345 6789</a></p>
            <p>Address: 88 Doll Street, Makati City, Metro Manila, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

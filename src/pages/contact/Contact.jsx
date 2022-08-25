import React from "react";
import "./Contact.css";
import "../services/Services.css";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="C_Container">
      <div className="C_Wrapper">
        <section className="Contact_Wrapper">
          <div className="C_Form">
            <h4 className="C_title">Contact Us</h4>
            <input
              type="text"
              placeholder="NAME"
              name="name"
              className="form_control"
            />
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              className="form_control"
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              cols="30"
              rows="10"
              className="form_control"
            ></textarea>
            <button className="C_btn">Submit Here</button>
          </div>
          <div className="C_Info">
            <div className="C_item">
              <h3 className="C_item_title">
                <FaLocationArrow />
                <span> Address</span>
              </h3>
              <h3 className="C_item-text">
                7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase 1,
                Lagos
              </h3>
            </div>
            <div className="C_item">
              <h3 className="C_item_title">
                <IoMdMail />
                <span> Email</span>
              </h3>
              <h3 className="C_item-text">info@bralewood.com</h3>
            </div>
            <div className="C_item">
              <h3 className="C_item_title">
                <FaPhoneAlt />
                <span> Telephone</span>
              </h3>
              <h3 className="C_item-text">07052536219</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

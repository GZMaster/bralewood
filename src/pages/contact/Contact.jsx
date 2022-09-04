import React, { useState } from "react";
import { send } from "emailjs-com";
import "./Contact.scss";
import "../services/Services.scss";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SuccessfulNotification from "../../components/notification/SuccessfulNotification";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Bralewood",
    message: "",
    reply_to: "info@bralewood.com",
    from_email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_hhl8ldq", "template_djummb7", toSend, "IxwXkIwaa63vnsgkR")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    SuccessfulNotification("Mail Sent Successfully");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="C_Container">
      <div className="C_Wrapper">
        <h4 className="C_title">Contact Us</h4>
        <p className="C_Text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla
          totam hic aspernatur vel quia ipsa distinctio repudiandae nostrum ea?
        </p>
        <section className="Contact_Wrapper">
          <form className="C_Form" onSubmit={onSubmit}>
            <div className="C_Flex">
              <input
                type="text"
                placeholder="Your Full Name"
                name="from_name"
                value={toSend.from_name}
                className="form_control"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="your email address"
                name="from_email"
                value={toSend.from_email}
                className="form_control"
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="your subject"
              name="from_subject"
              value={toSend.from_email}
              className="form_control"
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Message"
              type="text"
              cols="30"
              rows="10"
              value={toSend.message}
              className="form_control"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="C_btn">
              Send Message
            </button>
          </form>
          <div className="C_Info">
            <div className="C_item">
              <h3 className="C_item_title">
                <IoLocationOutline />
                <span>Our Address</span>
              </h3>
              <h3 className="C_item-text">
                7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase 1,
                Lagos
              </h3>
            </div>
            <div className="C_item">
              <h3 className="C_item_title">
                <AiOutlineMail />
                <span> Email Us</span>
              </h3>
              <h3 className="C_item-text">info@bralewood.com</h3>
            </div>
            <div className="C_item">
              <h3 className="C_item_title">
                <FiPhoneCall />
                <span>Call Us</span>
              </h3>
              <h3 className="C_item-text">01-4545505</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState} from "react";
import { send } from 'emailjs-com';
import "./Contact.css";
import "../services/Services.css";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'Bralewood',
    message: '',
    reply_to: 'info@bralewood.com',
    from_email: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_hhl8ldq',
      'template_djummb7',
      toSend,
      'IxwXkIwaa63vnsgkR'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="C_Container">
      <div className="C_Wrapper">
        <section className="Contact_Wrapper">
          <form className="C_Form" onSubmit={onSubmit}>
            <h4 className="C_title">Contact Us</h4>
            <input
              type="text"
              placeholder="NAME"
              name="from_name"
              value={toSend.from_name}
              className="form_control"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="EMAIL"
              name="from_email"
              value={toSend.from_email}
              className="form_control"
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="MESSAGE"
              type="text"
              cols="30"
              rows="10"
              value={toSend.message}
              className="form_control"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="C_btn">Submit Here</button>
          </form>
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
              <h3 className="C_item-text">01-4545505</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

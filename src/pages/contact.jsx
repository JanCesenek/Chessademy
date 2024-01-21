import React, { useState } from "react";
import classes from "./contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaBusinessTime } from "react-icons/fa";
import { RiMapPin2Fill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState(false);

  const mockSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  const validForm = name && email.includes("@") && message;

  return (
    <div className={classes.Contact}>
      <h2>How to reach us:</h2>
      <div>
        <MdEmail />
        <p>chessademy@chessademy.com</p>
      </div>
      <div>
        <FaPhoneAlt />
        <p>+1 (520) 600-4635</p>
      </div>
      <div>
        <RiMapPin2Fill />
        <p>
          <a
            href="https://www.google.cz/maps/place/Cotton+Business+Center,+Phoenix,+Arizona+85040,+Spojené+státy+americké/@33.4035804,-111.9919983,16z/data=!3m1!4b1!4m15!1m8!3m7!1s0x872b12ed50a179cb:0x8c69c7f8354a1bac!2zUGhvZW5peCwgQXJpem9uYSwgU3BvamVuw6kgc3TDoXR5IGFtZXJpY2vDqQ!3b1!8m2!3d33.4483771!4d-112.0740373!16zL20vMGQzNXk!3m5!1s0x872b0f11c9253497:0x143764431fcec11c!8m2!3d33.4027649!4d-111.9865295!16s%2Fg%2F1tk6_zlq?entry=ttu"
            target="_blank">
            Cotton Business Center, Phoenix, AZ, 85040, USA
          </a>
        </p>
      </div>
      <div>
        <FaBusinessTime />
        <p>Monday-Friday: 9AM - 5PM (UTC -7.00)</p>
      </div>
      {notification && (
        <div className={classes.Notification}>
          <p>Request sent successfully!</p>
          <TiTickOutline />
        </div>
      )}
      <form className={classes.Form}>
        <h3>Request form</h3>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className={`${classes.Btn} ${!validForm && classes.Inactive}`} onClick={mockSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

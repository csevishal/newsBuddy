import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    messege: "",
  });
  let name, value;
  const getData = (event) => {
    name = event.target.name;
    value = event.target.value;
    // console.log(user);
    setUser({ ...user, [name]: value });
  };
  const datastore = async (event) => {
    // alert("Submitted");
    // const{name, email, address, messege, phone} = user;
    event.preventDefault();
    const res = await fetch(
      // "https://react-application-833ec-default-rtdb.firebaseio.com//react-form-data.json",
      {
        method: "POST",
        headers: { "Content-type": "appliocation/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          messege: user.messege,
        }),
      }
    );
    if (res) {
      setUser({
        name: "",
        email: "",
        messege: "",
      });
      alert("Data Stored");
    } else {
      alert("Please Fill The Data !");
    }
  };
  return (
    <div>
      <section className="contact">
        <div className="content">
          <h2>Get In Touch</h2>
          <p>We'd Love to Hear From You</p>
        </div>
        <div className="form-container">
          <div className="contactInfo">
            <div className="form-box">
              <div className="icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  42 Sudama Nagar<br /> Agar road Ujjain <br />
                  456001{" "}
                </p>
              </div>
            </div>
            <div className="form-box">
              <div className="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p> +91 8319266589</p>
              </div>
            </div>
            <div className="form-box">
              <div className="icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>thakurvishal2611@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="#" method="post">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input
                  value={user.name}
                  onChange={getData}
                  type="text"
                  name="name"
                  required="required"
                />
                <span>FullName</span>
              </div>
              <div className="inputBox">
                <input
                  onChange={getData}
                  value={user.email}
                  type="email"
                  name="email"
                  required="required"
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  name="messege"
                  value={user.messege}
                  id=""
                  onChange={getData}
                  required="required"
                  cols="50"
                  rows="3"
                ></textarea>{" "}
                <span>Type Your Message</span>
              </div>
              <div className="inputBox">
                <input type="submit"  onClick={datastore}/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
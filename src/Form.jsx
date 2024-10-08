import React, { useState } from "react";

const Form = () => {
  const [contactUsData, setContactUsData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    date: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setContactUsData({ ...contactUsData, [name]: value.replace(/\s+/g, "") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactUsData.name.length < 3) {
      alert("Value should be greater than 3");
      return;
    }
    console.log(contactUsData);
  };

  return (
    <>
      <h1>Custom Form</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:<span style={{ color: "red" }}>*</span>{" "}
          </label>
          <input
            name="name"
            value={contactUsData.name}
            onChange={handleChanges}
            type="text"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={contactUsData.email}
            onChange={handleChanges}
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            value={contactUsData.phone}
            onChange={handleChanges}
            name="phone"
            type="tel"
            id="phone"
            required
            maxLength={10}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            value={contactUsData.subject}
            onChange={handleChanges}
            name="subject"
            type="text"
            id="subject"
            required
          />
        </div>
        <div>
          <label htmlFor="datea">Date:</label>
          <input
            value={contactUsData.date}
            onChange={handleChanges}
            name="date"
            type="date"
            id="date"
            min="2023-01-01"
            // max="2024-12-31"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            value={contactUsData.message}
            onChange={handleChanges}
            name="message"
            type="text"
            id="message"
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;

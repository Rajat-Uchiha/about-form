import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [checkbox, setcheckbox] = useState("");

  const handleSubmit = () => {};

  return (
    <form action="#">
      {/* Name */}
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="Name" id="name" required />
      </div>
      {/* Email */}
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Email" id="email" required />
      </div>
      {/* Checkbox */}
      <div>
        <label htmlFor="eligible">Are you eligible:</label>
        <input type="checkbox" id="eligible" />
      </div>
      {/* Phone number */}
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          placeholder="Phone Number"
          id="phone"
          required
          maxLength={10}
        />
      </div>
      <div>
        {/* Subject */}
        <label htmlFor="subject">Subject:</label>
        <input type="text" placeholder="Subject" id="subject" required />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required />
      </div>

      {/* Radio button */}
      <div>
        <label>Gender:</label>
        <label htmlFor="male"> Male:</label>
        <input id="male" type="radio" name="gender" checked />
        <label htmlFor="female"> Female:</label>
        <input id="female" type="radio" name="gender" />
      </div>

      {/* select */}

      <div>
        <label htmlFor="car">Select Cars</label>
        <select name="car" id="car">
          <option value="bmw">BMW</option>
          <option value="audi">Audi</option>
        </select>
      </div>

      <button onClick={handleSubmit}> Submit</button>
      <button type="reset">Reset Now</button>
    </form>
  );
};

export default App;

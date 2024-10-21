import React, { useState } from 'react';
import './JoinOldEmployer.scss';

const JoinOldEmployer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    industry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="join-old-employer">
      <h2>Join the OldEmployer Family!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Example: Johan"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Example: Smith"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-field">
            <label htmlFor="email">Enter your email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your name or email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-field">
            <label htmlFor="phoneNumber">Phone number</label>
            <div className="phone-input">
              <select>
                <option>+1</option>
                {/* Add more country codes */}
              </select>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="123-456-7890"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="industry">Industry</label>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">Select Option</option>
              {/* Add industry options */}
            </select>
          </div>
        </div>
        <button type="submit">Join Now</button>
      </form>
    </div>
  );
};

export default JoinOldEmployer;

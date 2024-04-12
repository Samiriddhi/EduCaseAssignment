import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display collected information in console
    console.log(formData);
    // You can display the collected information in a div box here or do other actions with it
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* Display collected information in a div box */}
      <div>
        <h2>Collected Information:</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        {/* Display photo if available */}
        {formData.photo && (
          <img src={URL.createObjectURL(formData.photo)} alt="Uploaded" style={{ width: '200px' }} />
        )}
      </div>
    </div>
  );
}

export default Form;

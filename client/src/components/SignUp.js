import React, { useState } from 'react';
import axios from 'axios';
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNo: '',
    regId: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/signup', {
      username: formData.name,
      phoneNo:Number(formData.phoneNo),
      regId: Number(formData.regId),
      password: formData.password,
    }).then((response) => {
      console.log(response);
      setFormData({
        name: '',
        phoneNo: '',
        regId: '',
        password: '',
      });
    }).catch(err => {
      console.log(err)
    })
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white p-6 rounded-md shadow-md'>


        <form className="p-8 rounded-lg text-xl">
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block font-medium mb-2">Phone No:</label>
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="regId" className="block font-medium mb-2">Registration ID:</label>
            <input
              type="text"
              id="regId"
              name="regId"
              value={formData.regId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button onClick={handleSubmit} className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 transition duration-200 mt-5">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

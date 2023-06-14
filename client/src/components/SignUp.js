import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
  const initialValues = {
    name: '',
    phoneNo: '',
    regId: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    phoneNo: Yup.string().required('Phone No is required'),
    regId: Yup.string().required('Registration ID is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post('http://localhost:3001/signup', {
        username: values.name,
        phoneNo: Number(values.phoneNo),
        regId: Number(values.regId),
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="p-8 rounded-lg text-xl">
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNo" className="block font-medium mb-2">
                Phone No:
              </label>
              <Field
                type="text"
                id="phoneNo"
                name="phoneNo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ErrorMessage name="phoneNo" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="regId" className="block font-medium mb-2">
                Registration ID:
              </label>
              <Field
                type="text"
                id="regId"
                name="regId"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ErrorMessage name="regId" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white rounded-lg py-2 hover:bg-indigo-600 transition duration-200 mt-5"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;

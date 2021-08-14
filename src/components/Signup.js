import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  function successfullRegister() {
    alert("User Registered Successful!");
  }
  const validate = Yup.object({
    
    UserName:Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      PhoneNumber:Yup.number()
      
      .required('Required'),
    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password is not match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        UserName:'',
        PhoneNumber:'',
        
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form id ="for">
            <TextField label="User Name" name="UserName" type="text" />
            <TextField label="Phone Number" name="PhoneNumber" type="number" />
           
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-danger mt-3" id = 'button' onClick={successfullRegister}
 type="submit">Register</button>
     
            
           
          </Form>
        </div>
      )}
    </Formik>
  )
}
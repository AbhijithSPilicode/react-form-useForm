import React from 'react';
import { useForm } from 'react-hook-form';

const Form2 = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Registration successful!');
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          {...register('firstName', { required: 'Please enter your first name!' })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          {...register('lastName', { required: 'Please enter your last name!' })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register('email', {
            required: 'Please enter your email!',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email format!',
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          {...register('contact', { required: 'Please enter your contact number!' })}
        />
        {errors.contact && <p>{errors.contact.message}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', {
            required: 'Please enter your password!',
            minLength: {
              value: 5,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot be more than 20 characters',
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Form2;

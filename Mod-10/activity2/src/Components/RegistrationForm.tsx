import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    subscribeToNewsletter: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue,
    }));
   };

  const isEmailValid = formData.email.includes('@');
  const doPasswordsMatch = formData.password === formData.confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username || !formData.password || !doPasswordsMatch) {
      alert('Please complete the form correctly.');
      return;
    }

    console.log({
      ...formData,
      subscribeToNewsletter: isEmailValid && formData.subscribeToNewsletter,
    });
  };


   return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-max mx-auto mb-10">

      <label htmlFor="username">Username:</label>
      <input
        className="outline ml-2"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        className="outline ml-2"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        className="outline ml-2"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {!doPasswordsMatch && formData.confirmPassword && (
        <p className="text-red-500 text-sm ml-2">Passwords do not match.</p>
      )}

      <label htmlFor="email">Email:</label>
      <input
        className="outline ml-2"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {formData.email && !isEmailValid && (
        <p className="text-red-500 text-sm ml-2">Email must include '@'</p>
      )}

      <label htmlFor="subscribeToNewsletter" className="flex items-center">
        Subscribe To Newsletter:
        <input
          className="ml-2"
          type="checkbox"
          name="subscribeToNewsletter"
          checked={formData.subscribeToNewsletter}
          onChange={handleChange}
          disabled={!isEmailValid}
        />
      </label>

      <button className="outline" type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

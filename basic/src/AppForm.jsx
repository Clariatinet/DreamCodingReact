import React, { useState } from 'react';

const AppForm = () => {
  // 개별로 해도 되지만 연관이 있으면 객체로 묶자!
  const [form, setForm] = useState({ name: '', email: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>이름:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor='email'>이메일:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={form.email}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AppForm;

// Dependencies
import React, { Component } from 'react';
import './Register.css';
import { useState } from 'react';

const Register = props => {
  const [form, setForm] = useState(
    {
      username: '',
      name: '',
      password: '',
      email: '',
    }
  )

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  function updateField(field, value="null") {
    setForm({ ...form, [field]: value });
  }

    return (
      
      <div className="ContactBox">
    
        <div className="close-icon" onClick={props.handleClose}>x</div>

        <input className="TextBackground"
          type="text"
          onChange={(e) => updateField('username', e.target.value)}
          value={form.username}
          placeholder={'Username'}
        />
    
        <input className="TextBackground"
          type="text"
          onChange={(e) => updateField('name', e.target.value)}
          value={form.name}
          placeholder={'Name'}
        />
       
        <input className="TextBackground"
          type="text"
          onChange={(e) => updateField('password', e.target.value)}
          value={form.password}
          placeholder={'Password'}
        />
        <input className="TextBackground"
          type="text"
          onChange={(e) => updateField('email', e.target.value)}
          value={form.email}
          placeholder={'CalPoly Email'}
        />
        <button className={'SubmitButton'} onClick={() => console.log(form)}>Submit</button>
      </div>
     
    );
  }

export default Register;
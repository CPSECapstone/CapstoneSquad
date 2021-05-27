// Dependencies
import React, { Component } from 'react';
import './SignIn.css';
import { useState } from 'react';

const SignIn = props => {
  const [form, setForm] = useState(
    {
      username: '',
      password: '',
    }
  )

  // Field could be 'username', 'password', or 'message'
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
          onChange={(e) => updateField('password', e.target.value)}
          value={form.password}
          placeholder={'Password'}
        />
        <button className={'SubmitButton'} onClick={() => console.log(form)}>Submit</button>
      </div>
     
    );
  }

export default SignIn;
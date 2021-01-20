import React, { useState } from 'react';
import scholarship from './scholarship.jpg';
import './App.css';
import styled, { css } from 'styled-components';
import redo from './redo.jpg'
import undo from './undo.jpg'
import text from './text.jpg'
import draw from './draw.jpg'
import highlight from './highlight.jpg'
import erase from './erase.jpg'
import * as Realm from "realm-web";

const REALM_APP_ID = "<application-0-waikr>"; // e.g. myapp-abcde
const app = new Realm.App({ id: REALM_APP_ID });

const Button = styled.button``;

const ButtonToggle = styled(Button)`
  opacity: 10;
  ${({ active }) =>
    active && `opacity: 100;`}
`;

const ButtonGroup = styled.div` `;

// Create a component that displays the given user's details
function UserDetail({ user }) {
  return (
    <div>
      <h1>Logged in with anonymous id: {user.id}</h1>
    </div>
  );
}

// Create a component that lets an anonymous user log in
function Login({ setUser }) {
  const loginAnonymous = async () => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    setUser(user);
  };
  return <button onClick={loginAnonymous}>Log In</button>;
}

function App() {

  const [user, setUser] = React.useState(app.currentUser);
 
  return (
    <div className="App">
      <div className="App-header">
        {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
      </div>
     
      <header className="App-TopButton"> 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={redo} className="App-buttons" />
        </ButtonToggle>
        <ButtonToggle>
        <img src={undo} className="App-buttons"/>
        </ButtonToggle>
    </ButtonGroup>
    </header>

    <header className="App-RightButton"> 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={text} className="App-buttons" />
        </ButtonToggle>
    </ButtonGroup>
    </header>

    <header className="App-SecondRightButton"> 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={draw} className="App-buttons" />
        </ButtonToggle>
    </ButtonGroup>
    </header>

    <header className="App-ThirdRightButton"> 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={highlight} className="App-buttons" />
        </ButtonToggle>
    </ButtonGroup>
    </header>

    <header className="App-FourthRightButton"> 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={erase} className="App-buttons" />
        </ButtonToggle>
    </ButtonGroup>
    </header>

    <div className="App"></div>

    





    <header className="App-header">
        <img src={scholarship} className="App-scholarship" alt="scholarship" />
        <p>
        </p>
        <a>
          Calm Your Thoughts With Tater Tots
        </a>
      </header>
    </div>
    
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import scholarship from './scholarship.jpg';
import './App.css';
import styled, { css } from 'styled-components';


const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Redo', 'Undo', 'Annotate'];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
function App() {
  const [active, setActive] = useState(types[0]);
  const [initialData, setInitialData] = useState(0)

  useEffect(() => {
    fetch('/test').then(res => res.json()).then(data => 
      setInitialData(data))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
        <h1>The backend is {initialData.title}</h1>
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
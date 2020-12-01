import React, { Component, useState } from 'react';
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
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
      <ToggleGroup>
        {({active, setActive}) => {
          if(active) {
            return types[0]
          }
          if(setActive) {
            return types[0]
          }
        }}
      </ToggleGroup>
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
}

export default App;

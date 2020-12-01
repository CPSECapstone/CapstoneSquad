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
  constructor(props) {
    super(props);
    this.state = { backendResponse: "" };
  }

  callBackend() {
      fetch("http://localhost:9000/testBackend")
          .then(res => res.text())
          .then(res => this.setState({ backendResponse: res }));
  }

  componentWillMount() {
      this.callBackend();
  }
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
          <p className="App-intro">{this.state.backendResponse}</p>
          <a>
            Calm Your Thoughts With Tater Tots
          </a>
        </header>
      </div>
      
    );
  }
}

export default App;

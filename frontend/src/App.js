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


const Button = styled.button``;

const ButtonToggle = styled(Button)`
  opacity: 10;
  ${({ active }) =>
    active && `opacity: 100;`}
`;

const ButtonGroup = styled.div` `;


function App() {
 
  return (
    <div className="App">
     
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

import React, { Component } from "react";
import { render } from "react-dom";
import scholarship from './scholarship.jpg';
import text from './text.jpg'
import styled, { css } from 'styled-components';
import redo from './redo.jpg'
import undo from './undo.jpg'
import draw from './draw.jpg'
import highlight from './highlight.jpg'
import erase from './erase.jpg'
import './App.css';
import CanvasDraw from "../../src";
import classNames from "./index.css";

const Button = styled.button``;
const ButtonToggle = styled(Button)`
  opacity: 10;
  ${({ active }) =>
    active && `opacity: 100;`}
`;
const ButtonGroup = styled.div` `;
class Demo extends Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 10,
    lazyRadius: 12
  };
 
  render() {
    return (

      <div className="App">
      
     
      <header > 
        <ButtonGroup> 
        <ButtonToggle>
        <img src={redo} className="App-buttons" />
        </ButtonToggle>
        <ButtonToggle>
        <img src={undo} className="App-buttons"/>
        </ButtonToggle>
    </ButtonGroup>
    <CanvasDraw
          brushColor="rgba(0,0,0,0.3)"
          imgSrc={scholarship}
        /> 
         <h2>Calm Your Thoughts With Tater Tots</h2>
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
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));

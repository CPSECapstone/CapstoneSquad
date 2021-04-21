/* src/content.js */
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./content.css";
import Scholarship from './Scholarship.jpg';
//import Save from './Save.jpg'
//import Undo from './Undo.jpg'
//import Clear from './Clear.jpg'
//import classNames from "./index.css";
import CanvasDraw from "react-canvas-draw";

class Main extends React.Component {
  state = {
    color: "#000000",
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 5
  };
    render() {
        return (
            <CanvasDraw
            imgSrc={Scholarship}
            />
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);




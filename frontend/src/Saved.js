/* src/content.js */
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./content.css";
import Scholarship from './Scholarship.jpg';
import Save from './Save.jpg'
import Undo from './Undo.jpg'
import Clear from './Clear.jpg'
import classNames from "./index.css";
import CanvasDraw from "react-canvas-draw";

class Saved extends React.Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 5,
  };
    render() {
        return (
          <div>

          <div class="save" className={classNames.tools}>
            <button
              style= {{order: 2, height: '100px', width: '300px'}}
              onClick={() => {
                this.loadableCanvas.loadSaveData(
                  localStorage.getItem("savedDrawing")
                );
              }}
            >
              CLICK ME! To see your saved changes.
            </button>
            <CanvasDraw
              imgSrc={Scholarship}
              backgroundColor ={"rgba(255, 0, 0, 0)"}
              disabled
              hideGrid
              ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
              saveData={localStorage.getItem("savedDrawing")}
            />
          </div>
        </div>
            
        )
    }
}

export default Saved;




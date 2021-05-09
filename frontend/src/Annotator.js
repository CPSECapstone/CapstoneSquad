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

class Annotator extends React.Component {
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
         
   {/*  <h2>Scholarship Annotator</h2>

          <p id="p1">Try it out! Draw something, hit "Save" and then "Load".</p>*/}
          <div class="buttons" className={classNames.tools}>
            <CanvasDraw className="transparent"
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              canvasWidth={this.state.width}
              canvasHeight={this.state.height}
              hideGrid
              backgroundColor ={"rgba(255, 0, 0, 0)"}
              opacity={"0.50"}
            
             
              
            />
            <button
              style={{height: '50px', width : '50px'}}
              onClick={() => {
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
            >
              <img src={Save} height='40' alt ="Save Button"/>

            </button>

            <button
              style={{height: '50px', width : '50px'}}
              onClick={() => {
                this.saveableCanvas.clear();
              }}
  
            >
              <img src={Clear} height='40' alt = "Clear Button"/>
            </button>

            <button
              style={{height: '50px', width : '50px'}}
              onClick={() => {
                this.saveableCanvas.undo();
              }}
              Clear
            >
               <img src={Undo} height='40' width='40' alt = "Undo Button"/>
            </button>

             {/*
            <div>
              <label>Width:</label>
              <input
                type="number"
                value={this.state.width}
                onChange={e =>
                  this.setState({ width: parseInt(e.target.value, 10) })
                }
              />
            </div>
            */}
            {/*
            <div>
              <label>Height:</label>
              <input
                type="number"
                value={this.state.height}
                onChange={e =>
                  this.setState({ height: parseInt(e.target.value, 10) })
                }
              />
            </div>
            */}
            
            
            <div>
              <label>Brush-Radius:</label>
              <input
                type="number"
                value={this.state.brushRadius}
                onChange={e =>
                  this.setState({ brushRadius: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div>
              <label>Drag-Radius:</label>
              <input
                type="number"
                value={this.state.lazyRadius}
                onChange={e =>
                  this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                }
              />
            </div>

            <form>

               <label for="colorpicker">Color Picker:</label>
               <input
                  id="brushColorPicker"
                  type="color"
                  onChange={e =>
                    this.setState({ color: e.target.value })
                    }
               />

            </form>

          </div>
        </div>
            
        )
    }
}

export default Annotator;



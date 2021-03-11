import React, { Component } from "react";
import ReactDOM from "react-dom";
import Scholarship from './Scholarship.jpg';
import Save from './Save.jpg'
import Undo from './Undo.jpg'
import Clear from './Clear.jpg'
import classNames from "./index.css";
import CanvasDraw from "react-canvas-draw";


class InitialState extends Component {
    state = {
      color: "#000000",
      width: 400,
      height: 400,
      brushRadius: 5,
      lazyRadius: 5
    };

    constructor(props) {
      super(props);
      this.state = { backendResponse: "" };
    }
 
    callBackend() {
        fetch("/test")
            .then(res => res.text())
            .then(res => this.setState({ backendResponse: res }));
    }
 
    componentWillMount() {
        this.callBackend();
    }
  
    render() {
      return (
        <div>
         
          <h2>Scholarship Annotator</h2>

          <p id="p1">Try it out! Draw something, hit "Save" and then "Load".</p>
          <div class="buttons" className={classNames.tools}>
            <CanvasDraw
              imgSrc={Scholarship}
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              canvasWidth={this.state.width}
              canvasHeight={this.state.height}
              
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
          
          <p>
            See you're saved template below!
          </p>
          <p>{this.state.backendResponse}</p>
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
              disabled
              hideGrid
              ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
              saveData={localStorage.getItem("savedDrawing")}
            />
          </div>
        </div>
      );
    }
  }

  let targetnode = document.getElementById("root");
  ReactDOM.render(<InitialState />, targetnode );
 
  



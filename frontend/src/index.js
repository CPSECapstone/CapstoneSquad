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
  
    render() {
      return (
        <div>
         
          <h2>Scholarship Annotator</h2>
         
          <p>Try it out! Draw something, hit "Save" and then "Load".</p>
          <div className={classNames.tools}>
            <button
              style={{height: '230px', width : '240px'}}
              onClick={() => {
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
            >
             
            <img src={Save} alt ="Save Button"/>

            </button>
            <button
              style={{height: '230px', width : '240px'}}
              onClick={() => {
                this.saveableCanvas.clear();
              }}
  
            >
              <img src={Clear} alt = "Clear Button"/>
            </button>

            <button
              style={{height: '230px', width : '240px'}}
              onClick={() => {
                this.saveableCanvas.undo();
              }}
              Clear
            >
               <img src={Undo} alt = "Undo Button"/>
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
          <CanvasDraw
            imgSrc={Scholarship}
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={this.state.width}
            canvasHeight={this.state.height}
            
          />
          <p>
            The following is a disabled canvas with a hidden grid that we use to
            load & show your saved drawing.
          </p>
          <button
            onClick={() => {
              this.loadableCanvas.loadSaveData(
                localStorage.getItem("savedDrawing")
              );
            }}
          >
            Load what you saved previously into the following canvas. Either by
            calling `loadSaveData()` on the component's reference or passing it
            the `saveData` prop:
          </button>
          <CanvasDraw
            imgSrc={Scholarship}
            disabled
            hideGrid
            ref={canvasDraw => (this.loadableCanvas = canvasDraw)}
            saveData={localStorage.getItem("savedDrawing")}
          />
       
        </div>
      );
    }
  }

  let targetnode = document.getElementById("root");
  ReactDOM.render(<InitialState />, targetnode );
 
  



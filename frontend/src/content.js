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
import Register from './Register/Register.js';
import SignIn from './SignIn/SignIn.js';

class Main extends React.Component {
  state = {
    color: "#ffc600",
    width: 400,
    height: 400,
    brushRadius: 5,
    lazyRadius: 5,
  };
  

  state = {
    seen: false,
    showPopup: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  togglePops = () => {
    this.setState({
      showPopup:!this.state.showPopup
    });
  };
    render() {
        return (
          <div>
            
            {/*Register Button*/}
            <div>
            <div onClick={this.togglePop}>
          <button className={'RegisterButton'}>Register</button>
        </div>
        {this.state.seen  && <Register
         handleClose={this.togglePop}
    />}
    
      </div>

       {/*Sign-in Button*/}
       <div>
            <div onClick={this.togglePops}>
          <button className={'RegisterButton'}>Sign-in</button>
        </div>
        {this.state.showPopup  && <SignIn
         handleClose={this.togglePops}
    />}
    
      </div>

      
         
   
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
          
          {/*<p>
            See your saved template below! 
          </p>*/}
          {/*<p>{this.state.backendResponse}</p>*/}
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

const app = document.createElement('div');
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);




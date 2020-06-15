import React, {useState, useEffect} from "react";
import Authentication from "./pages/Authentication/Authentication.js";
import UnsupportedDevice from "./pages/UnsupportedDevice/UnsupportedDevice.js";
import { useObserver } from "mobx-react-lite";

function App() {


  const STATE = {
    ROTATE: "ROTATE",
    UNAVAILABLE: "UNAVAILABLE",
    AVAILABLE: "AVAILABLE"
  }


  const [currentState, setCurrentState] = useState(STATE.AVAILABLE);

  
  const handleResize = () => {
    if(window.innerWidth === 1024 && window.innerHeight === 768) setCurrentState(STATE.AVAILABLE);
    else if(window.innerHeight === 1024 && window.innerWidth === 768) setCurrentState(STATE.ROTATE);
    else setCurrentState(STATE.UNAVAILABLE);
  }

  window.addEventListener('resize', handleResize)
  return useObserver (() => (
    <>
    {currentState === STATE.AVAILABLE ?
    <Authentication/>
    :
    <UnsupportedDevice/>
    }
    </>
  ));
}

export default App;


/*

  if(window.innerWidth === 1024 && window.innerHeight === 768) setCurrentState(STATE.AVAILABLE);
  else if(window.innerHeight === 1024 && window.innerWidth === 768) setCurrentState(STATE.ROTATE);
  else setCurrentState(STATE.UNAVAILABLE);
  
  constructor() {
    super();
    this.state = { 
      height: window.innerHeight, 
      width: window.innerWidth,
      count: 1
      
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount = () => {
    console.log(this.state.height);
    // Additionally I could have just used an arrow function for the binding `this` to the component...
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth,
      count: count++
    });
    console.log("count: ", this.state.count)
  }
  render = () => {
    return (
      <h3>
        Window width: {this.state.width} and height: {this.state.height}
      </h3>
    );
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  }
  */

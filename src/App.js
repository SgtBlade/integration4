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


  const [currentState, setCurrentState] = useState(STATE.UNAVAILABLE);


  //window.addEventListener('resize', handleResize)
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

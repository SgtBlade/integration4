import React, {useState, useEffect} from "react";
import Authentication from "./pages/Authentication/Authentication.js";
import DeviceFormatError from "./pages/DeviceFormatError/DeviceFormatError.js";
import { useObserver } from "mobx-react-lite";

function App() {


  const STATE = {
    ROTATE: "ROTATE",
    UNAVAILABLE: "UNAVAILABLE",
    AVAILABLE: "AVAILABLE"
  }


  const [currentState, setCurrentState] = useState();

  
  const handleResize = () => {
    if(window.innerWidth === 1024 && window.innerHeight === 768) setCurrentState(STATE.AVAILABLE);
    else if(window.innerHeight === 1024 && window.innerWidth === 768) setCurrentState(STATE.ROTATE);
    else setCurrentState(STATE.UNAVAILABLE);
  }

  window.addEventListener('resize', handleResize)

  useEffect(() => {
    if(window.innerWidth === 1024 && window.innerHeight === 768) setCurrentState(STATE.AVAILABLE);
    else if(window.innerHeight === 1024 && window.innerWidth === 768) setCurrentState(STATE.ROTATE);
    else setCurrentState(STATE.UNAVAILABLE);
  }, [STATE.AVAILABLE, STATE.ROTATE, STATE.UNAVAILABLE])

  return useObserver (() => (
    <>
    {currentState === STATE.AVAILABLE ?
    <Authentication/>
    :
    (currentState === STATE.ROTATE ?
      <DeviceFormatError 
      textOne={"Gelieve je toestel te kantelen om deze game te spelen."}
      iconName={"rotate.svg"}
      alt={"rotate icon"}
      width={150}
      height={150}
      />
      :
      <DeviceFormatError 
      textOne={"Deze game is enkel beschikbaar op iPad Mini."} 
      textTwo={"Volg ons op facebook om op de hoogte te blijven van updates!"} 
      textThree={"Voor de leerkrachten: iPad mini is 1024 x 768"}
      textFour={"De resolutie nu is ${window.innerWidth} bij window.innerHeight"}
      href={"#"}
      iconName={"facebook.png"}
      alt={"facebook icon"}
      width={150}
      height={150}
      />
    )
    }
    </>
  ));
}
export default App;

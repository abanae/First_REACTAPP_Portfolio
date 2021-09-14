import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

import "react-vertical-timeline-component/style.min.css";

function App() {
  const [toRender, setToRender] = useState("aboutme");
  const handleRender = () => {
    console.log(toRender);
    // switch(toRender){
    //   case 'home':
    //      return <Timeline/>
    //      case 'aboutme':
    //      return <AboutMe/>
    // }
    if (toRender === "timeline") {
      return <Timeline />;
    } else if (toRender === "aboutme") {
      return <AboutMe />;
    } else if (toRender === "contactme") {
      return <ContactMe />;
    }
  };
  return (
    <div>
      <Navbar handleClick={setToRender} />
      {handleRender()}
    </div>
  );
}

export default App;

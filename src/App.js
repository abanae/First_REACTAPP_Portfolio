import "./App.css";

import {useState} from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import AboutMe from './components/AboutMe';



import "react-vertical-timeline-component/style.min.css";

function App() {
  const [toRender, setToRender] = useState('home');
  const handleRender = () => {  
  // switch(toRender){
  //   case 'home':
  //      return <Timeline/>
  //      case 'aboutme':
  //      return <AboutMe/>
  // }
  if(toRender === 'home'){ 
return <Timeline/>;
  }else if (toRender === 'aboutme'){
    return <AboutMe/>;
  }
}
const handleClick = (name) => {
  console.log(name);
  if (toRender === 'aboutme'){
    setToRender('home');
  }else if (toRender === 'home'){
    setToRender('aboutme')
  }
}
  return (
    <div>
      <Navbar handleClick={handleClick}/>
{handleRender()}
    </div>

  );
}

export default App;

import "./App.css";

import {useState} from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
// import Aboutme from './components/AboutMe';



import "react-vertical-timeline-component/style.min.css";

function App() {
  const [toRender, setToRender] = useState('home');
  const handleRender = () => {
  // switch(toRender){
  //   case 'home':
  //      return <Timeline/>
  // }

  if(toRender === 'home'){
return <Timeline/>;
  }else if (toRender === 'aboutme'){
    return <div>Ana's About Me</div>;
  }
}
const handleClick = () => {
  if (toRender === 'aboutme'){
    setToRender('home');
  }else if (toRender === 'home'){
    setToRender('aboutme')
  }
}
  return (
    <div>
      <Navbar />
{handleRender()}
<button style={{marginLeft: '100px'}} onClick={handleClick}>click me</button>
    </div>

  );
}

export default App;

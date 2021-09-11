import "./App.css";

import {useState} from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';



import "react-vertical-timeline-component/style.min.css";

function App() {
  const [toRender, setToRender] = useState('home');
  const handleRender = () => {
  switch(toRender){
    case 'home':
       return <Timeline/>
  }
}
const handleClick = () => {
  setToRender("intro");
}
  return (
    <div>
      <Navbar />
{handleRender(toRender)}
<button style={{marginLeft: '100px'}} onClick={handleClick}>click me</button>
    </div>

  );
}

export default App;

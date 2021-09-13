import { useState } from "react";
import  Image from '../image/portrait.jpeg';
import Typical from 'react-typical';

const AboutMe = () => {
    const [expertises] = useState([
        { title: 'WEB DEVELOPMENT', body: 'I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS', id: 1 },
        { title: 'DATA STRUCTURES & ALGORITHMS', body: 'As coming from the CS background, I have good grasp over fundamental concepts of DSA', id: 2 }
      ])
    return ( 
        <div style={{marginLeft: '100px'}}  className="about">

             <img src={Image} alt="portrait"/>
             <p style={{marginLeft: '472px', marginTop: '-337px', paddingBottom: '144px', fontSize: '26px'}}>
             <h1>Who Am I ?</h1>
                 I'm a {' '}
                 <Typical
                 loop={Infinity}
                 wrapper='b'
                 steps={[
                     'Developer 💻', 
                     1000,
                     'Designer ✨',
                     1000,
                     'Creative Individual 🎨',
                     1000
                 ]}
                 />
             </p>
           <p style={{fontSize: '18px'}}>My name is Ana and I am a new developer. I've always had an interest in "IT" and I am so eager to practice & learn more. I have previous experience as a Sales Manager, running a $8 million-dollar department store. One of the many things I learned in my previous job is to always be an active listener and communicate effectively with the clients to be able to solve any issues/questions they might have.This will allow the client to build trust and continue business with you. I know with my previous experience and new skills as a developer, I can understand what the client needs and turn it into a well designed and functional website.</p>
           <h2>HERE ARE SOME OF MY EXPERTISE:</h2>
           {expertises.map(expertise => (
        <div className="column" key={expertise.id}>
          <h3>{ expertise.title }</h3>
          <p>{ expertise.body }</p>
        </div>
      ))}
        </div>
     );
}
 
export default AboutMe;
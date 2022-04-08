import './App.css';
import React, {useState} from 'react';

const TimeSign = () => {
  const items = [];
  for(let i=1; i<13; i++) items.push(<span style={{"--i": i}}><b>{i}</b></span>);
  return (
    <>
      {items}
    </>
  )
};

const TimeHandrer = () => {
  const [hh, setHh] = useState(0);
  const [mm, setMm] = useState(0);
  const [ss, setSs] = useState(0);
  
  // useEffect(()=>{
  //   hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
  //   mn.style.transform = `rotateZ(${mm}deg)`;
  //   sc.style.transform = `rotateZ(${ss}deg)`;
  // })

  setInterval(()=>{
    let day = new Date();
    setHh(day.getHours()*30);
    setMm(day.getMinutes()*6);
    setSs(day.getSeconds()*6);
  }, 1000);

  return (
    <>
      <div className="circle" id="hr" style={{"--clr": "#04fc43", transform: `rotateZ(${hh+(mm/12)}deg)`}}><i></i></div>;
      <div className="circle circle2" id="mn" style={{"--clr": "#fee800", transform: `rotateZ(${mm}deg)`}}><i></i></div>;
      <div className="circle circle3" id="sc" style={{"--clr": "#ff2972", transform: `rotateZ(${ss}deg)`}}><i></i></div>;
    </>
  )
}

const App = () => {
  return (
    <div className="clock">
      <TimeSign />
      <TimeHandrer />
    </div>
  )
};

export default App;
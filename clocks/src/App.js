import './App.css';

const times = {
  position: "absolute",
  inset: "20px",
  color: "#fff",
  text_alange: "center",
  transform: "rotate(calc(30deg*ver(--i)))",
}

const App = () => (
  <div className="container">
    <div className="clock" style={times}>
      <span style={{"--i": 1}}><b>1</b></span>
      <span style={{"--i": 2}}><b>2</b></span>
      <span style={{"--i": 3}}><b>3</b></span>
      <span style={{"--i": 4}}><b>4</b></span>
      <span style={{"--i": 5}}><b>5</b></span>  
      <span style={{"--i": 6}}><b>6</b></span>  
      <span style={{"--i": 7}}><b>7</b></span>  
      <span style={{"--i": 8}}><b>8</b></span>  
      <span style={{"--i": 9}}><b>9</b></span>  
      <span style={{"--i": 10}}><b>10</b></span>  
      <span style={{"--i": 11}}><b>11</b></span>  
      <span style={{"--i": 12}}><b>12</b></span>  
    </div>
  </div>
)

export default App;
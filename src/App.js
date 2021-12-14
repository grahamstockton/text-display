import './App.css';
import { useState } from "react";

const pixelAlphabetPositions = {
  "A": "0110,1001,1111,1001,1001",
  "B": "1110,1001,1110,1001,1110",
  "C": "0111,1000,1000,1000,0111",
  "D": "1110,1001,1001,1001,1110",
  "E": "1111,1000,1110,1000,1111",
  "F": "1111,1000,1110,1000,1000",
  "G": "0111,1000,1011,1001,0111",
  "H": "1001,1001,1111,1001,1001",
  "I": "0100,0100,0100,0100,0100",
  "J": "0001,0001,0001,1001,0110",
  "K": "1001,1010,1100,1010,1001",
  "L": "0100,0100,0100,0100,0111",
  "M": "10001,11011,10101,10001,10001",
  "N": "1001,1101,1011,1001,1001",
  "O": "0110,1001,1001,1001,0110",
  "P": "1110,1001,1110,1000,1000",
  "Q": "0110,1001,1001,1011,0111",
  "R": "1110,1001,1110,1010,1001",
  "S": "0111,1000,0110,0001,1110",
  "T": "111,010,010,010,010",
  "U": "1001,1001,1001,1001,1111",
  "V": "101,101,101,101,010",
  "W": "10001,10001,10001,10101,01010",
  "X": "101,101,010,101,101",
  "Y": "101,101,111,010,010",
  "Z": "1111,0001,0010,0100,1111",
  "!": "1,1,1,0,1",
  "?": "110,001,110,000,100",
  ".": "0,0,0,0,1",
  " ": "0,0,0,0,0"
}

function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomPosition() {
  return {
    "--starting-x": Math.floor(Math.random()*2001) - 1000 + "%",
    "--starting-y": Math.floor(Math.random()*2001) - 1000 + "%"
  }
}

function getCharacterDiv(chr) {
  if (!pixelAlphabetPositions.hasOwnProperty(chr)) { chr = " "; }
  const color1 = {"background-color": randomColor()};
  const color2 = {"background-color": randomColor()};

  return (
    <div className="vertical-container">
      {
        pixelAlphabetPositions[chr].split(',').map( (row) => {
          return (
           <div class="horizontal-container">
            {row.split("").map((pixel) => {
              return (
                <div className="pixel" style={Object.assign({}, pixel === "1" ? color1 : color2, randomPosition())}></div>
              )
            })}
           </div> 
          )
          })
      }
    </div>
  );
}

function getDisplay(str) {
  return (
    <div className="display-container">
      {str.toUpperCase().split("").map((char) => getCharacterDiv(char))}
    </div>
  );
}

function App() {
  // hook for getting input box value
  const [displayText, setDisplayText] = useState('');

  return (
    <div>
      <form className="input-box">
        <button type="submit" disabled style={{"display": "none"}} aria-hidden="true"></button>
        <input id="inputbox" onChange={(e) => setDisplayText(e.target.value)} type="text" placeholder="Type something"></input>
      </form>
      {getDisplay(displayText)}
    </div>
  );
}

export default App;


import Header from './components/header/header.js';
import Body from './components/body/body.js';
import './App.css';
import React,{useState, useEffect} from 'react';

export const appDataTransfer= React.createContext()

function App() {
  const [width, setWidth] =useState("");
  const [height, setHeight] =useState("");

  useEffect(()=>{
    function changeWidth(){
      setWidth(window.innerWidth)
   
    }

    window.addEventListener('resize',changeWidth);

    changeWidth()
  },[width])

  useEffect(()=>{
    function changeHeight(){
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize',changeHeight)
    changeHeight()
  },[height])

  return (
    <appDataTransfer.Provider value={{width,height}}>
      <div className="App" style={{width:`${width}px`,height:`${height}px`}}>
        <Header />
        <Body />
      </div>
    </appDataTransfer.Provider>
  );
}

export default App;

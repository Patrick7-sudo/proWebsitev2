
// import Header from './components/header/header.js';
// import Body from './components/body/body.js';
// import style from './App.module.css';
import React,{useState, useEffect} from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import WelcomePage from './components/combine.js';
import Mainpage from './components/mainpage/mainpage.js';

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
    <BrowserRouter>
      <appDataTransfer.Provider value={{ width, height }}>
        {/* <div
            className={style.app}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <div className={style.headerPosition}>
              <Header />
            </div>
            <div className={style.bodyPosition}>
              <Body />
            </div>

          </div> */}
        <Routes>
          <Route path="*" element={<WelcomePage />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </appDataTransfer.Provider>
    </BrowserRouter>
  );
}

export default App;

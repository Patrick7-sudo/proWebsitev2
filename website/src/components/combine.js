import React, { useState, useEffect } from "react";
import style from '../App.module.css'
import Header from "./header/header.js"; 

import Body from "./body/body.js"

function WelcomePage() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    function changeWidth() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    changeWidth();
  }, [width]);

  useEffect(() => {
    function changeHeight() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", changeHeight);
    changeHeight();
  }, [height]);
  return (
    <div
      className={style.app}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className={style.headerPosition}>
        <Header />
      </div>
      <div className={style.bodyPosition}>
        <Body />
      </div>
    </div>
  );
}

export default WelcomePage;

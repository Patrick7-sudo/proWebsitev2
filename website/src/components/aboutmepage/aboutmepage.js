import HeaderMain from "../headerforMain/headerMain";
import {useState,useEffect} from "react";
import style from "./aboutmepage.module.css"

function Aboutmepage(){
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
      <div style={{ width: `${width};`, height: `${height}` }}>
        <div className={style.headerContainer}>
          <HeaderMain pageName={"About Me"}/>
        </div>
      </div>
    );
}

export default Aboutmepage;
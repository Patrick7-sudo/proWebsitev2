import { useState, useEffect } from "react";
import MainBody from "../bodymain/bodymain";
import HeaderMain from "../headerforMain/headerMain";
import style from "./projectspage.module.css";
import { projects } from "../../projectList";

function Projectspage() {
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
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <div className={style.headerContainer}>
        <HeaderMain pageName={"Projects"} />
      </div>
      <div className={style.bodyContainer}>
        <MainBody projects={projects}/>
      </div>
    </div>
  );
}

export default Projectspage;
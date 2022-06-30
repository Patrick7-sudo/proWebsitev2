import style from "./body.module.css"
import{useState, useEffect} from "react"
import profile from "../../logo1.svg"
import {techStack} from "../../techstake.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch} from "@fortawesome/fontawesome-free-solid";

function Body(){

    const [width, setWidth]=useState("");
    const [toggle, setToggle] =useState(false);
   

    function toggling(){
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
        console.log(toggle)
    }
    
    function outsideToggling(){
        if(toggle){
            setToggle(false)
        }
    }
    
    useEffect(()=>{
        function dynamicWidth(){
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', dynamicWidth)
        dynamicWidth()
    },[width]);

    return (
      <div className={style.mainBodyContainer} style={{ width: `${width}px` }} onClick={()=>{outsideToggling()}}>
        <div className={style.mainContainer}>
          <img src={profile} alt="logo"></img>

          <div className={style.inputField} onClick={()=>toggling()}>
            <div className={style.inputfieldContainer}>
              <div className={style.inputfieldItem}>
                <FontAwesomeIcon icon={faSearch} className={style.faIconStyle}/>
                <p>Get to Know Me</p>
              </div>
              {toggle? 
              <div className={style.optionsHolder} 
              >
                <a href="/">About Me</a>
                <a href="/">Projects</a>
              </div>:null}
              
            </div>
          </div>

          {/* tech-stack logo */}
          <div className={style.techStackContainer}>
            <div className={style.techStackHeader}>
              <p>Current Tech-Tools</p>
            </div>

            <div className={style.techStackImage}>
              {techStack.map((input, index) => {
                return (
                  <div className={style.techStackcicle} key={index}>
                    <a href={input.address} target="_blank" rel="noreferrer">
                      <img src={input.img} alt={input.alt}></img>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          {/* end of tech-stack logo */}
        </div>
      </div>
    );
}

export default Body;
import style from "./body.module.css"
import{useState, useEffect} from "react"
import profile from "../../logo1.svg"
import {techStack} from "../../techstake.js"

function Body(){

    const [width, setWidth]=useState("");
    
    useEffect(()=>{
        function dynamicWidth(){
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', dynamicWidth)
        dynamicWidth()
    },[width]);

    return (
      <div className={style.mainBodyContainer} style={{ width: `${width}px` }}>
        <div className={style.mainContainer}>
          <img src={profile} alt="logo"></img>

          <div className={style.inputField}>
            <h1>input field</h1>
          </div>

          <div className={style.techStackContainer}>
            <div className={style.techStackHeader}>
              <p>Current Tech-Stack</p>
            </div>
            <div className={style.techStackImage}>
            {techStack.map((input,index)=>{

                return (
                  <div className={style.techStackcicle} key={index}>
                    <a href={input.address} target="_blank" rel="noreferrer">
                      <img src={input.img} alt={input.alt}></img>
                    </a>
                  </div>
                );
                
                })  

            }
            </div>
          </div>
        </div>
      </div>
    );
}

export default Body;
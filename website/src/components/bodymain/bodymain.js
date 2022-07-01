import style from "./bodymain.module.css";
// import {useState} from "react";



function MainBody(projects){
    // const [arrayLength,setArrayLength] =useState(projects)

    // console.log(arrayLength)
    
    const theLength = projects.projects.length;
    console.log(theLength);
    return (
      <div className={style.mainBodyContainer}>
        <div className={style.resultNumberContainer}>
          <p>
            About {theLength} {theLength< 2 ? "result" : "results"}
          </p>
        </div>
        <div className={style.contentContainer}>
        {projects.projects.map((input,index)=>{
            return (
              <div className={style.content} key={index}>
                <p className={style.contentlinkShown}>{input.link} - {input.status}</p>
                <a href={input.link} target="_blank" rel="noreferrer">
                  {input.tagline}
                </a>
                <p className={style.contentDesc}>{input.desc}</p>
              </div>
            );
        })}
          
        </div>
      </div>
    );
}
export default MainBody;
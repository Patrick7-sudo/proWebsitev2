import style from "./headerMain.module.css";
import profilePic from "../../ProfilePic.png";
import profile from "../../logo1.svg";
import { Link } from "react-router-dom";
import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/fontawesome-free-solid";

function HeaderMain({pageName}){

     const [toggle, setToggle] = useState(false);
     

     function toggling() {
       if (toggle) {
         setToggle(false);
       } else {
         setToggle(true);
       }
       console.log(toggle);
     }

     function mouseOut(){
       if(toggle){
         setToggle(false)
       }
     }

    return (
      <div className={style.headerContainer}>
        {/* right container */}
        <div className={style.headerContainerLeft}>
          {/* logo container */}
          <div className={style.logoContainer}>
            <Link to="/" className={style.linkLogoContainer}>
              <img src={profile} alt="logo"></img>
            </Link>
          </div>
          {/* End of logo container */}

          {/* placeHolder and social media container */}
          <div className={style.optionsContainer}>
            <div
              className={style.optionsBoxContainer}
              onMouseLeave={() => mouseOut()}
            >
              <div className={style.inputField} onClick={() => toggling()}>
                <div className={style.inputfieldContainer}>
                  <div className={style.inputfieldItem}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={style.faIconStyle}
                    />
                    <p>{pageName}</p>
                  </div>
                  {toggle ? (
                    <div className={style.optionsHolder}>
                      <Link to="/aboutmepage">About Me</Link>

                      <Link to="/projectspage">Projects</Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div className={style.socialMediaContainer}>
              <a
                href="https://www.linkedin.com/in/tasniim-bari-3b25001aa/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>

              <a
                href="https://github.com/tasniimbari"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          {/* end of placeHolder and social media container */}
        </div>
        {/* end of right container */}
        {/* left container */}
        <div className={style.headerContainerRight}>
          {/* profilePicHolder */}
          <div className={style.profilePicHolder}>
            <div className={style.profilePicCircleOuter}>
              <div className={style.profilePicCircleInner}>
                <img src={profilePic} alt="profile" />
              </div>
            </div>
          </div>
          {/* End of profilePicHolder */}
        </div>
        {/* end of left container */}
      </div>
    );
}

export default HeaderMain;
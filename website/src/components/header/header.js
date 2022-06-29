import style from "./header.module.css"
// import { appDataTransfer } from "../../App";
import {useState,useEffect} from "react";
import profilePic from "../../ProfilePic.png"

function Header(){
    // const data = useContext(appDataTransfer);


    const [width,setWidth]= useState("");
    const [toggleburgermenu, setToggleburgermenu] =useState(true);
    console.log(width)
    function togglingBurgerMenu(){
        if(toggleburgermenu){
            setToggleburgermenu(false)
        }else{
            setToggleburgermenu(true)
        }
    }

    // useEffect(()=>{
    //     setWidth(data.width)

        
    // },[data])

    useEffect(() => {
      function changeWidth() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", changeWidth);

      changeWidth();
    }, [width]);

    useEffect(()=>{
        if(width>600){
          setToggleburgermenu(true)
        }
    },[width])
 
 
    return (
      <div
        className={style.mainHeaderComponents}
        style={{ width: `${width}px`}}
      >
        {/* menu section for social media */}
        <div className={style.menuBarHolder}>
          {/* menu section burger logo */}
          <div
            className={style.toggleHolder}
            onClick={() => togglingBurgerMenu()}
          >
            <div
              className={`${
                toggleburgermenu
                  ? style.togglelineCloseRight
                  : style.togglelineOpenRight
              }`}
            ></div>
            <div
              className={`${
                toggleburgermenu
                  ? style.togglelineCloseCenter
                  : style.togglelineOpenCenter
              }`}
            ></div>
            <div
              className={`${
                toggleburgermenu
                  ? style.togglelineCloseLeft
                  : style.togglelineOpenLeft
              }`}
            ></div>
          </div>
          {/* End of menu section burger logo */}

          {/* menu section social media links container */}
          <div
            className={`${style.contactBoxHolder} ${
              width < 600 ? style.display : style.showDisplay
            }`}
          >
            {/* menu section social media links  */}
            <div
              className={style.logoContactHolder}
              style={{
                height: `${toggleburgermenu ? "0px" : `${100}px`}`,
              }}
            >
              {/* menu section social media links */}
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
          {/* End of menu section social media links */}
        </div>
        {/* End of menu section dor social media */}

        {/* picture icon section*/}
        <div className={style.profilePicHolder}>
          <div className={style.profilePicCircleOuter}>
            <div className={style.profilePicCircleInner}>
              <img src={profilePic} alt="profile" />
            </div>
          </div>
        </div>
        {/* end of picture icon section */}
      </div>
    );
}

export default Header;

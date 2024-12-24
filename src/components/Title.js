import React from "react";
import "./Title.css";
const Title = ({title})=>{
    return(
        <div className="d-flex align-items-center">
        <span className="shape"></span>
        <h4 className="ms-2">{title}</h4>
      </div>
    )
}

export default Title;
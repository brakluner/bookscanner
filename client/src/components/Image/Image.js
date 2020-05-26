import React from "react";

function Image(props) {

    return (
        <img src={props.imageLinks} alt={props.title} className="img-fluid" style={{ margin: "0 auto" }}>
             
        </img> 
    );
  }


export default Image;
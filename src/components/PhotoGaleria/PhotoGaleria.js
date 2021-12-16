import React, {useState} from "react";
import './PhotoGaleria.css';

function PhotoGaleria(props) {

  return (
          <div className="photos" >
                <div className="photos__title" > {props.title} </div>
            
                <div className="photos__container" > 
                {props.photo.map(item => (
                    <img className="photo_img" src={item}   />
                ))}                  
                </div>
               
          </div>
  );
}

export default PhotoGaleria;
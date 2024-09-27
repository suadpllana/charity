import React from "react";

const Card = ({name, donation, image, location, logo}) => {
  return (

      <div className="card bg-dark text-white " >
        <img src={image ? image : ""} className="card-img-top h-50" alt={name} />
        <div className="card-body">
            <div className="flex-body">
            <h5 className="card-title"><img className="logo" src={logo ? logo : ""} alt="" /> {name ? name : ""}</h5>
          <p className="card-text">
           {location ? location : ""}
          </p>
          <a target="_blank" href={donation ? donation : ""} className="btn btn-success">
          Donate here
          </a>
            </div>
        
        </div>
      </div>
  
  );
};

export default Card;

import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../icon/chevron-left.svg";


function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Cela vous ramène à la page précédente
  };
  return (
   
      <button className="back-button" onClick={handleBack}>
        <BackIcon className="icon" alt="back"/>
      </button>
    
  );
}

export default BackButton;

import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Cela vous ramène à la page précédente
  };
  return (
   
      <button className="back-button" onClick={handleBack}>
        <img src="/icon/chevron-left.svg" alt="back" className="icon" />
      </button>
    
  );
}

export default BackButton;

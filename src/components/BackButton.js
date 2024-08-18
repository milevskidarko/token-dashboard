import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.scss";
const BackButton = ({ setIsConnected }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
    setIsConnected(false);
  };

  return (
    <button onClick={handleBack} className="back-button">
      Back
    </button>
  );
};

export default BackButton;

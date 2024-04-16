import React from "react";
import './Logout.scss';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout, setOpenLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="logout">
      <span className="body-small-400 logout__profile" onClick={() => {
        setOpenLogout(false);
        navigate("/profile")
      }}
      >profile</span>
      <span className="body-small-400 logout__profile" onClick={onLogout}>logout</span>
    </div>
  );
}

export default Logout;

import React from 'react'
import './Capsule.css'

const Capsule = ({ title, Icon }) => {
  return (
    <button className="capsule">
        {Icon && <Icon className="icon" />} 
        {/* <i className="icon"><{Icon}/></i> */}
        <span>{title}</span>
    </button>
  );
};

export default Capsule;

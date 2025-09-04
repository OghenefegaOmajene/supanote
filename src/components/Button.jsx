import React from "react";

const Button = ({ title, Icon, onClick }) => {
  return (
    <button onClick={onClick} className="gradient-btn">
      <span>{title}</span>
      {Icon && <Icon className="icon" />}
    </button>
  );
};

export default Button;

// Inline CSS (in the same file)
const styles = `
.gradient-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  background: #0d0d0d;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  border: 0;
  transition: all 0.3s ease;
}

.gradient-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  padding: 1px; /* border thickness */
  background: linear-gradient(90deg, #ab3cfa, #a93dee, #fb4bc8);
  -webkit-mask: 
    linear-gradient(#fff 0 0) content-box, 
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.gradient-btn:hover {
  background: #1a1a1a;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.6);
}

.gradient-btn .icon {
  width: 16px;
  height: 16px;
}
`;

// Inject styles into the document (so you don't need a separate CSS file)
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

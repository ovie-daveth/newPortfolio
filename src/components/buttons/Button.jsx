import React from 'react';

const Button = ({ title, customstyle, style, onClick }) => {
  const buttonStyles = {
    filled: {
      backgroundColor: 'green', // Add your filled button styles here
      color: 'white',
      borderRadius: '5px',
    },
    outline: {
      border: '2px solid green', // Add your outline button styles here
      color: 'green',
      borderRadius: '5px',
    },

    // Add more custom styles here if needed
  };

  return (
    <div className="block">
      <button style={{ ...buttonStyles[customstyle], ...style}} onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;

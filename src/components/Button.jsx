import React from "react";

function Button({ history }) {
  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <button onClick={() => handleBackButton()}>
      <span>Back</span>
    </button>
  );
}

export default Button;

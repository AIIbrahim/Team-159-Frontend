import React from "react";
import './Button.css'

function App({text, type, customClass}) {
  return (
    <button type={type} className={`btn btn-default btn-${type} ${customClass}`}>
      {text}
    </button>
  );
}

export default App;

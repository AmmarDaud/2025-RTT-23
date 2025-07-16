import { useState } from "react";
import ColorInput from "./Colorinput";

function ColorPicker(){
    const[ color,setColor]=useState("white")
    const handleColorChange = (newcolor) => {
        setColor(newcolor)
    }
  return (
    <div>
      <h2>Color Picker</h2>
      <ColorInput onColorChange={handleColorChange} />

      <div style={{ backgroundColor: color }}>

      Current Color: {color}
    </div>
    </div>
  );
}

export default ColorPicker;
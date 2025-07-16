

function ColorInput({ onColorChange }) {
  return (
    <>
      <label htmlFor="color-input">Color Input: </label>
      <input 
        type="text" 
        name="color-input" 
        onChange={(e) => onColorChange(e.target.value)}
        />
    </>
  );
}

export default ColorInput;
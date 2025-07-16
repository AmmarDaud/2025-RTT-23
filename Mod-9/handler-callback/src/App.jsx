import ShowHideMessage from "./components/ShowHideMessage"
import ColorInput from "./components/Colorinput";
import ColorPicker from "./components/ColorPicker"
import './App.css'

function App() {

  return (
    <>
    <div className="m-[5]">
      <h1 className="text_center test-5xl font-bold mb-20">Reatc State"</h1>

      <ShowHideMessage />

      <hr className = "my-10" />

     <ColorPicker/> 
     </div>
    </>
  )
}

export default App

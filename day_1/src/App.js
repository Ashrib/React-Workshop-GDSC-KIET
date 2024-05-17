import CustomText from "./components/CustomText";
import './App.css';
import { useState } from "react";
import ImgOne from './assets/img1.gif'
import ImgTwo from './assets/img2.gif'

function App() {

  const [isSaved, setIsSaved] = useState(false);

  const saveTheBuilding = () => {
    setIsSaved(true);
  }

  return (
    <div className="App">
      <img src={isSaved ? ImgTwo : ImgOne} />
      <br/>
      <button onClick={saveTheBuilding}>Save the building</button>
    </div>
  );
}

export default App;

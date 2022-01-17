import './App.css';
import StarRating from './StarRating';
import { useState, useRef, useEffect } from "react"
import colorData from './color-data.json';
import ColorList from './ColorList'


function App() {
  const [colors, setColors] = useState(colorData);
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);


  return (
    <>
    <input ref={ref}></input>
    <ColorList 
    colors={colors} 
    onRemoveColor={id=>{
      const newColors = colors.filter(color =>color.id !== id);
      console.log(newColors);
      setColors(newColors);
    }}
    />
    </>
  );

  {/*
  return (

    <div className="App">
      <StarRating totalStars={10}
        style={{ backgroundColor: 'lightblue' }}
        onDoubleClick={e=>alert('double clicked')}
      />
    </div>
  );
*/}
}

export default App;

// why react hook needed?
import './App.css'


let num =15
function App() {
const counter = ()=>{
//  console.log("clicked",Math.random());
num =num+1;
}

  return (
    <>

        <h3>Counter App :{num}</h3>

        <button onClick={counter}>Increment</button>
        
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';


function App() {
  const [count, setCount] = useState();
  const[stop,setStop]=useState(1)
const Pauze=()=>{
  setStop(0)
}
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount(count + stop), 1000);
    } else {
      setCount('Times up');
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(10)}> start </button>
      <button onClick={Pauze}> pauze </button>
    </>)
}
  // const [Value,setValue]=useState()
  //   const[Text,setText]=useState()
  // const handleClick=()=>{
  //   if(Text==="Random Number"){
  //     setText("Hello World");
  //   }
  //   else if(Text==="Hello World"){
  //     setText("Say Your Name");
  //   }else if(Text==="Say Your Name"){
  //     setText("Am John");
  //   }else if(Text==="Am John"){
  //     setText("Welcome");
  //   }else if (Text==="Welcome"){
  //     setText("Thank You");
  //   }else{
  //     setText("Random Number")
  //   }
    // if(Value===(0)){
    //   setValue("hello")
    // }
 
//   return (
// <React.Fragment>
//   {/* <h1>{Value}</h1>
//   <button type='button' className='btn' onClick={handleClick}>Enter</button> */}
//   <SenderInput/>
// </React.Fragment>
//   );
// }

export default App

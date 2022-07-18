// import { useEffect, useState } from "react"

// function SenderInput(){
//     const time = 20;
//     const [count, setCount] = useState(time);
//     const [isStart, setIsStart] = useState(false);
  
  
//       useEffect(() => {
//         if (isStart) {
//           const timer = setInterval(() => {
//             if (count > 0) {
//               setCount(count - 1)
//             } else {
//               setCount('Times up');
//               clearInterval(timer);
//             }
//           }, 1000);
//         }
//       }, [isStart]);
  
  
//     return (
//       <div className="App">
//         <div>{count}</div>
//         <button onClick={() => setIsStart(true)}> start </button>
//         <button> pauze </button>
//       </div>
//     );
//   }
    // const time=20
    // const[count,setCount]=useState(time)
    // const[isStart,setIsStart]=useState(false)
    // useEffect(()=>{
    //     if(Start){
    //         const timer=setInterval(()=>{
    //             if(count > 0){
    //                 setCount(count-1)
    //             }else{
    //                 setCount('times up');
    //                 clearInterval(timer)
    //             }
    //         })
    //     }[isStart]
    // })
    // const[Value,setValue]=useState()
    // const[Display,setDisplay]=useState(false)
    // const DeleteClick=()=>{
    //     setDisplay(!Display)
    // }
    // const onChange=(event)=>{
    //    setValue(event.target.value) 
    // }
// return(
//     <div>
//         <div>{Display && Value}</div>
//         <input onChange={onChange}/>
//         <button type="button" className="btn" onClick={DeleteClick}>Submit</button>
//     </div>
// )
// return(
// <div>
// <div>{count}</div>
// <button onClick={[]=setIsStart(true)}>Start</button>
// <button>Pauze</button>
// </div>
// // )
// export default SenderInput
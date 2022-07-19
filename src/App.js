
import React, { useState} from 'react';
function App(){
  const [Value,setValue]=useState()
    const[Text,setText]=useState()
  const handleClick=()=>{

    if(Text==="Random Number"){
      setText("Hello World");

    } else if(Text==="Hello World"){
      setText("Say Your Name");
    }else if(Text==="Say Your Name"){
      setText("Am John");
    }else if(Text==="Am John"){
      setText("Welcome");
    }else if (Text==="Welcome"){
      setText("Thank You");
    }else{
      setText("Random Number")
    }
  }
  return (
<React.Fragment>
  <h1>{Text}</h1>
  <button type='button' className='btn' onClick={handleClick}>Enter</button>
  {/* <SenderInput/> */}
</React.Fragment>
  );
}

export default App

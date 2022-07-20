
import React, { useState} from 'react';
export default function App(){
  const[resourceType,setResourceType]=useState("post")
  return(
    <>
       <hi>{resourceType}</hi>
    <div>
      <button onClick={()=>setResourceType("post")}>post</button>
      <button onClick={()=>setResourceType("edit")}>edit</button>
      <button onClick={()=>setResourceType("comment")}>comment</button>
      <button onClick={()=>setResourceType("share")}>share</button>
      <button onClick={()=>setResourceType("Mark")}>Mark</button>
      <button onClick={()=>setResourceType("unMark")}>unMark</button>
      <button onClick={()=>setResourceType("Display")}>Display</button>
      <button onClick={()=>setResourceType("Zoom")}>Zoom</button>
      <button onClick={()=>setResourceType("Like")}>Like</button>
      <button onClick={()=>setResourceType("unLike")}>unLike</button>
    </div>
 
    </>
  )
}

import { useState } from "preact/hooks";

interface Video
{
    name: string
    url: string
    country:string 

}

export default function Videoprops(props:Video) {
   
   const [name, setName] = useState("hi");
  // setName( "I love you")
    return (
      <div>
          <video src={props.url} controls/>
          <h1> {props.country}</h1>
             <button onClick={()=>{
          //   console.log("hiii")
            
          //   alert(props.name +"  "+props.country+" "+name)
            setName("wang qinghua")
            setName("zheng wenjie")
            alert(name)
             }}>client click </button>
      
      
      
      </div>
    );
  }


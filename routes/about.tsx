import Comment from "../islands/comment.tsx";
import Ip from "../islands/Ip.tsx";
import Message from "../islands/Message.tsx";
import Video from "../islands/Video.tsx";
import { ww } from "../communication/toggle.ts";


ww.toggle("light.hall_closet_ceiling_light")
export default function about(){
    
    const url:string="https://ewr1.vultrobjects.com/movie/togo_2019___5e03d73138765.mp4"
    console.log(url)
    function hi(){
      alert("say hihi")
    }

    

   return (
   <div>
   <h1>about </h1>
   <button>click </button>
     
      
     {/* <video controls
     src="https://ewr1.vultrobjects.com/movie/togo_2019___5e03d73138765.mp4" type ="video/mp4">

     </video> */}

      <Video url={url}  country = "The USA" name="togo"></Video>
      <button ></button>
    
      <Comment></Comment>

      <Message></Message>
      <Ip></Ip>
     </div>
     
 )


}
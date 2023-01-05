
import { getNetworkAddr } from 'https://deno.land/x/local_ip/mod.ts';
import { getIPLocation } from "https://deno.land/x/ip_location/mod.ts";
import { Button } from '../components/Button.tsx';

//const myip = await getNetworkAddr(); // 192.168.0.17

//let myip:string | undefined
// getNetworkAddr().then(data=>
//    {console.log(data)
//      myip = data    
// }
// )
let lo:string

export default function Ip() {


     return(

      <div>
      
       {lo}
       
     
        <button onClick={()=>{
        //  getIPLocation("24.80.168.30").then(d=>{
        //   alert(d)
        //   alert("hiii")
        //  })
       
         alert("wolfffff")

        }}>get ip</button>
      </div>
     
    )


}
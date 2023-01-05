// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
 
// const accountSid = "AC0d271a4d0c2864e6d9c29ee08d84f41d";
// const authToken = "33545e0f43fed2fbf16df50df20ead96";
// import tw from "npm:twilio";
//  const client = tw(accountSid, authToken)


// client.messages
//     .create({
//        body: 'Happy Bew Year',
//        from: '+16048006902',
//        to: '+16048033632'
//      })
//     .then(message => console.log(message.sid));

    
// function sendM(){
//     client.messages
//     .create({
//        body: 'Happy Bew Year',
//        from: '+16048006902',
//        to: '+16048033632'
//      })
//     .then(message => console.log(message.sid));

//     }
const wqh = {
    name:"wang qighua",
    age:53,
    send:()=>{
        alert(wqh.name)
        alert(susan.name)
        function say(){
          
        }
    },
      
    rec:()=>{
        alert("hi")
    },

    
   
    

}

const susan ={
    name:"susan",
    age:24,
    receive:()=>{
        console.log(wqh.age)
    }

} 

interface Person{
     name: string
    show:(name:string,age:number)=>string
}


const s1 :Person={
    
    name :"wejie",
    show:(name,age)=>{
          alert(s1.name)
        return "hello"
    }
}
class Person1{

    name?:string
    display(){
       alert(wqh.name)
       alert(this.name)

    }
}
export default function Message(){
   
    
     return (
       <div>
          
        <button >send message</button>
       
       
       </div>
     );
   }
 
 
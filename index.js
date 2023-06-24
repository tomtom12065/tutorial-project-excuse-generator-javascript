window.onload=()=>{
   let excuse = document.querySelector(
    "#excuse")
   
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
 excuse.innerHTML = generator(who,action,what,when)

}
let generator=(who, action,what,when)=>{
    let getran=(myarray)=>{
        return myarray[Math.floor(Math.random()*myarray.length)]
    }
return `${getran(who)} ${getran(action)} ${getran(what)} ${getran(when)}`
}
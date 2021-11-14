/**
 * @name Mock
 * @version 0.0.1
 * @description Mock People
 * @author Archer2305#7678
 *   
 */



 module.exports = class mock{
     
    load() { }
    start() {


setInterval(function() { //set the code to repeat without pausing discord itself.
   var a= document.querySelector("span[data-slate-string]");
    if(a!=null||a!=undefined){
       var UserTyping= document.querySelector("span[data-slate-string]").textContent 
    //get what the user is typing 

if(UserTyping.startsWith("|mock")&& UserTyping.charAt(UserTyping.length-1)=="|" ){ //check if the user has typed the proper syntax 
var cache=[UserTyping.length-1] // convert into ThE mOcK cAsE
let NewMessage=UserTyping;
NewMessage=NewMessage.replace("|mock ","")
NewMessage=NewMessage.replace("|","")
for(var i=0;i<NewMessage.length;i++){
if(i%2==0){
cache[i]=NewMessage.charAt(i).toLocaleUpperCase()
} else cache[i]= NewMessage.charAt(i).toLocaleLowerCase()
}
NewMessage=cache.join("");

 document.querySelector("span[data-slate-string]").textContent=NewMessage // set the text bar to the new string 
}
    }
},300);// repeat every 300 miliseconds 


}
stop(){

}
}


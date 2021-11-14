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


setInterval(function() {
   var a= document.querySelector("span[data-slate-string]");
    if(a!=null||a!=undefined){
       var UserTyping= document.querySelector("span[data-slate-string]").textContent 
    

if(UserTyping.startsWith("|mock")&& UserTyping.charAt(UserTyping.length-1)=="|" ){
var cache=[UserTyping.length-1]
let NewMessage=UserTyping;
NewMessage=NewMessage.replace("|mock ","")
NewMessage=NewMessage.replace("|","")
for(var i=0;i<NewMessage.length;i++){
if(i%2==0){
cache[i]=NewMessage.charAt(i).toLocaleUpperCase()
} else cache[i]= NewMessage.charAt(i).toLocaleLowerCase()
}
NewMessage=cache.join("");

 document.querySelector("span[data-slate-string]").textContent=NewMessage
}
    }
},300);


}
stop(){

}
}


/**
 * @name MenuExample
 * @version 0.0.1
 * @description Example Description
 * @author Archer2305 
 *  
 */



 module.exports = class MenuExample{
     
    load() { }
    start() {   
setInterval(function() {    
   var a= document.querySelector("span[data-slate-string]");
    if(a!=null||a!=undefined){
       var UserTyping= document.querySelector("span[data-slate-string]").textContent 
    }
if(UserTyping.startsWith("|menu")) {
BdApi.alert("hello World!");
 document.querySelector("span[data-slate-string]").textContent =" ";//this is to prevent it from spamming alerts without stop
 UserTyping=" "//just to be safe we are also resseting UserTyping.
}


 
stop()

 },300);
 }
 }

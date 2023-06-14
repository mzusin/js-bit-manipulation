/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>(r>>>0).toString(2),n=r=>(r&1)===0,o=r=>(r&1)===1,u=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},b=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},s=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var i=r=>r&1,p=r=>r>>1,x=r=>r|1,g=r=>r&-2;export{u as divideBy2,s as equals,t as getBinaryString,i as getLSB,n as isEven,o as isOdd,b as multiplyBy2,p as removeLSB,x as setLSB,g as unsetLSB};

/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>(r&1)===0,n=r=>(r&1)===1,o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},u=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},b=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var m=r=>r&1,i=r=>r>>1,p=r=>r|1,x=r=>r&-2;export{o as divideBy2,b as equals,m as getLSB,t as isEven,n as isOdd,u as multiplyBy2,i as removeLSB,p as setLSB,x as unsetLSB};

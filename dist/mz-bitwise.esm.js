/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},n=r=>(r&1)===0,o=r=>(r&1)===1,u=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},s=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},b=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var i=r=>r&1,p=r=>r>>1,x=r=>r|1,g=r=>r&-2;var a=r=>r<0?1:0,B=r=>r|2147483648;export{u as divideBy2,b as equals,t as getBinaryString,i as getLSB,a as getMSB,n as isEven,o as isOdd,s as multiplyBy2,p as removeLSB,x as setLSB,B as setMSB,g as unsetLSB};

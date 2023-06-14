/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var i=(r,e)=>{for(var n in e)o(r,n,{get:e[n],enumerable:!0})},p=(r,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of s(e))!m.call(r,t)&&t!==n&&o(r,t,{get:()=>e[t],enumerable:!(u=b(e,t))||u.enumerable});return r};var x=r=>p(o({},"__esModule",{value:!0}),r);var E={};i(E,{divideBy2:()=>I,equals:()=>w,getLSB:()=>B,isEven:()=>c,isOdd:()=>g,multiplyBy2:()=>a,removeLSB:()=>f,setLSB:()=>l,unsetLSB:()=>d});module.exports=x(E);var c=r=>(r&1)===0,g=r=>(r&1)===1,I=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},a=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},w=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var B=r=>r&1,f=r=>r>>1,l=r=>r|1,d=r=>r&-2;0&&(module.exports={divideBy2,equals,getLSB,isEven,isOdd,multiplyBy2,removeLSB,setLSB,unsetLSB});

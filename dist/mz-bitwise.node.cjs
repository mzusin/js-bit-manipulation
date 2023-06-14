/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var i=(r,e)=>{for(var n in e)o(r,n,{get:e[n],enumerable:!0})},p=(r,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of b(e))!m.call(r,t)&&t!==n&&o(r,t,{get:()=>e[t],enumerable:!(u=s(e,t))||u.enumerable});return r};var x=r=>p(o({},"__esModule",{value:!0}),r);var h={};i(h,{divideBy2:()=>B,equals:()=>w,getBinaryString:()=>g,getLSB:()=>S,getMSB:()=>N,isEven:()=>c,isOdd:()=>a,multiplyBy2:()=>I,removeLSB:()=>f,setLSB:()=>l,setMSB:()=>d,unsetLSB:()=>E});module.exports=x(h);var g=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},c=r=>(r&1)===0,a=r=>(r&1)===1,B=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},I=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},w=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var S=r=>r&1,f=r=>r>>1,l=r=>r|1,E=r=>r&-2;var N=r=>r<0?1:0,d=r=>r|2147483648;0&&(module.exports={divideBy2,equals,getBinaryString,getLSB,getMSB,isEven,isOdd,multiplyBy2,removeLSB,setLSB,setMSB,unsetLSB});

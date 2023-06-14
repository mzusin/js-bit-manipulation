/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var i=(r,e)=>{for(var n in e)o(r,n,{get:e[n],enumerable:!0})},p=(r,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of s(e))!m.call(r,t)&&t!==n&&o(r,t,{get:()=>e[t],enumerable:!(u=b(e,t))||u.enumerable});return r};var g=r=>p(o({},"__esModule",{value:!0}),r);var d={};i(d,{divideBy2:()=>a,equals:()=>B,getBinaryString:()=>x,getLSB:()=>f,getMSB:()=>N,isEven:()=>c,isOdd:()=>I,multiplyBy2:()=>w,removeLSB:()=>S,setLSB:()=>l,unsetLSB:()=>E});module.exports=g(d);var x=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},c=r=>(r&1)===0,I=r=>(r&1)===1,a=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},w=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},B=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var f=r=>r&1,S=r=>r>>1,l=r=>r|1,E=r=>r&-2;var N=r=>r<0?1:0;0&&(module.exports={divideBy2,equals,getBinaryString,getLSB,getMSB,isEven,isOdd,multiplyBy2,removeLSB,setLSB,unsetLSB});

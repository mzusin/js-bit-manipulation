/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var p=(r,e)=>{for(var n in e)o(r,n,{get:e[n],enumerable:!0})},i=(r,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of b(e))!m.call(r,t)&&t!==n&&o(r,t,{get:()=>e[t],enumerable:!(u=s(e,t))||u.enumerable});return r};var x=r=>i(o({},"__esModule",{value:!0}),r);var h={};p(h,{convertToUInt32:()=>w,divideBy2:()=>B,equals:()=>S,getBinaryString:()=>c,getLSB:()=>f,getMSB:()=>E,isEven:()=>g,isOdd:()=>a,multiplyBy2:()=>I,removeLSB:()=>F,setLSB:()=>M,setMSB:()=>N,unsetLSB:()=>l,unsetMSB:()=>d});module.exports=x(h);var c=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},g=r=>(r&1)===0,a=r=>(r&1)===1,B=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},I=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},S=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0},w=r=>r>>>0;var f=r=>r&1,F=r=>r>>1,M=r=>r|1,l=r=>r&-2;var E=r=>r<0?1:0,N=r=>r|2147483648,d=r=>r&2147483647;0&&(module.exports={convertToUInt32,divideBy2,equals,getBinaryString,getLSB,getMSB,isEven,isOdd,multiplyBy2,removeLSB,setLSB,setMSB,unsetLSB,unsetMSB});

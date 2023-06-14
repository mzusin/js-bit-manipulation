/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var p=(r,e)=>{for(var n in e)o(r,n,{get:e[n],enumerable:!0})},i=(r,e,n,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of b(e))!m.call(r,t)&&t!==n&&o(r,t,{get:()=>e[t],enumerable:!(u=s(e,t))||u.enumerable});return r};var x=r=>i(o({},"__esModule",{value:!0}),r);var h={};p(h,{convertToUInt32:()=>B,divideBy2:()=>g,getBinaryString:()=>c,getLSB:()=>I,getMSB:()=>F,isEquals:()=>d,isEven:()=>l,isOdd:()=>N,multiplyBy2:()=>a,removeLSB:()=>S,setLSB:()=>f,setMSB:()=>M,unsetLSB:()=>w,unsetMSB:()=>E});module.exports=x(h);var c=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},g=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},a=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},B=r=>r>>>0;var I=r=>r&1,S=r=>r>>1,f=r=>r|1,w=r=>r&-2;var F=r=>r<0?1:0,M=r=>r|2147483648,E=r=>r&2147483647;var l=r=>(r&1)===0,N=r=>(r&1)===1,d=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};0&&(module.exports={convertToUInt32,divideBy2,getBinaryString,getLSB,getMSB,isEquals,isEven,isOdd,multiplyBy2,removeLSB,setLSB,setMSB,unsetLSB,unsetMSB});

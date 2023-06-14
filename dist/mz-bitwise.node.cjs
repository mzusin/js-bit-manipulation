/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var p=(e,o)=>{for(var n in o)t(e,n,{get:o[n],enumerable:!0})},x=(e,o,n,b)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of u(o))!m.call(e,r)&&r!==n&&t(e,r,{get:()=>o[r],enumerable:!(b=s(o,r))||b.enumerable});return e};var a=e=>x(t({},"__esModule",{value:!0}),e);var i={};p(i,{isEven:()=>c,isOdd:()=>d});module.exports=a(i);var c=e=>(e&1)===0,d=e=>(e&1)===1;0&&(module.exports={isEven,isOdd});

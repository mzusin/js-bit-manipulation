/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},s=r=>parseInt(r,2),u=r=>r>>>0,b=(r,e)=>(r^=e,e^=r,r^=e,[r,e]),i=(r,e)=>(r|e)-(r&e);var p=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},c=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<e},x=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},a=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>e},g=r=>~r+1,n=(r,e)=>{for(;e!==0;){let t=r&e;r=r^e,e=t<<1}return r},B=(r,e)=>(e=~e+1,n(r,e)),w=(r,e)=>{let t=0;for(;e!==0;)(e&1)===1&&(t=n(t,r)),e>>=1,r<<=1;return t};var I=r=>r&1,f=r=>r>>1,S=r=>r|1,y=r=>r&-2;var d=r=>r<0?1:0,h=r=>r|2147483648,k=r=>r&2147483647;var F=(r,e)=>{let t=1<<e;return r|t},M=(r,e)=>{let t=~(1<<e);return r&t},v=(r,e)=>{let t=1<<e;return r^t},P=r=>~r,A=(r,e)=>{let t=1<<e;return(r&t)!==0};var q=r=>(r&1)===0,O=r=>(r&1)===1,T=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};export{n as addition,u as convertToUInt32,x as divideBy2,a as divideBy2PowerN,o as getBinaryString,I as getLSB,d as getMSB,P as invertBits,A as isBitSetAtPosition,T as isEquals,q as isEven,O as isOdd,w as multiplication,p as multiplyBy2,c as multiplyBy2PowerN,s as parseBinaryString,f as removeLSB,F as setBitAtPosition,S as setLSB,h as setMSB,B as subtraction,b as swap,v as toggleBitAtPosition,g as toggleSign,M as unsetBitAtPosition,y as unsetLSB,k as unsetMSB,i as xor};

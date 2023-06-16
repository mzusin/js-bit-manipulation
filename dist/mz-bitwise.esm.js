/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},n=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},u=r=>r>>>0,s=r=>~r+1;var m=r=>r&1,p=r=>r>>1,i=r=>r|1,x=r=>r&-2;var g=r=>r<0?1:0,a=r=>r|2147483648,B=r=>r&2147483647;var S=r=>(r&1)===0,f=r=>(r&1)===1,w=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};export{u as convertToUInt32,n as divideBy2,t as getBinaryString,m as getLSB,g as getMSB,w as isEquals,S as isEven,f as isOdd,o as multiplyBy2,p as removeLSB,i as setLSB,a as setMSB,s as toggleSign,x as unsetLSB,B as unsetMSB};

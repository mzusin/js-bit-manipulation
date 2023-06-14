/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},n=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},u=r=>r>>>0;var b=r=>r&1,m=r=>r>>1,p=r=>r|1,i=r=>r&-2;var c=r=>r<0?1:0,g=r=>r|2147483648,a=r=>r&2147483647;var I=r=>(r&1)===0,S=r=>(r&1)===1,f=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};export{u as convertToUInt32,n as divideBy2,t as getBinaryString,b as getLSB,c as getMSB,f as isEquals,I as isEven,S as isOdd,o as multiplyBy2,m as removeLSB,p as setLSB,g as setMSB,i as unsetLSB,a as unsetMSB};

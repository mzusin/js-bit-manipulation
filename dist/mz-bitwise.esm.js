/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},n=r=>r>>>0;var u=r=>r&1,s=r=>r>>1,b=r=>r|1,m=r=>r&-2;var i=r=>r<0?1:0,x=r=>r|2147483648,c=r=>r&2147483647;var a=r=>(r&1)===0,B=r=>(r&1)===1,I=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var f=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},w=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},F=r=>~r+1;export{n as convertToUInt32,f as divideBy2,t as getBinaryString,u as getLSB,i as getMSB,I as isEquals,a as isEven,B as isOdd,w as multiplyBy2,s as removeLSB,b as setLSB,x as setMSB,F as toggleSign,m as unsetLSB,c as unsetMSB};

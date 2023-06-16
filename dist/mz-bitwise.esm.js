/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var t=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},n=r=>r>>>0;var u=r=>r&1,s=r=>r>>1,b=r=>r|1,m=r=>r&-2;var p=r=>r<0?1:0,x=r=>r|2147483648,g=r=>r&2147483647;var a=r=>(r&1)===0,w=r=>(r&1)===1,I=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};var f=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},S=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>e},N=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},l=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<e},E=r=>~r+1;export{n as convertToUInt32,f as divideBy2,S as divideBy2PowerN,t as getBinaryString,u as getLSB,p as getMSB,I as isEquals,a as isEven,w as isOdd,N as multiplyBy2,l as multiplyBy2PowerN,s as removeLSB,b as setLSB,x as setMSB,E as toggleSign,m as unsetLSB,g as unsetMSB};

/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var n=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},o=r=>parseInt(r,2),u=r=>r>>>0;var m=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},b=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<e},i=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},p=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>e},x=r=>~r+1;var g=r=>r&1,a=r=>r>>1,B=r=>r|1,I=r=>r&-2;var f=r=>r<0?1:0,S=r=>r|2147483648,l=r=>r&2147483647;var k=(r,e)=>{let t=1<<e;return r|t},y=(r,e)=>{let t=~(1<<e);return r&t},E=(r,e)=>{let t=1<<e;return r^t},F=r=>~r,M=(r,e)=>{let t=1<<e;return(r&t)!==0};var h=r=>(r&1)===0,v=r=>(r&1)===1,P=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};export{u as convertToUInt32,i as divideBy2,p as divideBy2PowerN,n as getBinaryString,g as getLSB,f as getMSB,F as invertBits,M as isBitSetAtPosition,P as isEquals,h as isEven,v as isOdd,m as multiplyBy2,b as multiplyBy2PowerN,o as parseBinaryString,a as removeLSB,k as setBitAtPosition,B as setLSB,S as setMSB,E as toggleBitAtPosition,x as toggleSign,y as unsetBitAtPosition,I as unsetLSB,l as unsetMSB};

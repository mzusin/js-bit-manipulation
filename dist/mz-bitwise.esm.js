/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},s=r=>parseInt(r,2),u=r=>r>>>0,b=(r,e)=>(r^=e,e^=r,r^=e,[r,e]),i=(r,e)=>(r|e)-(r&e);var m=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},c=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<e},x=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},g=(r,e)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>e},a=r=>~r+1,n=(r,e)=>{for(;e!==0;){let t=r&e;r=r^e,e=t<<1}return r},B=(r,e)=>(e=~e+1,n(r,e)),l=(r,e)=>{let t=0;for(;e!==0;)(e&1)===1&&(t=n(t,r)),e>>=1,r<<=1;return t};var f=r=>r&1,I=r=>r>>1,S=r=>r|1,h=r=>r&-2,y=r=>r^1;var d=r=>r<0?1:0,k=r=>r|2147483648,E=r=>r&2147483647;var M=(r,e)=>{let t=1<<e;return r|t},v=(r,e)=>{let t=~(1<<e);return r&t},P=(r,e)=>{let t=1<<e;return r^t},L=r=>~r,A=(r,e)=>{let t=1<<e;return(r&t)!==0},U=r=>{let e=0;for(;r>0;)e+=r&1,r>>=1;return e},q=r=>{if(r===0)return 1;let e=0;for(;r>0;)r&1||e++,r>>=1;return e};var T=r=>(r&1)===0,j=r=>(r&1)===1,z=(r,e)=>{if(!Number.isInteger(r)||!Number.isInteger(e))throw new Error("Input must be an integer.");return(r^e)===0};export{n as addition,u as convertToUInt32,U as countSetBits,q as countUnsetBits,x as divideBy2,g as divideBy2PowerN,o as getBinaryString,f as getLSB,d as getMSB,L as invertBits,A as isBitSetAtPosition,z as isEquals,T as isEven,j as isOdd,l as multiplication,m as multiplyBy2,c as multiplyBy2PowerN,s as parseBinaryString,I as removeLSB,M as setBitAtPosition,S as setLSB,k as setMSB,B as subtraction,b as swap,P as toggleBitAtPosition,y as toggleLSB,a as toggleSign,v as unsetBitAtPosition,h as unsetLSB,E as unsetMSB,i as xor};

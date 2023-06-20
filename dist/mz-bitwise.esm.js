/* 
Bit Manipulation in JavaScript v1.0.0
A collection of bit manipulation helpers written TypeScript.
https://github.com/mzusin/js-bit-manipulation
MIT License      
Copyright (c) 2023-present, Miriam Zusin       
*/
var o=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return(r>>>0).toString(2)},s=r=>parseInt(r,2),u=r=>r>>>0,b=(r,t)=>(r^=t,t^=r,r^=t,[r,t]),i=(r,t)=>(r|t)-(r&t);var c=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<1},m=(r,t)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r<<t},x=r=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>1},F=(r,t)=>{if(!Number.isInteger(r))throw new Error("Input must be an integer.");return r>>t},g=r=>~r+1,n=(r,t)=>{for(;t!==0;){let e=r&t;r=r^t,t=e<<1}return r},a=(r,t)=>(t=~t+1,n(r,t)),B=(r,t)=>{let e=0;for(;t!==0;)(t&1)===1&&(e=n(e,r)),t>>=1,r<<=1;return e};var w=r=>r&1,l=r=>r>>1,f=r=>r|1,I=r=>r&-2,M=r=>r^1;var E=r=>r<0?1:0,A=r=>r|2147483648,N=r=>r&2147483647;var y=(r,t)=>{let e=1<<t;return r|e},L=(r,t)=>{let e=~(1<<t);return r&e},d=(r,t)=>{let e=1<<t;return r^e},_=r=>~r,v=(r,t)=>{let e=1<<t;return(r&e)!==0},P=r=>{let t=0;for(;r>0;)t+=r&1,r>>=1;return t},K=r=>{if(r===0)return 1;let t=0;for(;r>0;)r&1||t++,r>>=1;return t};var C=r=>(r&1)===0,U=r=>(r&1)===1,q=(r,t)=>{if(!Number.isInteger(r)||!Number.isInteger(t))throw new Error("Input must be an integer.");return(r^t)===0};var j=1,z=2147483648,D=4294967295,G=4294967294,H=2147483647,J=r=>{if(r<=0)throw new Error("Input must be > 0.");return(1<<r)-1};export{D as ALL_BITS_SET_MASK,G as CLSB_MASK,H as CMSB_MASK,j as LSB_MASK,z as MSB_MASK,n as addition,u as convertToUInt32,P as countSetBits,K as countUnsetBits,x as divideBy2,F as divideBy2PowerN,o as getBinaryString,w as getLSB,E as getMSB,J as getNSetBitsMask,_ as invertBits,v as isBitSetAtPosition,q as isEquals,C as isEven,U as isOdd,B as multiplication,c as multiplyBy2,m as multiplyBy2PowerN,s as parseBinaryString,l as removeLSB,y as setBitAtPosition,f as setLSB,A as setMSB,a as subtraction,b as swap,d as toggleBitAtPosition,M as toggleLSB,g as toggleSign,L as unsetBitAtPosition,I as unsetLSB,N as unsetMSB,i as xor};

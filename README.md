# Bit Manipulation in JavaScript
A collection of bit manipulation helpers written in TypeScript.

This repository is intended for learning bit manipulation in JavaScript/TypeScript.
You are welcome to check the [source code](https://github.com/mzusin/js-bit-manipulation/tree/main/src/core) of each function and the [unit tests](https://github.com/mzusin/js-bit-manipulation/tree/main/test).

-------------
## Points
- JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on **32 bits binary numbers**.
- Before a bitwise operation is performed, JavaScript converts numbers to **32 bits signed integers**.
- After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.

-------------

## Functions List
- `export const getBinaryString: (num: number) => string;`
- `export const convertToUInt32: (num: number) => number;`
- `export const divideBy2: (num: number) => number;`
- `export const multiplyBy2: (num: number) => number;`

## Predicates
- `export const isEven: (num: number) => boolean;`
- `export const isOdd: (num: number) => boolean;`
- `export const isEquals: (num1: number, num2: number) => boolean;`

## Least Significant Bit (LSB)
- `export const getLSB: (num: number) => number;`
- `export const removeLSB: (num: number) => number;`
- `export const setLSB: (num: number) => number;`
- `export const unsetLSB: (num: number) => number;`

## Most Significant Bit (MSB)
- `export const getMSB: (num: number) => number;`
- `export const setMSB: (num: number) => number;`
- `export const unsetMSB: (num: number) => number;`

``` 
       (                      (    (         
   (   )\ )  *   )  (  (      )\ ) )\ )      
 ( )\ (()/(` )  /(  )\))(   '(()/((()/( (    
 )((_) /(_))( )(_))((_)()\ )  /(_))/(_)))\   
((_)_ (_)) (_(_()) _(())\_)()(_)) (_)) ((_)  
 | _ )|_ _||_   _| \ \((_)/ /|_ _|/ __|| __| 
 | _ \ | |   | |    \ \/\/ /  | | \__ \| _|  
 |___/|___|  |_|     \_/\_/  |___||___/|___| 
```  
































































































































































































































































































































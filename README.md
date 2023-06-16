# 🌟 Bit Manipulation in JavaScript 🌟
A collection of bit manipulation helpers written in TypeScript.

This repository is intended for learning bit manipulation in JavaScript/TypeScript.
You are welcome to check the [source code](https://github.com/mzusin/js-bit-manipulation/tree/main/src/core) of each function and the [unit tests](https://github.com/mzusin/js-bit-manipulation/tree/main/test).

## Table of Contents
- [Points](#points-)
- [Functions List](#functions-list-️)
- [Predicates](#predicates-)
- [Least Significant Bit (LSB)](#least-significant-bit-lsb-)
- [Most Significant Bit (MSB)](#most-significant-bit-msb-)
- [Practice Problems](#practice-problems)

## Points 📌
- [Two's Complement Format](https://github.com/mzusin/js-bit-manipulation/blob/main/README/Two's%20Complement%20Format.md)
- [AND/OR properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/AND-OR.md)
- [XOR properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/XOR.md)
- [NOT properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/NOT.md)

## Functions List ✍️
- `export const getBinaryString: (num: number) => string;`
- `export const parseBinaryString: (str: string) => number;`
- `export const convertToUInt32: (num: number) => number;`

## Math 💡
- `export const multiplyBy2: (num: number) => number;`
- `export const multiplyBy2PowerN: (num: number, n: number) => number;`
- `export const divideBy2: (num: number) => number;`
- `export const divideBy2PowerN: (num: number, n: number) => number;`
- `export const toggleSign: (num: number) => number;`

## Predicates 🔬
- `export const isEven: (num: number) => boolean;`
- `export const isOdd: (num: number) => boolean;`
- `export const isEquals: (num1: number, num2: number) => boolean;`

## Least Significant Bit (LSB) ⚗️
- `export const getLSB: (num: number) => number;`
- `export const removeLSB: (num: number) => number;`
- `export const setLSB: (num: number) => number;`
- `export const unsetLSB: (num: number) => number;`

## Most Significant Bit (MSB) 🤔
- `export const getMSB: (num: number) => number;`
- `export const setMSB: (num: number) => number;`
- `export const unsetMSB: (num: number) => number;`

## A Bit at Nth Position 🧩
- `export const setBitAtPosition: (num: number, n: number) => number;`

## Practice Problems
- [Bit Manipulation on leetcode.com](https://leetcode.com/tag/bit-manipulation/)

--------------

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
































































































































































































































































































































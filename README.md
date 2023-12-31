# 🌟 Bit Manipulation in JavaScript 🌟
A collection of bit manipulation helpers written in TypeScript.

This repository is intended for learning bit manipulation in JavaScript/TypeScript.
You are welcome to check the [source code](https://github.com/mzusin/js-bit-manipulation/tree/main/src/core) of each function and the [unit tests](https://github.com/mzusin/js-bit-manipulation/tree/main/test).

## Table of Contents
- [Points](#points-)
- [Common](#common-️)
- [Math](#math-)
- [Predicates](#predicates-)
- [Least Significant Bit (LSB)](#least-significant-bit-lsb-%EF%B8%8F)
- [Most Significant Bit (MSB)](#most-significant-bit-msb-)
- [Working with bits](#working-with-bits-)
- [Masks](#masks-)
- [Number Systems](#number-systems-)
- [Practice Problems](#practice-problems)
- [LeetCode Solutions](#leetcode-solutions)

## Points 📌
- [Two's Complement Format](https://github.com/mzusin/js-bit-manipulation/blob/main/README/Two's%20Complement%20Format.md)
- [AND/OR properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/AND-OR.md)
- [XOR properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/XOR.md)
- [NOT properties](https://github.com/mzusin/js-bit-manipulation/blob/main/README/NOT.md)

## Common ✍️
- `export const getBinaryString: (num: number) => string;`
- `export const parseBinaryString: (str: string) => number;`
- `export const convertToUInt32: (num: number) => number;`
- `export const swap: (num1: number, num2: number) => number[];`

## Math 💡
- `export const multiplyBy2: (num: number) => number;`
- `export const multiplyBy2PowerN: (num: number, n: number) => number;`
- `export const divideBy2: (num: number) => number;`
- `export const divideBy2PowerN: (num: number, n: number) => number;`
- `export const toggleSign: (num: number) => number;`
- `export const addition: (num1: number, num2: number) => number;`
- `export const subtraction: (num1: number, num2: number) => number;`
- `export const multiplication: (num1: number, num2: number) => number;`

## Predicates 🔬
- `export const isEven: (num: number) => boolean;`
- `export const isOdd: (num: number) => boolean;`
- `export const isEquals: (num1: number, num2: number) => boolean;`
- `export const isNegative: (num: number) => boolean;`
- `export const isPositive: (num: number) => boolean;`

## Least Significant Bit (LSB) ⚗️
- `export const getLSB: (num: number) => number;`
- `export const removeLSB: (num: number) => number;`
- `export const setLSB: (num: number) => number;`
- `export const unsetLSB: (num: number) => number;`
- `export const toggleLSB: (num: number) => number;`

## Most Significant Bit (MSB) 🤔
- `export const getMSB: (num: number) => number;`
- `export const setMSB: (num: number) => number;`
- `export const unsetMSB: (num: number) => number;`

## Working with bits 🧩
- `export const setBitAtPosition: (num: number, n: number) => number;`
- `export const unsetBitAtPosition: (num: number, n: number) => number;`
- `export const toggleBitAtPosition: (num: number, n: number) => number;`
- `export const isBitSetAtPosition: (num: number, n: number) => boolean;`
- `export const invertBits: (num: number) => number;`
- `export const countSetBits: (num: number) => number;`
- `export const countUnsetBits: (num: number) => number;`
- `export const getRightmostSetBit: (num: number) => number;`

## Masks 🎭
- `export const getNSetBitsMask: (n: number) => number;`

## Number Systems 🔮
- `export const binaryToHex: (num: number) => string;`

------------------------

## Practice Problems
- [Bit Manipulation on leetcode.com](https://leetcode.com/tag/bit-manipulation/)

## LeetCode Solutions
Solutions to LeetCode problems in JavaScript using bit manipulations approach only.
- [1684. Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/3646136/javascript-bit-manipulation-with-comments-9982/)
- [2220. Minimum Bit Flips to Convert Number](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/3649410/javascript-bit-manipulation/)
- [338. Counting Bits](https://leetcode.com/problems/counting-bits/solutions/3657019/javascript-bit-manipulation/)
- [461. Hamming Distance](https://leetcode.com/problems/hamming-distance/solutions/3660282/javascript-bit-manipulation/)
- [136. Single Number](https://leetcode.com/problems/single-number/solutions/2007647/javascript-xor/)
- [476. Number Complement](https://leetcode.com/problems/number-complement/solutions/3660762/javascript-99-42/)
- [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/solutions/3665456/javascript-3-solutions/)
- [405. Convert a Number to Hexadecimal](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/3673530/javascript-bit-manipulation/)
- [342. Power of Four](https://leetcode.com/problems/power-of-four/solutions/3673730/javascript-math-bit-manipulation-solutions/)

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
































































































































































































































































































































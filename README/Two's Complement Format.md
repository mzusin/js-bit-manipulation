# Two's Complement Format

- JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on **32 bits binary numbers**.
- Before a bitwise operation is performed, JavaScript converts numbers to **32 bits signed integers**.
- After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
- JavaScript binary numbers are stored in [two's complement format](https://en.wikipedia.org/wiki/Two%27s_complement). 
- This means that `-num = ~(num - 1)`.
- When [the most significant (MSB)](https://en.wikipedia.org/wiki/Most_significant_bit) bit is **1**, the number is signed as **negative**; and when the most significant bit is **0** the number is signed as **positive**.
- **4294967295 = Math.pow(2, 32) - 1** is the highest **unsigned int** that represents **-1** in two's complement notation.

## `0 === ~(-1)`
* 0   in binary is 00000000000000000000000000000000
* -1 in binary is 11111111111111111111111111111111 (4294967295)

## `1 === ~(-2)`
* 1 in binary is 00000000000000000000000000000001
* -2 in binary is 11111111111111111111111111111110
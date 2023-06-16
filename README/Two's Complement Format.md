# Two's Complement Format

- JavaScript binary numbers are stored in [two's complement format](https://en.wikipedia.org/wiki/Two%27s_complement). 
- This means that `-num = ~(num - 1)`.

## `0 === ~(-1)`
* 0   in binary is 00000000000000000000000000000000
* -1 in binary is 11111111111111111111111111111111

## `1 === ~(-2)`
* 1 in binary is 00000000000000000000000000000001
* -2 in binary is 11111111111111111111111111111110
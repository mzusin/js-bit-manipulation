/**
 * Get the most significant bit.
 * JavaScript uses two's complement representation --->
 * - Negative numbers have the leftmost bit as 1.
 * - Non-negative numbers have the leftmost bit as 0.
 */
export const getMSB = (num: number) : number => {
    return (num < 0) ? 1 : 0;
};

/**
 * ----------------- 1 -------------------
 * We create a mask that has the MSB set to 1 and all other bits set to 0.
 * We then use the bitwise OR operator (|) to perform a bitwise OR operation
 * between the input number num and the msbMask.
 * This operation will set the MSB of the number to 1,
 * regardless of the current value of the MSB.
 * ----------------- 2 -------------------
 * 0x = hexadecimal
 * 0b = binary
 * ----------------- 3 -------------------
 * The maximum 32-bit integer that can be represented is (2^31 - 1) = 2147483647
 * The minimum integer is -(2^31) = -2147483648
 */
export const setMSB = (num: number) => {
    const msbMask = 0x80000000; // 0b10000000000000000000000000000000
    return num | msbMask;
};

/**
 * We create a mask called that has the MSB unset (set to 0) and all other bits set to 1.
 * We then use the bitwise AND operator (&) to perform a bitwise AND operation between the input number num and the msbMask.
 * This operation will unset the MSB of the number by turning off the corresponding bit,
 * while leaving all other bits unchanged.
 */
export const unsetMSB = (num: number) => {
    const msbMask = 0x7FFFFFFF; // 0b01111111111111111111111111111111
    return num & msbMask; // 0x7FFF;
};
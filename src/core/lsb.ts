/**
 * Get the least significant bit.
 */
export const getLSB = (num: number) => {
    return (num & 1);
};

/**
 * Remove the least significant bit.
 */
export const removeLSB = (num: number) => {
    return (num >> 1);
};

export const setLSB = (num: number) => {
    return num | 1;
};

/**
 * --------------- 1 ------------------
 * The bitwise NOT operator (~) is used to create a mask
 * with all bits set to 1, except for the LSB which is set to 0.
 * It converts it to '11111111111111111111111111111110'
 * We can see it in the console using: ((~1) >>> 0).toString(2)
 * --------------- 2 ------------------
 * Performing a bitwise AND operation (&) between the input number and the mask
 * clears the LSB, resulting in the desired output.
 */
export const unsetLSB = (num: number) => {
    return num & ~1;
};
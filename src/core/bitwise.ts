/**
 * It works only for integer numbers.
 */
export const getBinaryString = (num: number) => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return (num >>> 0).toString(2);
};

/**
 * 1. All even numbers have their least significant bit (LSB) as 0.
 * 2. 0 AND 1 = 0
 */
export const isEven = (num: number) : boolean  => {
    return (num & 1) === 0;
};

/**
 * 1. All odd numbers have their LSB as 1.
 * 2. 1 AND 1 = 1
 */
export const isOdd = (num: number) : boolean  => {
    return (num & 1) === 1;
};

/**
 * It works only for integer numbers.
 */
export const divideBy2 = (num: number) : number => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return num >> 1; // we can also use >>>
};

/**
 * It works only for integer numbers.
 */
export const multiplyBy2 = (num: number) : number => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return num << 1;
};

/**
 * It works only for integer numbers.
 */
export const equals = (num1: number, num2: number) => {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        throw new Error('Input must be an integer.');
    }

    return (num1 ^ num2) === 0;
};

/**
 * This function converts a given number to an unsigned 32-bit integer representation.
 * `>>> 0` forces the input number to be treated as a 32-bit unsigned integer.
 * By applying the `>>> 0` operation, the function effectively discards any sign bit information
 * and ensures that the resulting value is a positive integer within the range of 0 to 2^32 - 1 (inclusive).
 */
export const convertToUInt32 = (num: number) => {
    return num >>> 0;
};

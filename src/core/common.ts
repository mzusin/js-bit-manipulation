/**
 * It works only for integer numbers.
 */
export const getBinaryString = (num: number) => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return (num >>> 0).toString(2);
};

export const parseBinaryString = (str: string) : number => {
    return parseInt(str, 2);
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

/**
 * [a, b] = swap(a, b);
 */
export const swap = (num1: number, num2: number) => {
    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;
    return [num1, num2];

    /*
    OR:
    ----------------------
    a = a + b; // a+b, b
    b = a - b; // a+b, a+b-b=a
    a = a - b; // a+b-a=b
     */
};

export const xor = (num1: number, num2: number) => {
    return (num1 | num2) - (num1 & num2);
    // return (num1 | num2) & (~num1 | ~num2);
    // return (num1 & (~num1)) | ((~num1) & num1);
    // return (num1 + num2 - (2 * (num1 & num2)));
};

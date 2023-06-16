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

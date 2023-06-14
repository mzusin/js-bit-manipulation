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
export const setBitAtPosition = (num: number, n: number) => {
    const mask = 1 << n; // Create a mask with the nth bit set to 1
    return num | mask; // Set the nth bit in num to 1
};

export const unsetBitAtPosition = (num: number, n: number) => {
    const mask = ~(1 << n); // Create a mask with the nth bit set to 0 and all other bits set to 1
    return num & mask; // Clear the nth bit in num
};

export const toggleBitAtPosition = (num: number, n: number) => {
    const mask = 1 << n; // Create a mask with the nth bit set to 1 and all other bits set to 0
    return num ^ mask; // Toggle the nth bit in num
};

/**
 * Invert (flip) every bit of a number.
 */
export const invertBits = (num: number) => {
    return ~num;
};

export const isBitSetAtPosition = (num: number, n: number) => {
    const mask = 1 << n; // Create a mask with only the nth bit set to 1
    return (num & mask) !== 0; // Check if the bitwise AND result is non-zero
};

export const countSetBits = (num: number) => {
    let count = 0;

    while(num > 0){
        count += num & 1;
        num >>= 1;
    }

    return count;
};

export const countUnsetBits = (num: number) => {
    if(num === 0) return 1;

    let count = 0;

    while(num > 0){
        if((num & 1) === 0) count ++;
        num >>= 1;
    }

    return count;
};

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

/**
 * Unset the rightmost set bit to 0
 * and set all the bits to the right of it to 1.
 */
export const unsetRightmostSetBitAndSetAllNextBits = (num: number) => {
    return num - 1;
};

/**
 * (A - 1): Subtracting 1 from A flips the rightmost set bit of A to 0 and
 * flips all the bits to the right of it to 1.
 * For example, if A is 10101010, (A - 1) would be 10101001.
 *
 * ~(A - 1): The ~ operator is the bitwise NOT operator,
 * which flips all the bits in the number.
 * So ~(A - 1) flips the bits in (A - 1).
 *
 * A & ~(A - 1): The & operator is the bitwise AND operator,
 * which performs a bitwise AND operation on the bits of A and ~(A - 1).
 * The result is a number that has only the rightmost set bit of A remaining,
 * and all other bits are set to 0.
 * This effectively isolates the rightmost set bit of A.
 */
export const getRightmostSetBit = (num: number) => {
    return num & ~(num - 1);
};

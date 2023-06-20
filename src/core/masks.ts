/**
 * Least Significant Bit (LSB) Mask
 * This mask has the least significant bit set to 1 and all other bits set to 0.
 * It is used to isolate the least significant bit of a number.
 */
export const LSB_MASK = 0b1; // or 0x1

/**
 * Most Significant Bit (MSB) Mask
 * This mask has the most significant bit set to 1 and all other bits set to 0.
 * It is used to isolate the most significant bit of a number.
 */
export const MSB_MASK = 0x80000000; // or 0b10000000000000000000000000000000

/**
 * All Bits Set Mask
 * This mask has all bits set to 1.
 * It is used to set multiple bits of a number to 1 or to check if all bits are set to 1.
 */
export const ALL_BITS_SET_MASK = 0xFFFFFFFF; // or 0b11111111111111111111111111111111

/**
 * Clear Least Significant Bit (CLSB) Mask
 * This mask has all bits set to 1 except for the least significant bit,
 * which is set to 0. It is used to clear (unset) the least significant bit of a number.
 */
export const CLSB_MASK = 0xFFFFFFFE; // or 0b11111111111111111111111111111110

/**
 * Clear Most Significant Bit (CMSB) Mask
 * This mask has all bits set to 1 except for the most significant bit,
 * which is set to 0. It is used to clear (unset) the most significant bit of a number.
 */
export const CMSB_MASK = 0x7FFFFFFF; // or 0b01111111111111111111111111111111

/**
 * This function create a mask that contains N '1' bits.
 * getNSetBitsMask(1) ---> 1
 * getNSetBitsMask(2) ---> 11
 * getNSetBitsMask(5) ---> 11111
 * etc.
 */
export const getNSetBitsMask = (n: number) => {
    if(n <= 0) {
        throw new Error('Input must be > 0.');
    }

    return (1 << n) - 1;
};

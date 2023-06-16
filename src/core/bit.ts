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
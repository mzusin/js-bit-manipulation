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
 * num * (2 ** n)
 */
export const multiplyBy2PowerN = (num: number, n: number) : number => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return num << n;
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
 * num / (2 ** n)
 */
export const divideBy2PowerN = (num: number, n: number) : number => {
    if (!Number.isInteger(num)) {
        throw new Error('Input must be an integer.');
    }

    return num >> n; // we can also use >>>
};


/**
 * Covert positive number to negative, or negative number to positive.
 * Two's Complement Format: `-num = ~(num - 1)`
 */
export const toggleSign = (num: number) => {
    return (~num) + 1;
};

export const addition = (num1: number, num2: number) => {
    while (num2 !== 0) {
        const carry = num1 & num2; // Calculate the carry bits
        num1 = num1 ^ num2; // Perform the bitwise addition without carry
        num2 = carry << 1; // Left shift the carry to the next position
    }
    return num1;
};

export const subtraction = (num1: number, num2: number) => {
    // Perform two's complement of num2
    num2 = ~num2 + 1;

    // Perform addition of num1 and the two's complement of num2
    return addition(num1, num2);
};

export const multiplication = (num1: number, num2: number) => {
    let result = 0;

    while (num2 !== 0) {
        // If the least significant bit of num2 is 1, add num1 to the result
        if ((num2 & 1) === 1) {
            result = addition(result, num1);
        }

        // Right shift num2 by 1 bit
        num2 >>= 1;

        // Left shift num1 by 1 bit
        num1 <<= 1;
    }

    return result;
};

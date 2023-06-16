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

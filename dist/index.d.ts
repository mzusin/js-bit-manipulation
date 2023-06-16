declare module 'mz-bitwise' {
    export const getBinaryString: (num: number) => string;
    export const convertToUInt32: (num: number) => number;

    // Math
    export const divideBy2: (num: number) => number;
    export const multiplyBy2: (num: number) => number;
    export const toggleSign: (num: number) => number;
    export const multiplyBy2PowerN: (num: number, n: number) => number;
    export const divideBy2PowerN: (num: number, n: number) => number;

    // Predicates
    export const isEven: (num: number) => boolean;
    export const isOdd: (num: number) => boolean;
    export const isEquals: (num1: number, num2: number) => boolean;

    // Least Significant Bit (LSB)
    export const getLSB: (num: number) => number;
    export const removeLSB: (num: number) => number;
    export const setLSB: (num: number) => number;
    export const unsetLSB: (num: number) => number;

    // Most Significant Bit (MSB)
    export const getMSB: (num: number) => number;
    export const setMSB: (num: number) => number;
    export const unsetMSB: (num: number) => number;

    // Bit
    export const setBitAtPosition: (num: number, n: number) => number;
}
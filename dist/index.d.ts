declare module 'mz-bitwise' {
    export const getBinaryString: (num: number) => string;
    export const parseBinaryString: (str: string) => number;
    export const convertToUInt32: (num: number) => number;
    export const swap: (num1: number, num2: number) => number[];

    // Math
    export const divideBy2: (num: number) => number;
    export const multiplyBy2: (num: number) => number;
    export const toggleSign: (num: number) => number;
    export const multiplyBy2PowerN: (num: number, n: number) => number;
    export const divideBy2PowerN: (num: number, n: number) => number;
    export const addition: (num1: number, num2: number) => number;
    export const subtraction: (num1: number, num2: number) => number;
    export const multiplication: (num1: number, num2: number) => number;

    // Predicates
    export const isEven: (num: number) => boolean;
    export const isOdd: (num: number) => boolean;
    export const isEquals: (num1: number, num2: number) => boolean;
    export const isNegative: (num: number) => boolean;
    export const isPositive: (num: number) => boolean;

    // Least Significant Bit (LSB)
    export const getLSB: (num: number) => number;
    export const removeLSB: (num: number) => number;
    export const setLSB: (num: number) => number;
    export const unsetLSB: (num: number) => number;
    export const toggleLSB: (num: number) => number;

    // Most Significant Bit (MSB)
    export const getMSB: (num: number) => number;
    export const setMSB: (num: number) => number;
    export const unsetMSB: (num: number) => number;

    // Bit
    export const setBitAtPosition: (num: number, n: number) => number;
    export const unsetBitAtPosition: (num: number, n: number) => number;
    export const toggleBitAtPosition: (num: number, n: number) => number;
    export const invertBits: (num: number) => number;
    export const isBitSetAtPosition: (num: number, n: number) => boolean;
    export const countSetBits: (num: number) => number;
    export const countUnsetBits: (num: number) => number;

    // String
    export const getCharCodeSmallEn: (text: string, index: number) => number;
    export const getCharCodeCapitalEn: (text: string, index: number) => number;

    // Masks
    export const getNSetBitsMask: (n: number) => number;

    // Number Systems
    export const binaryToHex: (num: number) => string;
}
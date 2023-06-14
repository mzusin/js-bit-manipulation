declare module 'mz-bitwise' {
    export const isEven: (num: number) => boolean;
    export const isOdd: (num: number) => boolean;
    export const divideBy2: (num: number) => number;
    export const multiplyBy2: (num: number) => number;

    // Least Significant Bit (LSB)
    export const getLSB: (num: number) => number;
    export const removeLSB: (num: number) => number;
    export const setLSB: (num: number) => number;
    export const unsetLSB: (num: number) => number;
}
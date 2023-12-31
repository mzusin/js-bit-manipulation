import { getBinaryString, parseBinaryString, convertToUInt32, swap, xor } from '../src/core/common';

describe('Common', () => {

    describe('getBinaryString()', () => {
        it('returns the correct binary string for positive numbers', () => {
            expect(getBinaryString(0)).toBe('0');
            expect(getBinaryString(1)).toBe('1');
            expect(getBinaryString(2)).toBe('10');
            expect(getBinaryString(10)).toBe('1010');
            expect(getBinaryString(255)).toBe('11111111');
        });

        it('returns the correct binary string for negative numbers', () => {
            expect(getBinaryString(-1)).toBe('11111111111111111111111111111111');
            expect(getBinaryString(-2)).toBe('11111111111111111111111111111110');
            expect(getBinaryString(-10)).toBe('11111111111111111111111111110110');
            expect(getBinaryString(-255)).toBe('11111111111111111111111100000001');
        });

        it('throws an error for non-integer input', () => {
            expect(() => getBinaryString(1.5)).toThrowError('Input must be an integer.');
            expect(() => getBinaryString(-3.8)).toThrowError('Input must be an integer.');
            expect(() => getBinaryString(NaN)).toThrowError('Input must be an integer.');
        });
    });

    describe('parseBinaryString()', () => {

        it('0 ---> 0', () => {
            expect(parseBinaryString('101010')).toEqual(42);
        });

        it('101010 ---> 42', () => {
            expect(parseBinaryString('101010')).toEqual(42);
        });

        it('11111111111111111111111111010110 ---> 4294967254', () => {
            expect(parseBinaryString('11111111111111111111111111010110')).toEqual(4294967254);
        });

        it('10102 ---> 10', () => {
            expect(parseBinaryString('10102')).toEqual(10);
        });
    });

    describe('convertToUInt32()', () => {
        it('converts positive numbers to unsigned 32-bit integers', () => {
            expect(convertToUInt32(0)).toBe(0);
            expect(convertToUInt32(1)).toBe(1);
            expect(convertToUInt32(255)).toBe(255);
            expect(convertToUInt32(1000)).toBe(1000);
            expect(convertToUInt32(2147483647)).toBe(2147483647);
        });

        it('converts negative numbers to unsigned 32-bit integers', () => {
            expect(convertToUInt32(-1)).toBe(4294967295);
            expect(convertToUInt32(-10)).toBe(4294967286);
            expect(convertToUInt32(-255)).toBe(4294967041);
            expect(convertToUInt32(-2147483648)).toBe(2147483648);
            expect(convertToUInt32(-1000)).toBe(4294966296);
        });

        it('returns the same value for zero', () => {
            expect(convertToUInt32(0)).toBe(0);
        });
    });

    describe('swap()', () => {
        it('should correctly swap two positive numbers', () => {
            const num1 = 5;
            const num2 = 10;
            const [result1, result2] = swap(num1, num2);
            expect(result1).toEqual(10);
            expect(result2).toEqual(5);
        });

        it('should correctly swap two negative numbers', () => {
            const num1 = -5;
            const num2 = -10;
            const [result1, result2] = swap(num1, num2);
            expect(result1).toEqual(-10);
            expect(result2).toEqual(-5);
        });

        it('should correctly swap a positive and a negative number', () => {
            const num1 = 5;
            const num2 = -10;
            const [result1, result2] = swap(num1, num2);
            expect(result1).toEqual(-10);
            expect(result2).toEqual(5);
        });

        it('should correctly swap two zero values', () => {
            const num1 = 0;
            const num2 = 0;
            const [result1, result2] = swap(num1, num2);
            expect(result1).toEqual(0);
            expect(result2).toEqual(0);
        });
    });


    describe('xor()', () => {
        it('0 ^ 0', () => {
            expect(xor(0, 0)).toBe(0 ^ 0);
        });

        it('0 ^ 1', () => {
            expect(xor(0, 1)).toBe(0 ^ 1);
            expect(xor(1, 0)).toBe(1 ^ 0);
        });

        it('1 ^ 1', () => {
            expect(xor(1, 1)).toBe(1 ^ 1);
        });

        it('2 ^ 3', () => {
            expect(xor(2, 3)).toBe(2 ^ 3);
        });

        it('0 ^ 5', () => {
            expect(xor(0, 5)).toBe(0 ^ 5);
        });

        it('6 ^ 9', () => {
            expect(xor(6, 9)).toBe(6 ^ 9);
        });

        it('12 ^ 0', () => {
            expect(xor(12, 0)).toBe(12 ^ 0);
        });

        it('0 ^ -3', () => {
            expect(xor(0, -3)).toBe(0 ^ -3);
        });

        it('9 ^ 12', () => {
            expect(xor(9, 12)).toBe(9 ^ 12);
        });
    });
});
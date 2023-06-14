import { divideBy2, multiplyBy2, getBinaryString, convertToUInt32 } from '../src/core/bitwise';

describe('Bitwise', () => {

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

    describe('divideBy2()', () => {
        it('returns the correct result for positive numbers', () => {
            expect(divideBy2(4)).toBe(2);
            expect(divideBy2(10)).toBe(5);
            expect(divideBy2(16)).toBe(8);
            expect(divideBy2(20)).toBe(10);
        });

        it('returns the correct result for negative numbers', () => {
            expect(divideBy2(-4)).toBe(-2);
            expect(divideBy2(-10)).toBe(-5);
            expect(divideBy2(-16)).toBe(-8);
            expect(divideBy2(-20)).toBe(-10);
        });

        it('returns 0 for 0', () => {
            expect(divideBy2(0)).toBe(0);
        });

        it('throws an error for non-integer inputs', () => {
            expect(() => divideBy2(2.5)).toThrow('Input must be an integer.');
            expect(() => divideBy2(NaN)).toThrow('Input must be an integer.');
        });
    });

    describe('multiplyBy2()', () => {
        it('returns the correct result for positive numbers', () => {
            expect(multiplyBy2(4)).toBe(8);
            expect(multiplyBy2(10)).toBe(20);
            expect(multiplyBy2(16)).toBe(32);
            expect(multiplyBy2(20)).toBe(40);
        });

        it('returns the correct result for negative numbers', () => {
            expect(multiplyBy2(-4)).toBe(-8);
            expect(multiplyBy2(-10)).toBe(-20);
            expect(multiplyBy2(-16)).toBe(-32);
            expect(multiplyBy2(-20)).toBe(-40);
        });

        it('returns 0 for 0', () => {
            expect(multiplyBy2(0)).toBe(0);
        });

        it('throws an error for non-integer inputs', () => {
            expect(() => multiplyBy2(2.5)).toThrow('Input must be an integer.');
            expect(() => multiplyBy2(NaN)).toThrow('Input must be an integer.');
        });
    });

});
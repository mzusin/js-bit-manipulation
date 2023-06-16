import { getBinaryString, convertToUInt32 } from '../src/core/common';

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

});
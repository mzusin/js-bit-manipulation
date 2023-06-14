import { getMSB } from '../src/core/msb';

describe('MSB', () => {

    describe('getMSB()', () => {
        it('returns 0 for positive numbers', () => {
            expect(getMSB(0)).toBe(0);
            expect(getMSB(1)).toBe(0);
            expect(getMSB(2)).toBe(0);
            expect(getMSB(10)).toBe(0);
            expect(getMSB(255)).toBe(0);
        });

        it('returns 1 for negative numbers', () => {
            expect(getMSB(-1)).toBe(1);
            expect(getMSB(-2)).toBe(1);
            expect(getMSB(-10)).toBe(1);
            expect(getMSB(-255)).toBe(1);
        });

        it('returns 0 for zero', () => {
            expect(getMSB(0)).toBe(0);
        });

        it('returns 0 for positive infinity', () => {
            expect(getMSB(Number.POSITIVE_INFINITY)).toBe(0);
        });

        it('returns 1 for negative infinity', () => {
            expect(getMSB(Number.NEGATIVE_INFINITY)).toBe(1);
        });

        it('returns 0 for NaN', () => {
            expect(getMSB(NaN)).toBe(0);
        });
    });

});
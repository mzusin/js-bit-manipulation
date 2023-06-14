import { getMSB, setMSB } from '../src/core/msb';

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

    describe('setMSB()', () => {
        it('sets the MSB for positive numbers', () => {
            expect(setMSB(0)).toBe(-2147483648);
            expect(setMSB(1)).toBe(-2147483647);
            expect(setMSB(10)).toBe(-2147483638);
            expect(setMSB(255)).toBe(-2147483393);
        });

        it('sets the MSB for negative numbers', () => {
            expect(setMSB(-1)).toBe(-1);
            expect(setMSB(-10)).toBe(-10);
            expect(setMSB(-255)).toBe(-255);
            expect(setMSB(-2147483648)).toBe(-2147483648);
        });

        it('does not modify the MSB for numbers with MSB already set', () => {
            expect(setMSB(-2147483647)).toBe(-2147483647);
            expect(setMSB(-2147483638)).toBe(-2147483638);
            expect(setMSB(-2147483393)).toBe(-2147483393);
            expect(setMSB(-2147482648)).toBe(-2147482648);
            expect(setMSB(2147483647)).toBe(-1);
            expect(setMSB(2147483638)).toBe(-10);
            expect(setMSB(2147483393)).toBe(-255);
            expect(setMSB(2147482648)).toBe(-1000);
        });

        it('sets the MSB for zero', () => {
            expect(setMSB(0)).toBe(-2147483648);
        });
    });

});
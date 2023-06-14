import { getLSB, removeLSB, setLSB } from '../src/core/lsb';

describe('LSB', () => {

    describe('getLSB()', () => {
        it('returns 0 for even numbers', () => {
            expect(getLSB(0)).toBe(0);
            expect(getLSB(2)).toBe(0);
            expect(getLSB(4)).toBe(0);
            expect(getLSB(10)).toBe(0);
        });

        it('returns 1 for odd numbers', () => {
            expect(getLSB(1)).toBe(1);
            expect(getLSB(3)).toBe(1);
            expect(getLSB(5)).toBe(1);
            expect(getLSB(7)).toBe(1);
        });

        it('returns 0 for negative even numbers', () => {
            expect(getLSB(-2)).toBe(0);
            expect(getLSB(-4)).toBe(0);
            expect(getLSB(-10)).toBe(0);
        });

        it('returns 1 for negative odd numbers', () => {
            expect(getLSB(-1)).toBe(1);
            expect(getLSB(-3)).toBe(1);
            expect(getLSB(-5)).toBe(1);
            expect(getLSB(-7)).toBe(1);
        });
    });

    describe('removeLSB', () => {
        it('returns 0 for 0', () => {
            expect(removeLSB(0)).toBe(0);
        });

        it('returns the expected result for positive even numbers', () => {
            expect(removeLSB(2)).toBe(1);
            expect(removeLSB(4)).toBe(2);
            expect(removeLSB(10)).toBe(5);
        });

        it('returns the expected result for positive odd numbers', () => {
            expect(removeLSB(1)).toBe(0);
            expect(removeLSB(3)).toBe(1);
            expect(removeLSB(5)).toBe(2);
            expect(removeLSB(7)).toBe(3);
        });

        it('returns the expected result for negative even numbers', () => {
            expect(removeLSB(-2)).toBe(-1);
            expect(removeLSB(-4)).toBe(-2);
            expect(removeLSB(-10)).toBe(-5);
        });

        it('returns the expected result for negative odd numbers', () => {
            expect(removeLSB(-1)).toBe(-1);
            expect(removeLSB(-3)).toBe(-2);
            expect(removeLSB(-5)).toBe(-3);
            expect(removeLSB(-7)).toBe(-4);
        });
    });

    describe('setLSB', () => {
        it('sets LSB to 1 for positive even numbers', () => {
            expect(setLSB(2)).toBe(3);
            expect(setLSB(4)).toBe(5);
            expect(setLSB(10)).toBe(11);
        });

        it('sets LSB to 1 for positive odd numbers', () => {
            expect(setLSB(1)).toBe(1);
            expect(setLSB(3)).toBe(3);
            expect(setLSB(5)).toBe(5);
            expect(setLSB(7)).toBe(7);
        });

        it('sets LSB to 1 for negative even numbers', () => {
            expect(setLSB(-2)).toBe(-1);
            expect(setLSB(-4)).toBe(-3);
            expect(setLSB(-10)).toBe(-9);
        });

        it('sets LSB to 1 for negative odd numbers', () => {
            expect(setLSB(-1)).toBe(-1);
            expect(setLSB(-3)).toBe(-3);
            expect(setLSB(-5)).toBe(-5);
            expect(setLSB(-7)).toBe(-7);
        });
    });
});
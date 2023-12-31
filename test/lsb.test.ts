import { getLSB, removeLSB, setLSB, unsetLSB, toggleLSB } from '../src/core/lsb';

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

    describe('unsetLSB', () => {
        it('unsets LSB to 0 for positive even numbers', () => {
            expect(unsetLSB(2)).toBe(2);
            expect(unsetLSB(4)).toBe(4);
            expect(unsetLSB(10)).toBe(10);
        });

        it('unsets LSB to 0 for positive odd numbers', () => {
            expect(unsetLSB(1)).toBe(0);
            expect(unsetLSB(3)).toBe(2);
            expect(unsetLSB(5)).toBe(4);
            expect(unsetLSB(7)).toBe(6);
        });

        it('unsets LSB to 0 for negative even numbers', () => {
            expect(unsetLSB(-2)).toBe(-2);
            expect(unsetLSB(-4)).toBe(-4);
            expect(unsetLSB(-10)).toBe(-10);
        });

        it('unsets LSB to 0 for negative odd numbers', () => {
            expect(unsetLSB(-1)).toBe(-2);
            expect(unsetLSB(-3)).toBe(-4);
            expect(unsetLSB(-5)).toBe(-6);
            expect(unsetLSB(-7)).toBe(-8);
        });
    });

    describe('toggleLSB', () => {
        it('should toggle the least significant bit from 0 to 1', () => {
            expect(toggleLSB(10)).toBe(11);
            expect(toggleLSB(0)).toBe(1);
            expect(toggleLSB(42)).toBe(43);
        });

        it('should toggle the least significant bit from 1 to 0', () => {
            expect(toggleLSB(11)).toBe(10);
            expect(toggleLSB(1)).toBe(0);
        });
    });
});
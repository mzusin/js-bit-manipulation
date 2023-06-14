import { isEven, isOdd, divideBy2, multiplyBy2, equals, getLSB, removeLSB } from '../src/core/bitwise';

describe('Bitwise', () => {

    describe('isEven()', () => {
        it('returns true for even numbers', () => {
            expect(isEven(0)).toBe(true);
            expect(isEven(2)).toBe(true);
            expect(isEven(4)).toBe(true);
            expect(isEven(10)).toBe(true);
            expect(isEven(-6)).toBe(true);
        });

        it('returns false for odd numbers', () => {
            expect(isEven(1)).toBe(false);
            expect(isEven(3)).toBe(false);
            expect(isEven(5)).toBe(false);
            expect(isEven(7)).toBe(false);
            expect(isEven(-9)).toBe(false);
        });
    });

    describe('isOdd()', () => {
        it('returns true for odd numbers', () => {
            expect(isOdd(1)).toBe(true);
            expect(isOdd(3)).toBe(true);
            expect(isOdd(5)).toBe(true);
            expect(isOdd(7)).toBe(true);
            expect(isOdd(-9)).toBe(true);
        });

        it('returns false for even numbers', () => {
            expect(isOdd(0)).toBe(false);
            expect(isOdd(2)).toBe(false);
            expect(isOdd(4)).toBe(false);
            expect(isOdd(10)).toBe(false);
            expect(isOdd(-6)).toBe(false);
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

    describe('equals()', () => {
        it('returns true for equal numbers', () => {
            expect(equals(0, 0)).toBe(true);
            expect(equals(2, 2)).toBe(true);
            expect(equals(-5, -5)).toBe(true);
            expect(equals(10, 10)).toBe(true);
        });

        it('returns false for unequal numbers', () => {
            expect(equals(1, 2)).toBe(false);
            expect(equals(10, -5)).toBe(false);
            expect(equals(10, 20)).toBe(false);
        });

        it('throws an error for non-integer inputs', () => {
            expect(() => equals(2.5, 2.5)).toThrow('Input must be an integer.');
            expect(() => equals(2, 2.5)).toThrow('Input must be an integer.');
            expect(() => equals(2.5, 2)).toThrow('Input must be an integer.');
        });
    });

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
});
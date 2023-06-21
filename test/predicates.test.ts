import { isEven, isOdd, isEquals, isNegative, isPositive } from '../src/core/predicates';

describe('Predicates', () => {

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

    describe('isEquals()', () => {
        it('returns true for equal numbers', () => {
            expect(isEquals(0, 0)).toBe(true);
            expect(isEquals(2, 2)).toBe(true);
            expect(isEquals(-5, -5)).toBe(true);
            expect(isEquals(10, 10)).toBe(true);
        });

        it('returns false for unequal numbers', () => {
            expect(isEquals(1, 2)).toBe(false);
            expect(isEquals(10, -5)).toBe(false);
            expect(isEquals(10, 20)).toBe(false);
        });

        it('throws an error for non-integer inputs', () => {
            expect(() => isEquals(2.5, 2.5)).toThrow('Input must be an integer.');
            expect(() => isEquals(2, 2.5)).toThrow('Input must be an integer.');
            expect(() => isEquals(2.5, 2)).toThrow('Input must be an integer.');
        });
    });

    describe('isNegative()', () => {
        it('isNegative(0)', () => {
            expect(isNegative(0)).toStrictEqual(false);
        });

        it('isNegative(1)', () => {
            expect(isNegative(1)).toStrictEqual(false);
        });

        it('isNegative(-1)', () => {
            expect(isNegative(-1)).toStrictEqual(true);
        });

        it('isNegative(-10)', () => {
            expect(isNegative(-10)).toStrictEqual(true);
        });
    });

    describe('isPositive()', () => {
        it('isPositive(0)', () => {
            expect(isPositive(0)).toStrictEqual(true);
        });

        it('isPositive(1)', () => {
            expect(isPositive(1)).toStrictEqual(true);
        });

        it('isPositive(-1)', () => {
            expect(isPositive(-1)).toStrictEqual(false);
        });

        it('isPositive(-10)', () => {
            expect(isPositive(-10)).toStrictEqual(false);
        });
    });
});
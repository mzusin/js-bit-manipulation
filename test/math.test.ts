import {
    divideBy2, multiplyBy2, toggleSign,
    multiplyBy2PowerN, divideBy2PowerN,
    addition, subtraction, multiplication,
} from '../src/core/math';

describe('Math', () => {

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

    describe('multiplyBy2PowerN()', () => {
        it('should multiply a positive number by 2 to the power of n', () => {
            const num = 5;
            const n = 3;
            const result = multiplyBy2PowerN(num, n);
            expect(result).toEqual(num * (2 ** n));
        });

        it('should multiply a negative number by 2 to the power of n', () => {
            const num = -10;
            const n = 2;
            const result = multiplyBy2PowerN(num, n);
            expect(result).toEqual(num * (2 ** n));
        });

        it('should return 0 when input number is 0', () => {
            const num = 0;
            const n = 5;
            const result = multiplyBy2PowerN(num, n);
            expect(result).toEqual(0);
        });

        it('should throw an error when input is not an integer', () => {
            const num = 5.5;
            const n = 2;
            expect(() => multiplyBy2PowerN(num, n)).toThrow('Input must be an integer.');
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

    describe('divideBy2PowerN()', () => {
        it('should divide a positive number by 2 to the power of n', () => {
            const num = 8;
            const n = 2;
            const result = divideBy2PowerN(num, n);
            expect(result).toEqual(num / (2 ** n));
        });

        it('should divide a negative number by 2 to the power of n', () => {
            const num = -16;
            const n = 3;
            const result = divideBy2PowerN(num, n);
            expect(result).toEqual(num / (2 ** n));
        });

        it('should return 0 when input number is 0', () => {
            const num = 0;
            const n = 5;
            const result = divideBy2PowerN(num, n);
            expect(result).toEqual(0);
        });

        it('should throw an error when input is not an integer', () => {
            const num = 10.5;
            const n = 2;
            expect(() => divideBy2PowerN(num, n)).toThrow('Input must be an integer.');
        });
    });

    describe('toggleSign()', () => {
        it('should convert a positive number to negative', () => {
            const num = 5;
            const result = toggleSign(num);
            expect(result).toEqual(-num);
        });

        it('should convert a negative number to positive', () => {
            const num = -10;
            const result = toggleSign(num);
            expect(result).toEqual(-num);
        });

        it('should return 0 when input is 0', () => {
            const num = 0;
            const result = toggleSign(num);
            expect(result).toEqual(0);
        });
    });

    describe('addition()', () => {
        it('should correctly add two positive numbers', () => {
            const num1 = 5;
            const num2 = 7;
            const result = addition(num1, num2);
            expect(result).toEqual(12);
        });

        it('should correctly handle zero as one of the operands', () => {
            const num1 = 0;
            const num2 = 10;
            const result = addition(num1, num2);
            expect(result).toEqual(10);
        });

        it('should correctly handle negative numbers', () => {
            const num1 = -5;
            const num2 = -7;
            const result = addition(num1, num2);
            expect(result).toEqual(-12);
        });

        it('should correctly add two large positive numbers', () => {
            const num1 = 123456789;
            const num2 = 987654321;
            const result = addition(num1, num2);
            expect(result).toEqual(1111111110);
        });

        it('should correctly handle negative and positive numbers', () => {
            const num1 = -10;
            const num2 = 15;
            const result = addition(num1, num2);
            expect(result).toEqual(5);
        });

        it('should correctly handle zero as both operands', () => {
            const num1 = 0;
            const num2 = 0;
            const result = addition(num1, num2);
            expect(result).toEqual(0);
        });

        it('should correctly handle negative numbers with carry', () => {
            const num1 = -50;
            const num2 = -75;
            const result = addition(num1, num2);
            expect(result).toEqual(-125);
        });
    });

    describe('subtraction()', () => {
        it('should correctly subtract two positive numbers', () => {
            const num1 = 10;
            const num2 = 7;
            const result = subtraction(num1, num2);
            expect(result).toEqual(3);
        });

        it('should correctly handle zero as one of the operands', () => {
            const num1 = 0;
            const num2 = 5;
            const result = subtraction(num1, num2);
            expect(result).toEqual(-5);
        });

        it('should correctly handle negative and positive numbers', () => {
            const num1 = -10;
            const num2 = 5;
            const result = subtraction(num1, num2);
            expect(result).toEqual(-15);
        });

        it('should correctly handle negative numbers with carry', () => {
            const num1 = -50;
            const num2 = -25;
            const result = subtraction(num1, num2);
            expect(result).toEqual(-25);
        });
    });

    describe('multiplication()', () => {
        it('should correctly multiply two positive numbers', () => {
            const num1 = 5;
            const num2 = 7;
            const result = multiplication(num1, num2);
            expect(result).toEqual(35);
        });

        it('should correctly handle zero as one of the operands', () => {
            const num1 = 0;
            const num2 = 10;
            const result = multiplication(num1, num2);
            expect(result).toEqual(0);
        });

        it('should correctly handle negative and positive numbers', () => {
            const num1 = -5;
            const num2 = 7;
            const result = multiplication(num1, num2);
            expect(result).toEqual(-35);
        });
    });
});
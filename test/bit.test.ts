import {
    setBitAtPosition, unsetBitAtPosition,
    toggleBitAtPosition, invertBits,
    isBitSetAtPosition, countSetBits, countUnsetBits,
} from '../src/core/bit';

describe('Bit', () => {

    describe('setBitAtPosition()', () => {
        it('0 ---> 1', () => {
            const num = 0;
            const n = 0;
            const result = setBitAtPosition(num, n); // Binary: 0001 (1 in decimal)
            expect(result).toEqual(1);
        });

        it('101 ---> 111', () => {
            const num = 5; // Binary:
            const n = 1;
            const result = setBitAtPosition(num, n); // Binary: 0111 (7 in decimal)
            expect(result).toEqual(7);
        });

        it('11111111111111111111111111110110 ---> 11111111111111111111111111111110', () => {
            const num = -10; // Binary: 11111111111111111111111111110110
            const n = 3;
            const result = setBitAtPosition(num, n); // Binary: 11111110 (-2 in decimal)
            expect(result).toEqual(-2);
        });
    });

    describe('unsetBitAtPosition()', () => {
        it('should unset the bit at position 0', () => {
            const num = 1; // Binary: 0001
            const n = 0;
            const result = unsetBitAtPosition(num, n); // Binary: 0000 (0 in decimal)
            expect(result).toEqual(0);
        });

        it('should unset the bit at position 1', () => {
            const num = 7; // Binary: 0111
            const n = 1;
            const result = unsetBitAtPosition(num, n); // Binary: 0101 (5 in decimal)
            expect(result).toEqual(5);
        });

        it('should unset the bit at position 3 in a negative number', () => {
            const num = -2; // Binary: 11111110
            const n = 3;
            const result = unsetBitAtPosition(num, n); // Binary: 11110110 (-10 in decimal)
            expect(result).toEqual(-10);
        });
    });

    describe('toggleBitAtPosition()', () => {
        it('should toggle the bit at position 0', () => {
            const num = 1; // Binary: 0001
            const n = 0;
            const result = toggleBitAtPosition(num, n); // Binary: 0000 (0 in decimal)
            expect(result).toEqual(0);
        });

        it('should toggle the bit at position 1', () => {
            const num = 7; // Binary: 0111
            const n = 1;
            const result = toggleBitAtPosition(num, n); // Binary: 0101 (5 in decimal)
            expect(result).toEqual(5);
        });

        it('should toggle the bit at position 3 in a negative number', () => {
            const num = -10; // Binary: 11110110
            const n = 3;
            const result = toggleBitAtPosition(num, n); // Binary: 11111110 (-2 in decimal)
            expect(result).toEqual(-2);
        });
    });

    describe('invertBits()', () => {
        it('should invert every bit of a positive number', () => {
            const num = 42; // Binary: 101010
            const result = invertBits(num); // Binary: 010101 (-43 in decimal)
            expect(result).toEqual(-43);
        });

        it('should invert every bit of a negative number', () => {
            const num = -10;
            const result = invertBits(num);
            expect(result).toEqual(9);
        });

        it('should invert every bit of zero', () => {
            const num = 0; // Binary: 000000
            const result = invertBits(num); // Binary: 111111 (-1 in decimal)
            expect(result).toEqual(-1);
        });
    });

    describe('isBitSetAtPosition()', () => {
        it('should return true for a set bit', () => {
            const num = 5; // Binary: 0101
            const n = 2;
            const isSet = isBitSetAtPosition(num, n); // The 2nd bit is set (true)
            expect(isSet).toBe(true);
        });

        it('should return false for an unset bit', () => {
            const num = 7; // Binary: 0111
            const n = 1;
            const isSet = isBitSetAtPosition(num, n); // The 1st bit is unset (false)
            expect(isSet).toBe(true);
        });

        it('should handle negative numbers', () => {
            const num = -10;
            const n = 4; // Check the 4th bit
            const isSet = isBitSetAtPosition(num, n); // The 4th bit is set (true)
            expect(isSet).toBe(true);
        });
    });

    describe('countSetBits()', () => {
        it('countSetBits(0)', () => {
            expect(countSetBits(0)).toStrictEqual(0);
        });

        it('countSetBits(1)', () => {
            expect(countSetBits(1)).toStrictEqual(1);
        });

        it('countSetBits(2)', () => {
            expect(countSetBits(2)).toStrictEqual(1); // 10
        });

        it('countSetBits(3)', () => {
            expect(countSetBits(3)).toStrictEqual(2); // 11
        });

        it('countSetBits(4)', () => {
            expect(countSetBits(4)).toStrictEqual(1); // 100
        });

        it('countSetBits(5)', () => {
            expect(countSetBits(5)).toStrictEqual(2); // 101
        });
    });

    describe('countUnsetBits()', () => {
        it('countUnsetBits(0)', () => {
            expect(countUnsetBits(0)).toStrictEqual(1);
        });

        it('countUnsetBits(1)', () => {
            expect(countUnsetBits(1)).toStrictEqual(0);
        });

        it('countUnsetBits(2)', () => {
            expect(countUnsetBits(2)).toStrictEqual(1); // 10
        });

        it('countUnsetBits(3)', () => {
            expect(countUnsetBits(3)).toStrictEqual(0); // 11
        });

        it('countUnsetBits(4)', () => {
            expect(countUnsetBits(4)).toStrictEqual(2); // 100
        });

        it('countUnsetBits(5)', () => {
            expect(countUnsetBits(5)).toStrictEqual(1); // 101
        });
    });
});
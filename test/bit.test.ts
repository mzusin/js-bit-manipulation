import {
    setBitAtPosition, unsetBitAtPosition,
    toggleBitAtPosition, invertBits,
    isBitSetAtPosition,
    unsetRightmostSetBitAndSetAllNextBits, getRightmostSetBit,
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

    describe('unsetRightmostSetBitAndSetAllNextBits()', () => {
        it('unsetRightmostSetBitAndSetAllNextBits(0b10101010)', () => {
            expect(unsetRightmostSetBitAndSetAllNextBits(0b10101010)).toStrictEqual(0b10101001);
        });

        it('unsetRightmostSetBitAndSetAllNextBits(0b101010100)', () => {
            expect(unsetRightmostSetBitAndSetAllNextBits(0b101010100)).toStrictEqual(0b101010011);
        });
    });

    describe('getRightmostSetBit()', () => {
        it('should return 1 for 1', () => {
            const result = getRightmostSetBit(1);
            expect(result).toBe(1);
        });

        it('should return 2 for 2', () => {
            const result = getRightmostSetBit(2);
            expect(result).toBe(2);
        });

        it('should return 4 for 12', () => {
            const result = getRightmostSetBit(12);
            expect(result).toBe(4);
        });

        it('should return 1 for negative numbers', () => {
            const result = getRightmostSetBit(-7);
            expect(result).toBe(1);
        });

        it('should return 0 for 0', () => {
            const result = getRightmostSetBit(0);
            expect(result).toBe(0);
        });
    });
});
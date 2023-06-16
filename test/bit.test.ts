import { setBitAtPosition, unsetBitAtPosition, toggleBitAtPosition, invertBits } from '../src/core/bit';

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
});
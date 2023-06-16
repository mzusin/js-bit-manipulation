import { setBitAtPosition } from '../src/core/bit';

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

});
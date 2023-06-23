import { binaryToHex } from '../src/core/number-systems';

describe('Number Systems', () => {

    describe('binaryToHex()', () => {
        it('converts binary number to hex correctly', () => {
            expect(binaryToHex(0)).toBe('0');
            expect(binaryToHex(1)).toBe('1');
            expect(binaryToHex(10)).toBe('a');
            expect(binaryToHex(15)).toBe('f');
            expect(binaryToHex(16)).toBe('10');
            expect(binaryToHex(255)).toBe('ff');
            expect(binaryToHex(1001)).toBe('3e9');
            expect(binaryToHex(26)).toBe('1a');
        });

        it('handles negative numbers correctly', () => {
            expect(binaryToHex(-1)).toBe('ffffffff');
            expect(binaryToHex(-10)).toBe('fffffff6');
            expect(binaryToHex(-255)).toBe('ffffff01');
            expect(binaryToHex(-1001)).toBe('fffffc17');
        });
    });

});
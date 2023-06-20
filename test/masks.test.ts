import { getNSetBitsMask } from '../src/core/masks';
import { parseBinaryString } from '../src/core/common';

describe('Masks', () => {

    describe('getNSetBitsMask()', () => {
        it('getNSetBitsMask(1)', () => {
            expect(getNSetBitsMask(1)).toBe(parseBinaryString('1'));
        });

        it('getNSetBitsMask(2)', () => {
            expect(getNSetBitsMask(2)).toBe(parseBinaryString('11'));
        });

        it('getNSetBitsMask(3)', () => {
            expect(getNSetBitsMask(3)).toBe(parseBinaryString('111'));
        });

        it('getNSetBitsMask(5)', () => {
            expect(getNSetBitsMask(5)).toBe(parseBinaryString('11111'));
        });

        it('getNSetBitsMask(10)', () => {
            expect(getNSetBitsMask(10)).toBe(parseBinaryString('1111111111'));
        });
    });

});
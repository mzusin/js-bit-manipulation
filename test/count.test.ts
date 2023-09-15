import { countSetBits, countUnsetBits } from '../src/core/count';

describe('Count', () => {

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
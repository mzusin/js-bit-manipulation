import { getCharCodeSmallEn, getCharCodeCapitalEn } from '../src/core/string';

describe('String', () => {

    describe('getCharCodeSmallEn()', () => {
        it('(a, 0) ---> 0', () => {
            expect(getCharCodeSmallEn('a', 0)).toEqual(0);
        });

        it('(b, 0) ---> 0', () => {
            expect(getCharCodeSmallEn('b', 0)).toEqual(1);
        });

        it('(z, 0) ---> 0', () => {
            expect(getCharCodeSmallEn('z', 0)).toEqual(25);
        });

        it('(abc, 0) ---> 0', () => {
            expect(getCharCodeSmallEn('abc', 0)).toEqual(0);
        });

        it('(abc, 2) ---> 0', () => {
            expect(getCharCodeSmallEn('abc', 2)).toEqual(2);
        });
    });

    describe('getCharCodeCapitalEn()', () => {
        it('(A, 0) ---> 0', () => {
            expect(getCharCodeCapitalEn('A', 0)).toEqual(0);
        });

        it('(B, 0) ---> 0', () => {
            expect(getCharCodeCapitalEn('B', 0)).toEqual(1);
        });

        it('(Z, 0) ---> 0', () => {
            expect(getCharCodeCapitalEn('Z', 0)).toEqual(25);
        });

        it('(ABC, 0) ---> 0', () => {
            expect(getCharCodeCapitalEn('ABC', 0)).toEqual(0);
        });

        it('(ABC, 2) ---> 0', () => {
            expect(getCharCodeCapitalEn('ABC', 2)).toEqual(2);
        });
    });

});
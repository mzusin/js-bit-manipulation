/**
 * Small English letters.
 * the result is number in the range 0 - 25.
 */
export const getCharCodeSmallEn = (text: string, index: number) => {
    return text.charCodeAt(index) - 97;
};

/**
 * Capital English letters.
 * the result is number in the range 0 - 25.
 */
export const getCharCodeCapitalEn = (text: string, index: number) => {
    return text.charCodeAt(index) - 65;
};
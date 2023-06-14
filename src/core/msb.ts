/**
 * Get the most significant bit.
 * JavaScript uses two's complement representation --->
 * - Negative numbers have the leftmost bit as 1.
 * - Non-negative numbers have the leftmost bit as 0.
 */
export const getMSB = (num: number) : number => {
    return (num < 0) ? 1 : 0;
};

/**
 * 01101100110110111100101011001011
 * 2 ** 4 = 16 ---> split the binary number by four
 * 0110 1100 1101 1011 1100 1010 1100 1011
 * add zeros from the left if needed
 * every 4 bits can be converted to a hex number
 */
export const binaryToHex = (num: number) : string => {

    // The same result can be achieved by the following build-in function:
    // return (num >>> 0).toString(16);

    const map: Record<number, string> = {
        10: 'a', 11: 'b', 12: 'c',
        13: 'd', 14: 'e', 15: 'f',
    }

    num = num >>> 0;
    let hex = '';

    while(num > 0) {
        const mask = num & 0xF;
        hex = (mask < 10 ? mask.toString() : map[mask]) + hex;
        num >>>= 4;
    }

    return hex || '0';
};
export const countUnsetBits = (num: number) => {
    if(num === 0) return 1;

    let count = 0;

    while(num > 0){
        if((num & 1) === 0) count ++;
        num >>= 1;
    }

    return count;
};

export const countSetBits = (num: number) => {
    let count = 0;

    while(num > 0){
        count += num & 1;
        num >>= 1;
    }

    return count;
};
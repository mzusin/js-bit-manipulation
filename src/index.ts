import * as bitwise from './core/bitwise';
import * as lsb from './core/lsb';
import * as msb from './core/msb';

const api = {
    ...bitwise,
    ...lsb,
    ...msb,
};

declare global {
    interface Window {
        mzBitwise: typeof api,
    }
}

window.mzBitwise = window.mzBitwise || api;

export * from './core/bitwise';
export * from './core/lsb';
export * from './core/msb';
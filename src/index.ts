import * as bitwise from './core/bitwise';
import * as lsb from './core/lsb';

const api = {
    ...bitwise,
    ...lsb,
};

declare global {
    interface Window {
        mzBitwise: typeof api,
    }
}

window.mzBitwise = window.mzBitwise || api;

export * from './core/bitwise';
export * from './core/lsb';
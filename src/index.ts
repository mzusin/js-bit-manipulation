import * as bitwise from './core/bitwise';

const api = {
    ...bitwise,
};

declare global {
    interface Window {
        mzBitwise: typeof api,
    }
}

window.mzBitwise = window.mzBitwise || api;

export * from './core/bitwise';
import * as common from './core/common';
import * as math from './core/math';
import * as lsb from './core/lsb';
import * as msb from './core/msb';
import * as predicates from './core/predicates';

const api = {
    ...common,
    ...math,
    ...lsb,
    ...msb,
    ...predicates,
};

declare global {
    interface Window {
        mzBitwise: typeof api,
    }
}

window.mzBitwise = window.mzBitwise || api;

export * from './core/common';
export * from './core/lsb';
export * from './core/msb';
export * from './core/predicates';
export * from './core/math';
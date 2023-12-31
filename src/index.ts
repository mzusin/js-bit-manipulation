import * as common from './core/common';
import * as math from './core/math';
import * as lsb from './core/lsb';
import * as msb from './core/msb';
import * as bit from './core/bit';
import * as predicates from './core/predicates';
import * as masks from './core/masks';
import * as numberSystems from './core/number-systems';
import * as count from './core/count';

const api = {
    ...common,
    ...math,
    ...lsb,
    ...msb,
    ...bit,
    ...predicates,
    ...masks,
    ...numberSystems,
    ...count,
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
export * from './core/bit';
export * from './core/predicates';
export * from './core/math';
export * from './core/masks';
export * from './core/number-systems';
export * from './core/count';
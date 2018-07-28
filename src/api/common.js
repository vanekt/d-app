import { ErrorCode } from '../constants';

export function toJson(r) {
    return r.json();
}

export function errorToTransport(e) {
    return {
        error: e,
        errorCode: e.name === 'TypeError' ? ErrorCode.TypeError : ErrorCode.BadRequest,
        errorMessage: e.toString(),
        success: false
    };
}

export const getOptions = {
    credentials: 'same-origin',
    method: 'get',
    mode: 'same-origin',
    redirect: 'follow'
};

export const postOptions = {
    ...getOptions,
    method: 'post'
};

export const apiVersion = 'v1';

import * as types from './actionTypes';

export const reqeustFetch = () => {
    return {
        type : types.REQUEST_FETCH
    }
}

export const requestSucceeded = (data) => {
    return {
        type : types.REQUEST_SUCCEEDED,
        data
    }
}

export const requestFailed = (data) => {
    return {
        type : types.REQUEST_FAILED,
        data
    }
}
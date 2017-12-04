import {
    SET,
    RESET,
    SET_SURVEY,
    ADD_PAGE,
    REMOVE_PAGE,
    SET_PAGE,
    RESET_PAGE,
    MOVE_PAGE,
    ADD_QUESTION,
    REMOVE_QUESTION,
    SET_QUESTION,
    RESET_QUESTION,
    MOVE_QUESTION,
} from '../Types/Editor'

// Action Creators
export const set = (survey) => ({
    type: SET,
    payload: {
        survey
    }
})

export const reset = () => ({
    type: RESET
})

export const setSurvey = (value) => ({
    type: SET_SURVEY,
    payload: {
        value,
    }
})

export const addPage = (type) => ({
    type: ADD_PAGE,
    payload: {
        type
    }
})

export const removePage = (pageIndex) => ({
    type: REMOVE_PAGE,
    payload: {
        pageIndex
    }
})

export const setPage = (pageIndex, value) => ({
    type: SET_PAGE,
    payload: {
        pageIndex,
        value
    }
})

export const movePage = (oldIndex, newIndex) => ({
    type: MOVE_PAGE,
    payload: {
        oldIndex,
        newIndex,
    }
})

export const addQuestion = (pageIndex, type) => ({
    type: ADD_QUESTION,
    payload: {
        pageIndex,
        type,
    }
})

export const removeQuestion = (pageIndex, questionIndex) => ({
    type: REMOVE_QUESTION,
    payload: {
        pageIndex,
        questionIndex,
    }
})

export const resetQuestion = (pageIndex, questionIndex, type) => ({
    type: RESET_QUESTION,
    payload: {
        pageIndex,
        questionIndex,
        type
    }
})

export const setQuestion = (pageIndex, questionIndex, value) => ({
    type: SET_QUESTION,
    payload: {
        pageIndex,
        questionIndex,
        value,
    }
})

export const moveQuestion = (pageIndex, oldIndex, newIndex) => ({
    type: MOVE_QUESTION,
    payload: {
        pageIndex,
        oldIndex,
        newIndex,
    }
})

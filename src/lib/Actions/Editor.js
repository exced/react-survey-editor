import {
    SELECT,
    NEW_SURVEY,
    ADD_PAGE,
    REMOVE_PAGE,
    SET_PAGE,
    MOVE_PAGE,
    ADD_QUESTION,
    REMOVE_QUESTION,
    SET_QUESTION,
    MOVE_QUESTION,
    SURVEY,
    PAGE,
} from '../Types/Editor'

// Action Creators
export const select = (selected) => ({
    type: SELECT,
    payload: {
        selected,
    }
})

export const newSurvey = () => ({
    type: NEW_SURVEY,
})

export const addPage = () => ({
    type: ADD_PAGE,
})

export const removePage = (index) => ({
    type: REMOVE_PAGE,
    payload: {
        index
    }
})

export const setPage = (index, value) => ({
    type: SET_PAGE,
    payload: {
        index,
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

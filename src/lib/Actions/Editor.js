import {
    ADD_ITEM,
    REMOVE_ITEM,
    SET_ITEM,
    MOVE_ITEM,
} from '../Types/Editor'

// Action Creators
export const addItem = (type, index, parentId) => ({
    type: ADD_ITEM,
    payload: {
        type,
        index,
        parentId,
    }
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: {
        id
    }
})

export const setItem = (id, value) => ({
    type: SET_ITEM,
    payload: {
        id,
        value
    }
})

export const moveItem = (oldIndex, newIndex) => ({
    type: MOVE_ITEM,
    payload: {
        oldIndex,
        newIndex,
    }
})

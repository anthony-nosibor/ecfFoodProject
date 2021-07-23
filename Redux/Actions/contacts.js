import {ADD_CONTACT, DELETE_CONTACT, UP_CONTACT} from './types' ;

export const addContact = (payload) => ({
    type: ADD_CONTACT,
    payload

})

export const deleteContact = (payload) => ({
    type: DELETE_CONTACT,
    payload

})

export const updateContact = (payload) => ({
    type: UP_CONTACT,
    payload

})
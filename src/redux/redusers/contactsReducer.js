// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from "redux";
import { addContactActionCreator, deleteContactActionCreator, filterContactsActionCreater, alertContactsActionCreater, setLoading, setError, getContacts } from '../actions/contactsActions';

const contactsReducer = (state = { ...initialState }, { type, payload }) => {
    switch (type) {
        case addContactActionCreator.type:
            return { ...state, items: [...state.items, payload] };
        case getContacts.type:
            return { ...state, items: [...payload] };
        case deleteContactActionCreator.type:
            return { ...state, items: [...state.items.filter((item) => item.id !== payload)] };
        case filterContactsActionCreater.type:
            return { ...state, filter: payload, };
        case alertContactsActionCreater.type:
            return { ...state, text: payload, };
        case setLoading.type:
            return { ...state, isLoading: !state.isLoading };
        case setError.type:
            return { ...state, error: payload };

        default:
            return state;
    }
}

const initialState = {
    items: [],
    filter: '',
    text: '',
    error: '',
    isLoading: false,
}

export default contactsReducer












// const addContact = (state, action) => [...state, action.payload]

// const deleteContact = (state, action) => [...state.filter((item) => item.id !== action.payload)]

// const filterContact = (_, action) => action.payload

// const alertContact = (_, action) => action.payload





// const items = createReducer([], {
//     [addContactActionCreator]: addContact,
//     [deleteContactActionCreator]: deleteContact,
// })

// const filter = createReducer('', {
//     [filterContactsActionCreater]: filterContact,
// })

// const text = createReducer('', {
//     [alertContactsActionCreater]: alertContact,
// })





// export default combineReducers({
//     items,
//     filter,
//     text,
// })


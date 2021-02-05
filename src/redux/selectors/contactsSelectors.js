import { createSelector } from '@reduxjs/toolkit';

const getContactsSelector = state => state.contacts.items;
const getTextAlertSelector = state => state.contacts.text;
const getLoadingSelector = state => state.contacts.isLoading;
const getFilterValueSelector = state => state.contacts.filter;

const getFilterSelector = createSelector([getContactsSelector, getFilterValueSelector], (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
})

// const getFilterSelector = state => {
//     const items = getContactsSelector(state)
//     const filterValue = getFilterValueSelector(state)
//     items.filter(item => item.name.toLowerCase()
//         .includes(filterValue.toLowerCase()))
// };

export default {
    getContactsSelector,
    getTextAlertSelector,
    getLoadingSelector,
    getFilterSelector,
    getFilterValueSelector,
};


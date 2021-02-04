import axios from "axios";
import { addContactActionCreator, setLoading, setError } from '../actions/contactsActions';

export const addNewContactOperation = (contact) => (dispatch) => {
    dispatch(setLoading())
    axios.post(
        `https://redux-hm-07-default-rtdb.firebaseio.com/contacts.json`,
        contact
    )
        .then(response => dispatch(addContactActionCreator({ ...contact, id: response.data.name })))
        .catch(error => dispatch(setError(error)))
        .finally(dispatch(setLoading()))
}
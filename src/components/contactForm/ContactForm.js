import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import PropTypes from "prop-types";
import { FormWrapper } from './styledForm';
import { connect } from 'react-redux';
import { addContactActionCreator, alertContactsActionCreater } from '../../redux/actions/contactsActions';
import Notification from '../notifications/Notification'
import { addNewContactOperation } from '../../redux/operations/contactsOperations';
// import { addContactActionCreator } from '../../redux/redusers/contactsReducer'


const ContactForm = () => {
    const contacts = useSelector((state) => state.contacts.items)
    const text = useSelector((state) => state.contacts.text)
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        number: '',
    });
    useEffect(() => {
        if (text) {
            setTimeout(() => { dispatch(alertContactsActionCreater('')) }, 2000)
        }
        //eslint-disable-next-line
    }, [])

    const hadlleSubmit = e => {
        e.preventDefault();
        if (!state.name.length) {
            dispatch(alertContactsActionCreater('Please, enter your name'))
        }
        else if (!state.number.length) {
            dispatch(alertContactsActionCreater('Please, enter your number'))
        }
        else {
            if (contacts.some((contact) =>
                contact.name.toLowerCase() === state.name.toLowerCase())) {

                dispatch(alertContactsActionCreater(`${state.name} is already in contacts.`))
            }
            else {
                // dispatch(addContactActionCreator({ ...state }))
                dispatch(addNewContactOperation(state));
            }
        }

        setState({
            name: '',
            number: '',
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <>
            {text &&
                <CSSTransition
                    in={true}
                    classNames="alertSlide"
                    timeout={500}
                    unmountOnExit
                >
                    <Notification text={text} />
                </CSSTransition>}
            {isLoading && <h2>...Send data...</h2>}
            <FormWrapper className="wrapper" onSubmit={hadlleSubmit}>
                <label className="label">Name
                     <input className="input" type="text" name="name" value={state.name} onChange={handleChange}></input>
                </label>
                <label className="label">Number
                     <input className="input" type="tel" name="number" value={state.number} onChange={handleChange}></input>
                </label>
                <div className="buttonWrapper">
                    <button className="button" type="submit">Add contact</button>
                </div>
            </FormWrapper>

        </>
    )
}


// const mapStateToProps = (state) => {
//     return {
//         contacts: state.contacts.items,
//         text: state.contacts.text,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         alertContactsActionCreater: (data) => {
//             dispatch(alertContactsActionCreater(data))
//         },
//         addContactActionCreator: (data) => {
//             dispatch(addContactActionCreator(data))
//         },
//     };
// };


export default ContactForm;

ContactForm.propTypes = {
    addContactActionCreator: PropTypes.func.isRequired,
    alertContactsActionCreater: PropTypes.func.isRequired,
}

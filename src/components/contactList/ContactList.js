import React from 'react';
// import PropTypes from "prop-types";
import { TransitionGroup } from 'react-transition-group';
import { useSelector, useDispatch } from "react-redux";
// import { connect } from 'react-redux';
import { Div } from './styledList';
import transition from 'styled-transition-group';
// import { deleteContactActionCreator } from '../../redux/actions/contactsActions';
import { deleteContactOperation } from '../../redux/operations/contactsOperations';

const LI = transition.li.attrs({
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: 250,
})`
&:enter{transform: translateX(-200%);}
&:enter-active{
    transform: translateX(0);
	transition: all 250ms linear;
}
&:exit{transform: transform: translateX(0);}
&:exit-active{
    transform: translateX(200%);
	transition: all 250ms linear;
}
`

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.items.filter(item => item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())))
    const dispatch = useDispatch();

    const handleDeleteContact = (e) => {
        const id = e.target.id;
        dispatch(deleteContactOperation(id));
    };
    return (

        <Div>
            <TransitionGroup component="ul" className="contactList wrapper">
                {contacts.map(({ id, name, number }) => {
                    return (
                        <LI key={id} timeout={250} className="itemContact">
                            {`${name}:  ${number}`}
                            <button className="button" type="button" id={id} onClick={handleDeleteContact}>Delete</button>
                        </LI>
                    )
                })}

            </TransitionGroup >
        </Div>


    )
}

// const mapStateToPerops = (state) => {
//     return {
//         contacts: state.contacts.items.filter(item => item.name.toLowerCase().includes(state.contacts.filter.toLowerCase())),
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {

//         deleteContactActionCreator: (data) => {
//             dispatch(deleteContactActionCreator(data))
//         },
//     }
// }


export default ContactList

// ContactList.propTypes = {
//     deleteContactActionCreator: PropTypes.func.isRequired,
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
// }
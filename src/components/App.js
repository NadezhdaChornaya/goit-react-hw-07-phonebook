import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { PhonebookWrapper } from './styledApp';
import { connect } from 'react-redux';

const App = ({ contacts }) => {
    return (
        <PhonebookWrapper>
            <CSSTransition
                in={true}
                appear={true}
                classNames="titleSlide"
                timeout={500}
                unmountOnExit
            >
                <h1 className="mainTitle">Phonebook</h1>
            </CSSTransition>
            <ContactForm />
            <h2 className="title">Contacts</h2>
            <CSSTransition
                in={contacts.length > 1}
                classNames="filterSlide"
                timeout={500}
                unmountOnExit>
                <Filter />
            </CSSTransition>
            {contacts.length > 0 && (<CSSTransition
                in={true}
                appear={true}
                classNames="titleSlide"
                timeout={500}
                unmountOnExit>
                <ContactList contacts={contacts} />
            </CSSTransition>)}
        </PhonebookWrapper >
    )
}

const mapStateToProps = (state) => {
    return { contacts: state.contacts.items };
}

export default connect(mapStateToProps)(App)



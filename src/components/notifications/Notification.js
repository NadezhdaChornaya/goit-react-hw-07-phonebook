import React from 'react';
import PropTypes from "prop-types";
import { AlertWrapper } from './styledNotification';

const Notification = ({ text }) => {
    return (
        <AlertWrapper>
            <p className="alertText">&#10071;{text}&#10071;</p>
        </AlertWrapper>
    )
}

export default Notification

Notification.propTypes = {
    text: PropTypes.string.isRequired,
}
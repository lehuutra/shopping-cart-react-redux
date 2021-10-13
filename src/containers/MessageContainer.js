import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from '../components/Message';

const MessageContainer = ({ message }) => {
    return (
        <Message message={message} />
    );
};

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
} 

export default connect(mapStateToProps, null)(MessageContainer);
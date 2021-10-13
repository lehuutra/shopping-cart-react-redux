import React from 'react';

const Message = ({ message }) => {
    return (
        <h3>
            <span className="badge amber darken-2">{message}</span>
        </h3>
    );
};

export default Message;
import React from 'react';

const NewQuoteButton = props => {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>Get Random Quote</button>
    );
};

export default NewQuoteButton;
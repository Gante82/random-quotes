import React from 'react';

const Quote = props => {
    return (
        <blockquote className="blockquote">
            <p className="mb-0">{props.quote}</p>
            <footer className="blockquote-footer">{props.author}
            </footer>
        </blockquote>
    )
};

export default Quote;
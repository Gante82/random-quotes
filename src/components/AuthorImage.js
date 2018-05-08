import React from 'react';

const AuthorImage = props => {
    return (<img className="img-fluid" src={props.imgUrl} alt={props.author}/>);
};

export default AuthorImage;
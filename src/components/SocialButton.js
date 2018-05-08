import React from 'react';

const SocialButton = props => {
    return (
        <a target="_blank" className="twitter-share-button" href={props.shareUrl}>
            <i className={'fab fa-2x fa-' + props.name}></i>
        </a>
    )
};

export default SocialButton;
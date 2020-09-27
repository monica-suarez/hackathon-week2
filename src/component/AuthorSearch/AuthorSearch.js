import React from 'react';

const AuthorSearch = (props) => {
    return (
        <div>
        <h4>{props.story.title}</h4>
        <h3>Author: {props.story.author}</h3>
        <a href={props.story.url}>{props.story.url}</a>
        </div>
    )

}

export default AuthorSearch;
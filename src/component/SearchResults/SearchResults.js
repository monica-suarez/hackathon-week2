import React from 'react';

const SearchResults = (props)=>{
return(
    <li key={props.index}>
        <h2>Title: {props.story.story_title}</h2>
        <p>Author: {props.story.author}</p>
        <p>Date Created: {props.story.created_at}</p>
    </li>
)
}

export default SearchResults
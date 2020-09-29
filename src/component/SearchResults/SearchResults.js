import React from 'react';


const SearchResults = (props)=>{
return(
    <li key={props.index}>
        <a className='articleLink' style={{color: 'darkviolet'}} href={props.story.url}><h3>Title: {props.story.title}</h3></a>
        <p>Author: {props.story.author}</p>
        <p>Date Created: {props.story.created_at}</p>
        <br/>
    </li>
)
}

export default SearchResults
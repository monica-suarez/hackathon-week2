import React from 'react'
// const moment = require("moment");



const SearchResults = (props)=>{
//     dateFormat = ({created_at}) => {
//         let str = {created_at};
//         let date = moment(str);
//         let dateComponent = date.utc().format('YYYY-MM-DD');
//         let timeComponent = date.utc().format('HH:mm:ss');
//         console.log(dateComponent);
//         console.log(timeComponent);// 
       
    
return(
    <li key={props.index}>
        <a className='articleLink' style={{color: 'darkviolet'}} href={props.story.url}><h3>Title: {props.story.title}</h3></a>
        <p>Author: {props.story.author}</p>
        <p>Date Created: {props.created_at}</p>
        <br/>
    </li>
)
}

export default SearchResults
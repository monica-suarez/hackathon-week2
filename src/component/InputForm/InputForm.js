import React from 'react'; 



const InputForm = (props, searchInput) =>{
 return(
    <form onSubmit={props.handleClick}>
        <label htmlFor='searchInput'>
            By Author:
        </label>
            <br/>
            <br/>
        <input type="text" name='searchInput' placeholder='Enter Keyword/Date' searchInput ={searchInput}/>
             <br/>
             <br/>
        <button type="submit">Submit</button>
    <br/>
    <br/>
    </form>
 )
}

export default InputForm;



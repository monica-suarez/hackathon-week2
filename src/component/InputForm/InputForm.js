import React from 'react'; 



const InputForm = (props, searchinput) =>{
 return(
    <form onSubmit={props.handleClick}>
        <label htmlFor='searchinput'>
            Search for Articles:
        </label>
            <br/>
            <br/>
        <input onChange={props.handleUpdate} type="text" name='searchinput' placeholder='Enter Keyword/Date' searchinput ={searchinput}/>
             <br/>
             <br/>
        <button type="submit" value='Search'>Submit</button>
    <br/>
    <br/>
    </form>
 )
}

export default InputForm;



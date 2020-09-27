import React from 'react'; 




const InputForm = (author, title, date) =>{
 return(
    <form>
    <select>
        <option className="placeholder" value="" defaultValue hidden>Select Search Criteria</option>
        <option value='author' name='author' author={author}>Author</option>
        <option value='title' name='title' title={title}>Title</option>
        <option value='date' name='date' date={date}>Date</option>
    </select>
    <br/>
    <br/>
    <input type="date"/>
    <br/>
    <br/>
    <input type="type" /> 
    <br/>
    <br/>
    <button>Submit</button>
    <br/>
    <br/>
    </form>
 )
}

export default InputForm;
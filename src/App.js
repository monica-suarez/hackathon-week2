import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      stories: [],
      firstSearch: ''
    }
  }
  componentDidMount(){
    fetch('https://hn.algolia.com/api/v1/search_by_date?tags=&hitsPerPage=25')
    .then(response => response.json())
    .then(data => this.setState({
      stories: data
    }
    ))
  }
  handleUpdate = (event) =>{
    this.setState({
        firstSearch: event.target.value
    })
}
handleClick = (event) =>{
  event.preventDefault()
}
  render(){
  return (
    <div className="App">
    <h1 className="title">Welcome to our 411 Hackathon!</h1>
    </div>
  );
  }
}

export default App;

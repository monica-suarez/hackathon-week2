import React from "react";
import "./App.css";
import AuthorSearch from "./component/ApiApp/AuthorSearch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stories: [],
      firstSearch: ''
    }
  }
  componentDidMount() {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=25"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          stories: data.hits,
        })
      );
  }

  componentDidUpdate() {
    console.log(this.state.stories);
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Welcome to our 411 Hackathon!</h1>
        <div>
          {this.state.stories.map((story, index) => (
            <AuthorSearch story={story} />
          ))}
        </div>
      </div>
    );
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

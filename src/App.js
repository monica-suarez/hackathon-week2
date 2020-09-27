import React from "react";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";
import SearchResults from "./component/SearchResults/SearchResults"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stories: [],
      search: ''
    }
  }
  componentDidMount() {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?query=&hitsPerPage=50"
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
  handleUpdate = (event) =>{
    this.setState({
        search: event.target.value
    })
}
handleClick = (event) =>{
  event.preventDefault()
  this.setState({
    stories: [...this.state.stories], 
    search: ''
  })
}
  render() {
    return (
      <div className="App">
        <h1 className="title">Search Hacker News</h1>
        <div>
        <InputForm ></InputForm>
          <ul>
          {this.state.stories.map((story, index) => (
            <SearchResults index={index}/>
          ))}
          </ul>
        </div>
      </div>
    );


}
}

export default App;

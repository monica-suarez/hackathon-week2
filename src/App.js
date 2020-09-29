import React from "react";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";
import SearchResults from "./component/SearchResults/SearchResults"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stories: [],
      filteredStories: [], 
      search: ''
    }
  }
  componentDidMount() {
    fetch(
      "https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50"
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

  let filteredResults = this.state.stories.filter(story => { 
    console.log(story.story_title)
    return story.author.toLowerCase().includes(this.state.search.toLowerCase()) 
    || story.title.toLowerCase().includes(this.state.search.toLowerCase())
     || story.created_at.toLowerCase().includes(this.state.search.toLowerCase())
  })

  this.setState({
    search: '',
    filteredStories: filteredResults 
    })
}
  render() {
    return (
      <div className="App">
        <h1 className="title">Search Hacker News</h1>
        <div>
        <InputForm handleClick={this.handleClick} handleUpdate={this.handleUpdate}></InputForm>
          <ul>
          {this.state.filteredStories.map((story, index) => (
            <SearchResults story={story} index={index}/>
          ))}
          </ul>
        </div>
      </div>
    );


}
}

export default App;

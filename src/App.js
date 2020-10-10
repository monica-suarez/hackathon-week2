import React from "react";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";
import SearchResults from "./component/SearchResults/SearchResults";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      stories: [],
      filteredStories: [], 
      search: '',
     created_at: " ",
      
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
      )
      .then((data) => {
        const str = this.state.stories.created_at
        let date = moment(str)
        let dateComponent = date.utc().format('YYYY-MM-DD');
        let timeComponent = date.utc().format('HH:mm:ss');
        console.log(dateComponent);
        console.log(timeComponent);
        this.setState({
          created_at: dateComponent
        })
      })
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
 || story.created_at.includes(this.state.text)
  })

  this.setState({
    search: '',
    filteredStories: filteredResults 
    
    })
}

  // dateFormat = ({created_at}) => {
  //   let str = {created_at};
  //   let date = moment(str);
    // let dateComponent = date.utc().format('YYYY-MM-DD');
    // let timeComponent = date.utc().format('HH:mm:ss');
    // console.log(dateComponent);
    // console.log(timeComponent);
  //   return dateComponent;
  // }


  render() {
    return (
      <div className="App">
        <h1 className="title">Search Hacker News</h1>
        <div>
        <InputForm handleClick={this.handleClick} handleUpdate={this.handleUpdate}></InputForm>
          <ul>
          {this.state.filteredStories.map((story, index, created_at) => (
            <SearchResults story={story} key={index} created_at={this.state.created_at}/>
          ))}
          </ul>
        </div>
      </div>
    );


}
}

export default App;
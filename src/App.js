import React from "react";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";

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
        firstSearch: event.target.value
    })
}
handleClick = (event) =>{
  event.preventDefault()
}
  render() {
    return (
      <div className="App">
        <h1 className="title">Search Hacker News</h1>
        <div>
          {this.state.stories.map((story, index) => (
            <InputForm index={index} story={story}></InputForm>
          ))}
        </div>
      </div>
    );


}
}

export default App;

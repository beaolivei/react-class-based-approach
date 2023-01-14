import { Component } from "react";

export class ClassSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: [],
        searchTerm: ""
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidUpdate(){
    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(data => this.setState({movies: [...data]}))
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.setState({searchTerm: event.target.search.value})
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input name="search" />
          <button type="submit"> SEARCH TV SHOWS</button>
        </form>
        <ul>
          {this.state.movies.length > 0 &&
            this.state.movies.map((item, index) => <li key={index}>{item.show.name}</li>)}
        </ul>
      </div>
    );
  }
}

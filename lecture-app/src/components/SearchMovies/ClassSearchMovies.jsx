import { Component } from "react";

export default class SearchMoviesClass extends Component { 

    constructor(props){
        super(props);
        this.state = {
            movies: [],
            searchFor: ''
        }
    }
    componentDidUpdate(){
        fetch(`https://api.tvmaze.com/search/shows?q=${this.state.searchFor}`)
        .then(result => result.json())
        .then(data => this.setState({movies: data}))
    }

    render(){
        return(
            <div>
                <h1> Search for Shows: </h1>
                <form onSubmit={(event) => { event.preventDefault(); this.setState({searchFor: event.target.search.value })}}>
                    <input name="search"/>
                    <button type="submit"> SEARCH</button>
                </form>
                <ul>
                {
                    this.state.movies.map((item, index) => 
                        {
                            return <li key={index}>{item.show.name}</li>;
                        }
                    )
                }
                </ul>
            </div>
        )
    }

}



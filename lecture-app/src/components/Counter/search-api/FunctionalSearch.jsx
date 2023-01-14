import { useEffect, useState } from "react"

export default function FunctionalSearch(props){
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => setMovies(data))
    },[searchTerm])

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.search.value)
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <form onSubmit={handleFormSubmit}>
                <input name="search"/>
                <button type="submit"> SEARCH TV SHOWS</button>
            </form>
            <ul>
                {
                    movies.length > 0 &&
                    movies.map((item, index) => 
                        <li key={index}>{item.show.name}</li>
                    )
                }
            </ul>
        </div>
    )
} 
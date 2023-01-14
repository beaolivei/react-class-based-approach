import { useState } from "react"

export default function FunctionalCounter(props){
    const [count, setCount] = useState(0)

    return(
        <div>
            <h1>{props.title}</h1>
            <h2> This button was clicked {count} amount of times</h2>
            <button onClick={() => setCount((prev) => prev + 1)}> CLICK ME</button>
        </div>
    )
}
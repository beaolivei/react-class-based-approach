import { useState } from "react"

export function FunctionalCounter (props){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>{props.header}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}> CLICK ME</button>
            <h2> This button has been clicked: </h2>
            <h2> {count} times</h2>
        </div>
    )
}
import React, { useState, useEffect } from 'react'

export default function UseEffect() {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])

    /*
    useEffect(() => {
        console.log("This is my side effect");
        return () => {
            console.log("This is my clean up")
        }
    }, [optional dependencies])

    */

    return (
        <div className='container'>
            <h2>useEffect hook</h2>
            <p>
                The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
            </p>
            <hr />
            <div className='d-flex gap-2'>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h3>
                {resourceType}
            </h3>
            <div>
                {items.map(item => {
                    return <pre key={item.id}>{JSON.stringify(item)}</pre>
                })}
            </div>

        </div>
    )
}

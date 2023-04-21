import React, { useState } from 'react'

export default function UseStateHook() {
    const [count, setCount] = useState(0);
    // const [state, setState] = useState({ count: 0, them: 'red' });
    // const count = state.count;

    // function decreamentOne() {
    //     setState(prevState => {
    //         return { ...prevState, count: prevState.count - 1 }

    //     });
    // }

    function decreamentOne() {
        setCount(prevCount => prevCount - 1);
    }

    function increamentOne() {
        setCount(prevCount => prevCount + 1);
    }
    return (
        <div className='container'>
            <h2>useState hook</h2>
            <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <hr />
            <button onClick={() => decreamentOne()}> - </button>

            <span> {count} </span>

            <button onClick={() => increamentOne()}> + </button>
        </div>
    )
}

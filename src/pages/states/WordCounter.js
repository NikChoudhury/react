import React, { useState } from 'react'


export default function WordCounter() {
    const [text, setText] = useState();
    //text = "New Text"  // Wrond way to change the state
    //setText("New Text")  // correct way to change the state

    const handleUpperCaseClick = () => {
        // console.log("Click" + text)
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <div className='container'>
            <h1>Word Counter</h1>
            <hr />
            <div className="mb-3">
                <textarea
                    className="form-control"
                    rows="6"
                    value={text}
                    onChange={handleOnChange}
                    placeholder='Enter Text Here'
                ></textarea>
            </div>
            <div className='d-flex  gap-2 flex-wrap'>
                <button type="button" onClick={handleUpperCaseClick} className="btn btn-success">Uppercase</button>
                <button type="button" onClick={handleLowerCaseClick} className="btn btn-success">Lowercase</button>
            </div>

            <hr />
            <br />
            <h3>Preview</h3>
            <p>
                {text}
            </p>
        </div>
    )
}

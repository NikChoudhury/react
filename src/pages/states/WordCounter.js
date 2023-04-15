import React, { useState } from 'react'


export default function WordCounter() {
    const [text, setText] = useState("");
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
    function handleClearClick() {
        setText('');
    }
    function handleCopyClick() {
        // let myTextArea = document.getElementById("myTextArea");
        // myTextArea.select();
        navigator.clipboard.writeText(text);
        alert("Copy")
    }
    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // const countCharacters = () => {
    //     let charCount = text;
    //     // console.log(charCount)
    //     // charCount = charCount.filter(entry => /\S/.test(entry));
    //     // charCount = charCount.filter(entry => entry.trim() !== ""); //We can also use this
    //     // var rex = /\S/;
    //     // charCount = charCount.filter(rex.test.bind(rex));  //We can also use this

    //     // console.log(charCount)
    //     return charCount.length
    // }

    const countWord = () => {
        let textCount = text.trim().split(/\n|[ ]+/);
        // textCount = textCount.filter(rex.test.bind(rex));  //We can also use this
        // textCount = textCount.filter(entry => entry.trim() !== ''); //We can also use this
        textCount = textCount.filter(entry => /\S/.test(entry));
        // console.log(textCount);
        return textCount.length
    }

    const countParagraphs = () => {
        let paragraphsCount = text.trim().split(/\r\n|\r|\n/);
        paragraphsCount = paragraphsCount.filter(entry => /\S/.test(entry));
        return paragraphsCount.length
    }

    const countSentences = () => {
        let sentencesCount = text.split(/[.!?]/);
        // console.log(sentencesCount);
        sentencesCount = sentencesCount.filter(entry => /\S/.test(entry));
        // console.log(sentencesCount);
        return sentencesCount.length
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
                    id='myTextArea'
                ></textarea>
            </div>
            <div className='d-flex  gap-2 flex-wrap'>
                <button type="button" onClick={handleUpperCaseClick} className="btn btn-success">Uppercase</button>
                <button type="button" onClick={handleLowerCaseClick} className="btn btn-success">Lowercase</button>
                <button type="button" onClick={() => handleClearClick()} className="btn btn-success">Clear</button>
                <button type="button" onClick={() => handleCopyClick()} className="btn btn-success">Copy Text</button>
                <button type="button" onClick={() => handleExtraSpaces()} className="btn btn-success">Remove Extra Space</button>

            </div>

            <hr />
            <h3>Summary</h3>
            <p><b>{countWord()}</b> words and <b>{text.length}</b> characters and <b>{countParagraphs()}</b> Paragraphs and <b>{countSentences()}</b> Sentences</p>
            <h3>Preview</h3>
            <p>
                <textarea
                    className="form-control"
                    rows="6"
                    value={text}
                    id='myTextAreaPreview'
                    readOnly
                ></textarea>
            </p>
        </div>
    )
}

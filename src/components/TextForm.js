import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here...');

    let word_count = 0;
    text.split(" ").forEach((word, i) => {
      if (word.length > 0) ++word_count;
    });
    const isEmpty = ()=>{
      let not_empty = false;
      (word_count > 0) ? not_empty = true :
      props.showAlert("Enter some text to analyze it.", "danger");
      return not_empty;
    }

    const convertToUpper = (event)=>{
      if (isEmpty()){
        setText(text.toUpperCase());
        props.showAlert("Your text has been coverted to Uppercase successfully.", "success");
      }
    }
    const convertToLower = (event)=>{
      if (isEmpty()){
        setText(text.toLowerCase());
        props.showAlert("Your text has been coverted to Lowercase successfully.", "success");
      }
    }
    const removeExtSpaces = (event)=>{
      if (isEmpty()){
        let new_text = text.split(/[ ]+/);
        setText(new_text.join(" "));
        props.showAlert("Your text's extra spaces has been removed successfully.", "success");
      }
    }
    const capitalizeMe = (event)=>{
      if (isEmpty()){
        let new_text = text.split(" ");
        new_text.forEach((word, i) => {
          new_text[i] = word.charAt(0).toUpperCase() + word.substr(1,).toLowerCase();
        });
        setText(new_text.join(" "));
        props.showAlert("Your text has been Capitalized successfully.", "success");
      }
    }
    const copyText = (event)=>{
      if (isEmpty()){
        let text = document.getElementById('user_input');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
      }
    }
    const clearText = (event)=>{
        let new_text = '';
        setText(new_text);
        props.showAlert("Cleared text!", "success");
    }
    const handleOnChange = (event)=>{
      setText(event.target.value);
    }

    return (
      <>
      <div className="container">
        <h1>{props.heading}:</h1>
        <div className="mb-3">
          <textarea className={`form-control ${(props.mode === 'light') ? 'text-dark bg-light':'text-light bg-dark'}`} id="user_input" onChange={handleOnChange} value={text} rows="5"></textarea>
        </div>
        <button className="btn btn-primary m-1" onClick={convertToUpper}>Convert to Uppercase</button>
        <button className="btn btn-primary m-1" onClick={copyText}>Copy</button>
        <button className="btn btn-primary m-1" onClick={convertToLower}>Convert to Lowercase</button>
        <button className="btn btn-primary m-1" onClick={clearText}>Clear</button>
        <button className="btn btn-primary m-1" onClick={removeExtSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary m-1" onClick={capitalizeMe}>Capitalize</button>
      </div>
      <div className="container my-3">
        <h2>Your text Summary:</h2>
        <p><b>{word_count}</b> words <b>| {text.trim().length}</b> characters <b>| {0.008 * word_count}</b> Minutes to read</p>
      </div>
      </>
    )
}

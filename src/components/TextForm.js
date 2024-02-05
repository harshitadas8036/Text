// react function based component shortcut: rfc

import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.onShowAlert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.onShowAlert("Converted to LowerCase","success");
  };
  
  const handleClearClick = () => {
    setText(" ");
    props.onShowAlert("Cleared","success");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    
    setText(event.target.value);
  };
  
  //Credits: A
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.onShowAlert("Copied","success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); // /[]+/ denotes the one or more occurence of space
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  //State
  // text="new text"; //wrong way to change the state
  //setText("new text"); //correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'? '#2b3e7c' : 'white' , color: props.mode==='dark'? 'white':'black'}}>
          </textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lower Case
        </button>

        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1> Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
      </div>
    </>
  );
}

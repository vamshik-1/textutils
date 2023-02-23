import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)

  }
  const handleLoClick = ()=>{ 
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)

  }
  const handleClearClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText)

  }
  const handleCopy = ()=>{
    // console.log("I am Copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleOnchange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  //setText("new Text");
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upper</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lower</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container">
      <h2>Page Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minitues read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

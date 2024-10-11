import React, { useState } from 'react';

function Textform(props) {
  const [text, setText] = useState("");
  const [darkMode, setDarkmode] = useState(false);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const ToUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const ToLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const Clear = () => {
    setText("");
    props.showAlert("Cleared all your text!", "success");
  };

  const RemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Removed extra spaces!", "success");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text copied to clipboard", "success");
        document.getSelection().removeAllRanges();
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };

  const wordsArray = text.trim().split(" ").filter((word) => word !== "");
  const wordCount = wordsArray.length;

  // Strip newlines when calculating character length
  const textWithoutNewlines = text.replace(/\n/g, '');
  const charCountWithoutNewlines = textWithoutNewlines.length;

  return (
    <>
      <div style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
              color: props.mode === "light" ? "black" : "white"
            }}
            onChange={changeHandler}
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button disabled={text.length === 0} onClick={ToUpperCase} className="btn btn-primary mx-1 my-1">
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} onClick={ToLowerCase} className="btn btn-primary mx-1 my-1">
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} onClick={Clear} className="btn btn-primary mx-1 my-1">
          Clear Text
        </button>
        <button disabled={text.length === 0} onClick={RemoveSpaces} className="btn btn-primary mx-1 my-1">
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} onClick={copyText} className="btn btn-primary mx-1 my-1">
          Copy
        </button>
      </div>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h1>Your Text Summary</h1>
        <p>No Of Words = {wordCount} | Length Of Characters (excluding newlines) = {charCountWithoutNewlines}</p>
        <p>Can be read in {0.008 * wordCount} minutes</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

export default Textform;

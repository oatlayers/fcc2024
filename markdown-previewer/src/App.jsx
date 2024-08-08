import React, { useState } from "react";
import Markdown from "react-markdown";

const Preview = ({ text }) => {
  const style = {
    border: "2px solid black",
    borderRadius: " 5px",
  };
  return (
    <div id="preview" style={style}>
      <h2>Preview</h2>
      <Markdown>{text}</Markdown>
    </div>
  );
};

const App = () => {
  const initialText = `
  # Header 1
  ## Header 2
  ### Header 3
  
  `;
  const [text, setText] = useState(initialText);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <h2>React Markdown Previewer</h2>

      <textarea
        onChange={handleChange}
        id="editor"
        rows="4"
        cols="50"
      ></textarea>
      <Preview text={text} />
    </>
  );
};

export default App;

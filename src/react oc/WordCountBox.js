import React, { useState } from 'react';
import './WordCount.css'; // Import the CSS file

function WordCountBox() {
  const [text, setText] = useState('');
  
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };
  
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  
  return (
    <div className='inner'>
      <textarea
        className='textbox'
        rows="6"
        cols="50"
        placeholder="Type your words here..."
        onChange={handleTextChange}
        value={text}
      />
      <p className='wordcount'>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCountBox;

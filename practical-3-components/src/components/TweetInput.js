import React, { useState } from 'react';

const TweetInput = () => {
  const [text, setText] = useState('');
  const MAX_CHARS = 50;

  // Logic to determine state
  const charCount = text.length;
  const isOverLimit = charCount > MAX_CHARS;
  const isEmpty = charCount === 0;
  
  // Requirement: Disabled if empty OR exceeds 50
  const isButtonDisabled = isEmpty || isOverLimit;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleTweet = () => {
    alert(`Tweet submitted: ${text}`);
    setText(''); // clear input
  };

  return (
    <div style={styles.container}>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="What's happening?"
        style={styles.textarea}
      />
      
      <div style={styles.footer}>
        {/* Requirement: Visual feedback (turns red) */}
        <span style={{ 
          ...styles.counter, 
          color: isOverLimit ? 'red' : 'gray' 
        }}>
          {charCount} / {MAX_CHARS}
        </span>

        <button 
          onClick={handleTweet} 
          disabled={isButtonDisabled}
          style={{
            ...styles.button,
            backgroundColor: isButtonDisabled ? '#ccc' : '#1DA1F2',
            cursor: isButtonDisabled ? 'not-allowed' : 'pointer'
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

// Simple inline styles for layout
const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #e1e8ed',
    borderRadius: '10px',
    padding: '15px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    border: 'none',
    resize: 'none',
    outline: 'none',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #e1e8ed',
    paddingTop: '10px',
  },
  counter: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    fontWeight: 'bold',
  }
};

export default TweetInput;
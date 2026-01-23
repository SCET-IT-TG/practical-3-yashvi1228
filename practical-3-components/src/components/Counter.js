import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      textAlign: 'center' 
    }}>
      <h3>Counter: {count}</h3>
      
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ 
          marginRight: '10px', 
          padding: '5px 10px',
          backgroundColor: 'green', // Green background
          color: 'white',           // White text
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
      
      <button 
        onClick={() => setCount(count - 1)}
        style={{ 
          padding: '5px 10px',
          cursor: 'pointer',
          backgroundColor: 'red', 
          color: 'white',           
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
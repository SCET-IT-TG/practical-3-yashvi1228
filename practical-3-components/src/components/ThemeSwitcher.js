import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      backgroundColor: isDark ? '#333' : '#fff', // Visual distinction
      color: isDark ? '#fff' : '#000',           // Text color change
      padding: '20px',
      border: '1px solid #ccc',
      textAlign: 'center',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}>
      <p>
        This is a preview of the theme switcher component. 
        Click the button to toggle between light and dark modes.
      </p>

      <button onClick={() => setIsDark(!isDark)}>
        {/* Dynamic button text */}
        Switch to {isDark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;
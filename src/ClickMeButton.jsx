import React, { useState } from 'react';

function ClickMeButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      style={{
        padding: '0.5em 1em',
        fontSize: '1.1em',
        marginTop: '1em',
        backgroundColor: '#61dafb',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
      onClick={() => setCount(count + 1)}
    >
      Click Me! {count > 0 && <span>({count})</span>}
    </button>
  );
}

export default ClickMeButton;
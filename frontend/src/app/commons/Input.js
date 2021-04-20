import React, { useState, Fragment } from 'react';

function Input() {
  const [input, setInput] = useState('');
  return (
    <Fragment>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </Fragment>
  );
}

export default Input;

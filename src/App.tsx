import React, { useState } from 'react';
import './App.css';
import { AppContext } from './AppContext';
import Basic from './Basic';
import Person from './Person';
import Text from './Text';

export default function App() {
  const [count, setCount] = useState('');
  const [text, setText] = useState('');

  function handleDataFromChild(data: string) {
    setCount(data);
  }

  return (
    <>
      <h1 style={{ textDecoration: 'underline' }}>
        React Component Communication
      </h1>

      {/* React component with props */}
      <div className="parent-container">
        <h3>Parent Component</h3>
        <h4>Message: {count}</h4>
        <Basic
          message={'You are a child component'}
          sendDataToParent={handleDataFromChild}
        />
      </div>

      {/* context API based component */}
      <AppContext.Provider
        value={React.useMemo(() => ({ text, setText }), [text, setText])}
      >
        <Text />
      </AppContext.Provider>

      {/* React component with context - Person component */}
      <Person />
    </>
  );
}

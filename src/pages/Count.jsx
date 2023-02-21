import React, { useState } from 'react';
import { useEffect } from 'react';

function Example() {
  // Declare a state variable called "count" and initialize it to 0
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('fish-head');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    document.title = "You clicked a button!";
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000); 

  return (
    clearInterval(intervalId);
  };
}, [count]);

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 4)}>
        Click me
      </button>


      <form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>

    <p>Feature is {isEnabled ? 'enabled' : 'disabled'}</p>
      <button onClick={() => setIsEnabled(!isEnabled)}>
        Toggle feature
      </button>

      <button onClick={ ()=>setCount(count+4)}>my button</button>
    </div>
  );
}
export default Example;
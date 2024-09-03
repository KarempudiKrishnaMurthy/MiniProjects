import React, { useState, useEffect } from 'react';

function PageTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Log when useEffect runs
    console.log('useEffect is running');
    document.title = `Count is ${count}`;
    console.log(`Document title set to: Count is ${count}`);
  }, [count]); // Dependency array: effect runs when 'count' changes

  // Log when the component renders
  console.log('Component is rendering');
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default PageTitle;

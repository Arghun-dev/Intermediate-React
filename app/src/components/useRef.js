import { useRef, useState } from 'react';

const UseRef = () => {
  const [num, setNum] = useState(0);
  const numRef = useRef(0);

  const incrementAndLogInDelay = () => {
    setNum(num + 1);
    numRef.current++;
    setTimeout(() => {
      alert(`state: ${num} | ref: ${numRef.current}`)
    }, 1000)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>state: {num}</h2>
      <hr />
      <h2>ref: {numRef.current}</h2>
      <hr />
      <button onClick={incrementAndLogInDelay}>Increment</button>
    </div>
  )
}

export default UseRef;
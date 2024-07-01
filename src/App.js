
import { useState } from 'react';
import './App.css';

function App() {


  const [count, setCount] = useState(0)


  const handleIncrement = () => {

    setCount(count + 1)
    console.log('handleIncrement')
  }

  const handleDecrement = () => {



    setCount(count - 1)
    console.log('handleDecrement')
  }

  const handleReset = () => {


    setCount(0)
    console.log('handleReset')
  }
  return (
    <div className='app-container' >

      <h1 className='title'>Counter App</h1>

      <div className='counter-display'>{count}</div>

      <div className='button-container'>
        <button className='button increment' onClick={handleIncrement}>Increment</button>
        <button className='button decrement' onClick={handleDecrement}>Decrement</button>
        <button className='button reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

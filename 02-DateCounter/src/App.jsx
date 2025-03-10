import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("feb 17 2025");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button className='button'
          onClick={() =>
            setStep((c) =>
              c - 1)}>-
        </button>

        <span>Step: {step}</span>

        <button className='button'
          onClick={() =>
            setStep((c) =>
              c + 1)}>+
        </button>
      </div>

      <div>
        <button className='button'
          onClick={() =>
            setCount((c) =>
              c - step)}>-</button>

        <span>Count: {count}</span>

        <button className='button'
          onClick={() =>
            setCount((c) =>
              c + step)}>+</button>
      </div>

      <p className='date'>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App

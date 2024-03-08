import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleClick = () => {

    if (inputValue.trim() !== '') {
      setTodos([...todos , inputValue.trim()]);
      setInputValue('');
    }
  };
  const handleKey = (event) => {
    if (event.key==="Enter"){
      handleClick()
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  

  return (
    <div className='bg-slate-800 w-screen h-screen flex justify-center'>
      <div className="wrapper flex flex-col items-center mt-64  w-2/3">
        <div className="box1 rounded-xl border-black border-2 flex h-16 w-2/3">
          <input
            className='bg-gray-400 rounded-xl text-blue-900 text-center text-3xl w-5/6'
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          <button
            onClick={handleClick}
            className='rounded-xl bg-green-500 w-1/6'
          >
            Add
          </button>
        </div>
        <div className="box2 text-white bg-slate-900 border-slate-800 border-4 mt-4 w-2/3">
          {todos.map((todo, index) => (
            
            <Todo todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

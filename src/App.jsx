import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [inputDate, setInputDate] = useState(null)

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos , {id:new Date().toUTCString(),text:inputValue.trim(),deadline:inputDate}]);
      setInputValue('');
      console.log(inputDate);
      setInputDate(null)
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
  const handleDate = (event) => {
    setInputDate(event.target.value);
  };

  const todoDelete = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='bg-slate-900 w-screen h-screen '>
      <div className="wrapper flex flex-col items-center p-8 ">
        <div className="box1 rounded-xl border-black border-2 flex h-16 mt-8 w-full  ">
          <input
            className='bg-gray-400 rounded-xl text-blue-900 text-center text-3xl w-4/6'
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKey}
          />
          
          <div className='w-1/6  flex text-green-600'>
          <label htmlFor="datetime">
            <button >Enter Deadline</button>
          </label>
          <input 
          className=''
            type="datetime-local" 
            id="datetime" 
            name="datetime"
            value={inputDate}
            onChange={handleDate}
          />
          </div>


          <button
            onClick={handleClick}
            className='rounded-xl bg-green-500 w-1/6'
          >
            Add
          </button>
        </div>
        <div className="box2 text-white bg-slate-900 border-slate-800 border-4 mt-4 w-full">
          {todos.map((todo, index) => (
            
            <Todo todo={todo} id={todo.id} todoDelete={todoDelete}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

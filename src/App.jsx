import React, { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('');
  var Todos=[]

    const handleClick = () => {
      Todos.push(inputValue)
      console.log("Input value:", Todos);
        
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
  
  
  return (
    <>
    <div className='bg-slate-800 w-screen h-screen flex items-center justify-center'>
      <div className="wrapper flex flex-col items-center w-2/3">
        <div className="box1 rounded-xl border-black border-2 flex h-16 w-2/3">
          <input
              className='bg-gray-400 rounded-xl text-blue-900 text-center text-3xl w-5/6'
              type="text"
              value={inputValue}
              onChange={handleChange}
          />
          <button
              onClick={handleClick}
              className=' rounded-xl bg-green-500 w-1/6'
          >
              Add
          </button>
        </div>
        <div className="box2 text-white border-black border-4 mt-4 w-2/3">
              
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
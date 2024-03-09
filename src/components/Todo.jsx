import React from 'react';

function Todo({ todo,todoDelete}) {
    
    // console.log(todo);
    const handleDelete = ()=>{
        todoDelete(todo.id)
        

    }
    const handleDetail = ()=>{

    }

  return (
    <div className="card bg-green-700 rounded-xl w-full h-14 p-2 flex border-green-950 border-2 text-gray-800  bold text-xl">
        <div className="time butt w-1/6 flex items-center justify-center text-sm">
            <p >{todo.id}</p>
        </div>
        <div className="todo w-3/6 flex items-center justify-center">
            <h1><strong className=''>{todo.text}</strong></h1>
        </div>
        <div className="w-1/6 flex items-center justify-center text-sm">
            <p>Time Left {todo.timeleft}</p>
            {/* <p>{todo.deadline}</p> */}
        </div>
        <div className="butt w-1/6 flex items-center justify-center -mt-3 ">
            <button 
            className='text-5xl mr-4' 
            // onClick={handleDetail}
                > <h1> + </h1> 
            </button>
            <button 
            className='text-6xl' 
            onClick={handleDelete}
             > <h1> - </h1> 
            </button>
        </div>
      
    </div>
  );
}

export default Todo;

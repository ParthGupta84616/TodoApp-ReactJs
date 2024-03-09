import React, { useEffect, useState } from 'react';

function Todo({ todo, todoDelete }) {
    const [minuteLeft, setMinuteLeft] = useState(todo.minleft);
    const [bg, setBg] = useState("bg-red-500");
    

    useEffect(() => {
        const timer = setInterval(() => {
            setMinuteLeft(prevMinuteLeft => {
                const newMinuteLeft = prevMinuteLeft - 1; 
                console.log(newMinuteLeft); 
                return newMinuteLeft; 
            }); 
            if (minuteLeft - 1 >= 4320) {
                setBg("bg-green-200");
            }
            else if (minuteLeft - 1 >= 1440) {
                setBg("bg-green-300");
            }
            else if (minuteLeft - 1 >= 720) {
                setBg("bg-green-400");
            }
            else if (minuteLeft - 1 >= 180 ) {
                setBg("bg-green-500");
            }
            else if (minuteLeft - 1 >= 60) {
                setBg("bg-green-600");
            }
            else if (minuteLeft - 1 >= 30 ) {
                setBg("bg-green-700");
            }
            else if (minuteLeft - 1 >= 10 ) {
                setBg("bg-green-800");
            }
            else if (minuteLeft - 1 >= 5) {
                setBg("bg-green-900");
            }
            else{
                setBg("bg-red-800");
            }

        }, 3000);
    
        return () => clearInterval(timer);
    }, );
    

    const handleDelete = () => {
        todoDelete(todo.id);
    };

    const handleDetail = () => {
        // Handle detail logic
    };

    return (
        <div className={`card  rounded-xl ${bg} w-full h-14 p-2 flex border-green-950 border-2 text-gray-800  bold text-xl`}>
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
                <button className='text-5xl mr-4' /* onClick={handleDetail} */> <h1> + </h1> </button>
                <button className='text-6xl' onClick={handleDelete}> <h1> - </h1> </button>
            </div>
        </div>
    );
}

export default Todo;

import React, { useEffect, useState } from 'react';

function Todo({ todo, todoDelete }) {
    const [minuteLeft, setMinuteLeft] = useState(todo.minleft);
    const [inputValue, setInputValue] = useState('');
    const [bg, setBg] = useState("bg-red-500");
    const [TimeLeft, setTimeLeft] = useState(todo.timeleft)
    const [dropdown, setdropdown] = useState(false)
    const [Description, setDescription] = useState("")
    

    useEffect(() => {
        const timer = setInterval(() => {
            setMinuteLeft(prevMinuteLeft => {
                const newMinuteLeft = prevMinuteLeft - 1; 
                return newMinuteLeft; 
            }); 
            let differenceInMilliseconds = minuteLeft*60*1000;
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
            
            let days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60)/24)
            let Hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60)%24);
            let Minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            let left = `${days}d:${Hours}h:${Minutes}m`;
            setTimeLeft(left)
            

        }, 60000);
    
        return () => clearInterval(timer);
    }, );
    

    const handleDelete = () => {
        todoDelete(todo.id);
    };

    const handleDetail = () => {
        setdropdown(!dropdown)
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    const handleSubmit= ()=>{
        if (inputValue.trim() !== ''){
            setDescription(inputValue)
            setdropdown(false)
        }
    }
    const handleKey = (event) => {
        if (event.key==="Enter"){
            handleSubmit()
        }
      }
    return (
        <>
        <div className={`card  rounded-xl ${bg}  md:h-14 p-2 flex  border-green-950 border-2 text-gray-800  bold md:text-sm text-xs`}>
            <div className="time butt md:w-1/6 w-1/4 flex items-center justify-center ">
                <p >{todo.id}</p>
            </div>
            <div className="todo md:w-3/6 w-1/2 w- flex items-center justify-center">
                <h1><strong className='text-xl'>{todo.text}</strong></h1>
            </div>
            <div className="md:w-1/6 w-1/6 flex items-center justify-center text-sm">
                <p>Time Left {TimeLeft}</p>
            </div>
            <div className="butt w-1/6 flex items-center justify-center -mt-3 ">
                <button className='text-5xl mr-4' onClick={handleDetail}> <h1> + </h1> </button>
                <button className='text-6xl' onClick={handleDelete}> <h1> - </h1> </button>
            </div>
        </div>
        {!dropdown?(
        <div className="text flex w-full p-2 transition-all duration-300" >
            <div className="dis md:w-1/6 w-1/4 md:text-xl flex items-center justify-center text-sm ">
                <h1><strong>Description</strong></h1>
            </div>
            <div className="input w-9/12">
                <p className="w-full px-2 py-1 bg-slate-800 text-gray-400 text-xl border border-gray-400 rounded font-bold p-3 min-h-10">{Description}</p>
            </div>
        </div>
    )
        :
    (
        <div className="dropdown flex w-full p-2 md:h-36 h-20 transition-all duration-300">
            <div className="dis md:w-1/6 w-1/4 md:text-xl flex items-center justify-center text-sm p-1 ">
                <h1><strong>Description</strong></h1>
            </div>
            <div className="input w-9/12">
                <textarea 
                className="w-full px-2 py-1 md:h-32  bg-slate-800 text-gray-400 text-xl border border-gray-400 rounded font-bold p-3"
                onChange={handleChange}
                value={inputValue}
                onKeyDown={handleKey}
                />
            </div>
            <div className="dis md:w-1/6 flex items-center justify-center p-1">
                <button 
                className="bg-blue-500 text-white md:px-4 px-2 py-2 rounded-md"
                onClick={handleSubmit}
                ><strong>Submit</strong></button>
            </div>
        </div>
    )
}

        </>
    );
}

export default Todo;

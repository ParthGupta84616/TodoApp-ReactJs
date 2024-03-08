import React from 'react';

function Todo({ todo }) {
  return (
    <div className="card bg-green-700 rounded-xl w-full h-14 p-2 border-green-950 border-2 text-gray-800 flex items-center justify-center bold text-xl">
      <h1><strong>{todo}</strong></h1>
    </div>
  );
}

export default Todo;

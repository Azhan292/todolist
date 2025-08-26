import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// ✅ Correct environment variable
const baseUrl = process.env.REACT_APP_BASE_URL;

function Home() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${baseUrl}/todo/todo/`);
      setTodos(res.data);
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${baseUrl}/todo/todo/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">ToDo List</h1>
      <button
        onClick={() => navigate("/add")}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center p-4 bg-white rounded shadow"
          >
            <span className="text-gray-700">{todo.title}</span>
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/edit/${todo._id}`)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const baseUrl = process.env.BASE_URL;
// function Home() {
//   const [todos, setTodos] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = async () => {
//     try {
//       const res = await axios.get(`${baseUrl}/todo/todo/`);
//       setTodos(res.data);
//     } catch (err) {
//       console.error("Failed to fetch todos:", err);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${baseUrl}/todo/todo/${id}`);
//       setTodos(todos.filter((todo) => todo._id !== id));
//     } catch (err) {
//       console.error("Failed to delete todo:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">ToDo List</h1>
//       <button
//         onClick={() => navigate("/add")}
//         className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Add Todo
//       </button>
//       <ul className="space-y-4">
//         {todos.map((todo) => (
//           <li
//             key={todo._id}
//             className="flex justify-between items-center p-4 bg-white rounded shadow"
//           >
//             <span className="text-gray-700">{todo.title}</span>
//             <div className="space-x-2">
//               <button
//                 onClick={() => navigate(`/edit/${todo._id}`)}
//                 className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteTodo(todo._id)}
//                 className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;

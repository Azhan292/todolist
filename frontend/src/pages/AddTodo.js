import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Correctly load the environment variable
const baseUrl = process.env.REACT_APP_BASE_URL;

function AddTodo() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Debug log to confirm the URL is defined
    console.log("Base URL is:", baseUrl);

    if (!baseUrl) {
      alert("Base URL is not set. Check your .env file.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/todo/todo/`, {
        title: text,
      });

      console.log("Todo created:", response.data);
      navigate("/"); // Redirect after success
    } catch (error) {
      console.error(
        "Error creating todo:",
        error.response?.data || error.message
      );
      alert("Failed to create todo");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Todo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Save
      </button>
    </form>
  );
}

export default AddTodo;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const baseUrl = process.env.REACT_APP_BASE_URL;
// function AddTodo() {
//   const [text, setText] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`${baseUrl}/todo/todo/`, {
//         title: text,
//       });
//       console.log("v", response);
//       console.log("Todo created:", response.data);
//       navigate("/"); // Redirect to home or todo list
//     } catch (error) {
//       console.error(
//         "Error creating todo:",
//         error.response?.data || error.message
//       );
//       alert("Failed to create todo");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Todo</h2>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         required
//         className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
//         placeholder="Enter a task"
//       />
//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//       >
//         Save
//       </button>
//     </form>
//   );
// }

// export default AddTodo;

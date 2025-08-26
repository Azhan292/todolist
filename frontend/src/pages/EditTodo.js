import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// ✅ Use correct environment variable prefix
const baseUrl = process.env.REACT_APP_BASE_URL;

function EditTodo() {
  const { id } = useParams(); // backend _id
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!baseUrl) {
      alert("Base URL is not set. Check your .env file.");
      return;
    }

    axios
      .get(`${baseUrl}/todo/todo/${id}`)
      .then((res) => setText(res.data.title))
      .catch((err) => {
        console.error("Failed to fetch todo:", err);
        alert("Todo not found");
        navigate("/");
      });
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!baseUrl) {
      alert("Base URL is not set. Check your .env file.");
      return;
    }

    try {
      await axios.put(`${baseUrl}/todo/todo/${id}`, {
        title: text,
      });
      navigate("/");
    } catch (err) {
      console.error("Update failed:", err.response?.data || err.message);
      alert("Failed to update todo");
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Todo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
        placeholder="Update your task"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </form>
  );
}

export default EditTodo;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// const baseUrl = process.env.BASE_URL;
// function EditTodo() {
//   const { id } = useParams(); // backend _id, assumed
//   const [text, setText] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch the current todo from backend
//     axios
//       .get(`${baseUrl}/todo/todo/${id}`)
//       .then((res) => setText(res.data.title))
//       .catch((err) => {
//         console.error("Failed to fetch todo:", err);
//         alert("Todo not found");
//         navigate("/");
//       });
//   }, [id, navigate]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`${baseUrl}/todo/todo/${id}`, {
//         title: text,
//       });
//       navigate("/");
//     } catch (err) {
//       console.error("Update failed:", err.response?.data || err.message);
//       alert("Failed to update todo");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleUpdate}
//       className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
//     >
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Todo</h2>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         required
//         className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400"
//         placeholder="Update your task"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//       >
//         Update
//       </button>
//     </form>
//   );
// }

// export default EditTodo;

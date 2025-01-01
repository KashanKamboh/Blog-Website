// "use client"
// import React, { useState } from 'react';

// const CommentSection: React.FC = () => {
//   const [comments, setComments] = useState<string[]>([]);
//   const [comment, setComment] = useState<string>('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (comment.trim()) {
//       setComments([...comments, comment]);
//       setComment('');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
//         Comments
//       </h1>
//       <form onSubmit={handleSubmit} className="mb-6">
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Write your comment here..."
//           rows={4}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
//         />
//         <button
//           type="submit"
//           className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-00 transition duration-300 w-full sm:w-auto"
//         >
//           Add Comment
//         </button>
//       </form>

//       <div>
//         <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">
//           All Comments:
//         </h2>
//         {comments.length > 0 ? (
//           <ul className="space-y-4">
//             {comments.map((c, index) => (
//               <li
//                 key={index}
//                 className="p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200 text-sm sm:text-base"
//               >
//                 {c}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 text-sm sm:text-base">
//             No comments yet. Be the first to add one!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;
"use client";
import React, { useState, useEffect } from "react";

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]); // All comments
  const [comment, setComment] = useState<string>(""); // Current input comment
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Edit mode index
  const [editingText, setEditingText] = useState<string>(""); // Temporary edit text

  // Load comments from localStorage on first render
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments)); // Load and parse saved comments
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]); // Add new comment to the list
      setComment(""); // Clear the input
    }
  };

  // Delete a comment
  const handleDelete = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments); // Update comments list
  };

  // Enable edit mode
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditingText(comments[index]); // Set current comment text to edit
  };

  // Save the edited comment
  const handleSaveEdit = () => {
    if (editingIndex !== null && editingText.trim()) {
      const updatedComments = comments.map((c, i) =>
        i === editingIndex ? editingText : c
      );
      setComments(updatedComments);
      setEditingIndex(null); // Exit edit mode
      setEditingText(""); // Clear temporary text
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Comments</h1>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 w-full sm:w-auto"
        >
          Add Comment
        </button>
      </form>

      {/* Display Comments */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-700">All Comments:</h2>

        {comments.length > 0 ? (
          <ul className="space-y-4">
            {comments.map((c, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-200 text-sm sm:text-base flex justify-between items-center"
              >
                {editingIndex === index ? (
                  <div className="flex-grow">
                    <textarea
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={handleSaveEdit}
                        className="mr-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition duration-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="flex-grow">{c}</span>
                    <div className="ml-4 flex space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-white bg-blue-700 hover:bg-blue-800 w-16 h-8 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-white bg-red-700 hover:bg-red-800 w-16 h-8 rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm sm:text-base">
            No comments yet. Be the first to add one!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;







import React, { useState, useEffect, useRef } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [shoeSuccessMessage, setShoeSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const {value: comment} = commentEl.current;
    const {value: name} = El.current;
    const {value: email} = emailEl.current;
    const {checked: storeData} = storeDataEl.current;

    if (!commentEl || !nameEl || !emailEl) {
      setError(true)
      return;
    }

    if (storeData) {
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }

    const commentObj = {
      name, email, comment, slug
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold pb-4 border-b"></h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          name="comment"
          ref={commentEl}
          id=""
          placeholder="Comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          ref={emailEl}
          className="px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="container">
          <input type="checkbox" id="storeData" name="storeData" ref={storeDataEl} >
            <label className="cursor-pointer text-gray-500 ml-2">Save my name and email for the next time I comment</label>
          </input>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSucessMessage && (
          <span className="mt-3 text-green-500 text-xl float-right font-semibold">
            comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;

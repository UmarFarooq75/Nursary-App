"use client";
import React, { useState } from "react";
const PostQuestionModal = ({ show, setShowModal }: any) => {
  const [question, setQuestion] = useState("");

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0  bg-opacity-50 ${
        show ? "backdrop-blur-sm" : ""
      } flex items-center justify-center z-50`}
    >
      <div className="bg-white p-6 rounded-lg shadow-xl border w-2/5 h-2/8 max-w-2xl">
        <div className="flex justify-between items-center">
          <h5 className="text-xl font-medium">Post Your Question</h5>
          <button
            onClick={() => setShowModal(false)}
            className="p-1 rounded-md hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6m-12 0l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4 mb-6">
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700"
          >
            Your Question:
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostQuestionModal;

"use client";
import React, { useState } from "react";
import PostQuestionModal from "./qmodal/page";
import Navbar from "../navbar/page";

const discussions = [
  {
    id: 1,
    user: {
      name: "John Doe",
      image: "https://via.placeholder.com/50",
    },
    question: "What is the best way to learn React?",
    date: "April 15, 2024",
    answers: [
      {
        user: {
          name: "Alice Johnson",
          image: "https://via.placeholder.com/50",
        },
        content: "The best way is by building projects and learning as you go!",
      },
      {
        user: {
          name: "Bob Smith",
          image: "https://via.placeholder.com/50",
        },
        content:
          "I recommend checking out the official React documentation and some online courses.",
      },
    ],
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      image: "https://via.placeholder.com/50",
    },
    question: "How do I use hooks in functional components?",
    date: "April 16, 2024",
    answers: [],
  },
  {
    id: 3,
    user: {
      name: "Alice Johnson",
      image: "https://via.placeholder.com/50",
    },
    question: "What are the benefits of using Redux?",
    date: "April 17, 2024",
    answers: [
      {
        user: {
          name: "John Doe",
          image: "https://via.placeholder.com/50",
        },
        content: "Redux helps manage application state in a predictable way.",
      },
    ],
  },
];

const DiscussionPage = () => {
  const [showAnswerBox, setShowAnswerBox] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const handleModalToggle = () => {
    setModalShow(!modalShow);
  };

  const handleWriteClick = (id) => {
    setShowAnswerBox((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle visibility for a specific discussion
    }));
  };

  const handleSeeAnswersClick = (id) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle visibility for a specific discussion
    }));
  };

  return (
    <>
      <Navbar />
      <div className="w-[85%] mx-auto p-5">
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold">Discussion</h1>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleModalToggle}
            >
              Post Question
            </button>
          </div>
        </div>
        {modalShow && (
          <PostQuestionModal show={modalShow} setShowModal={setModalShow} />
        )}
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-white p-4 shadow-lg mb-6 rounded-lg space-x-2 space-y-2 flex items-start border border-gray-200"
          >
            <div className="flex flex-col items-center mr-4">
              <img
                src={discussion.user.image}
                alt={discussion.user.name}
                className="w-12 h-12 rounded-full"
              />
              <span className="text-sm">{discussion.user.name}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-lg">{discussion.question}</h2>
                <div className="flex items-center">
                  <button className="p-2">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <button className="p-2">
                    <i className="fas fa-flag"></i>
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => handleWriteClick(discussion.id)}
                >
                  Write an answer
                </button>
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => handleSeeAnswersClick(discussion.id)}
                >
                  See the answers ({discussion.answers.length})
                </button>
              </div>
              {showAnswerBox[discussion.id] && (
                <div className="mt-4 bg-gray-100 p-4 rounded shadow">
                  <textarea
                    className="w-full h-24 p-2 mb-4 border border-gray-300 rounded"
                    placeholder="Write your answer here..."
                  ></textarea>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit Answer
                  </button>
                </div>
              )}
              {showAnswers[discussion.id] && (
                <div className="mt-4">
                  {discussion.answers.map((answer, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 p-4 rounded shadow mb-4"
                    >
                      <div className="flex items-center">
                        <img
                          src={answer.user.image}
                          alt={answer.user.name}
                          className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="font-semibold">
                          {answer.user.name}
                        </span>
                      </div>
                      <p className="mt-2">{answer.content}</p>
                    </div>
                  ))}
                  {discussion.answers.length === 0 && <p>No answers yet.</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiscussionPage;

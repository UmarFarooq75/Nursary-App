"use client";
import React, { useState } from "react";
import Navbar from "../navbar/page";

const QuizPage = () => {
  const [answers, setAnswers] = useState({}); // To store user answers

  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Berlin"],
      correct: "Paris",
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: "4",
    },
    {
      id: 3,
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
      correct: "Da Vinci",
    },
    {
      id: 4,
      question: "What is the capital of France?",
      options: ["New York", "London", "Paris", "Berlin"],
      correct: "Paris",
    },
    {
      id: 5,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correct: "4",
    },
    {
      id: 6,
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
      correct: "Da Vinci",
    },
  ];

  const handleOptionChange = (questionId: any, option: any) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    console.log(answers);
    alert("Quiz submitted! Check the console for answers.");
  };

  return (
    <>
      <Navbar />
      <div className=" mx-auto p-5 w-[94%]">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz</h1>
        <div className="lg:ml-20">
          <p className="mb-2 font-semibold text-xl">
            Total MCQs: {questions.length}{" "}
          </p>
          <div className="flex justify-end lg:mr-16">
            <p className="font-semibold ">Timer : {"70 mins"}</p>
          </div>
          <p className="mb-7 text-red-600 text-xl">
            Guidelines: Choose the correct answer for each question below.
          </p>
        </div>
        {questions.map((question) => (
          <div
            key={question.id}
            className="relative bg-white p-4 shadow-md rounded-r-lg rounded-l-3xl mb-4 border border-gray-200 w-[90%] mx-auto"
            style={{ paddingLeft: "40px" }}
          >
            <div className="absolute top-0 bottom-0 left-0 w-3 bg-green-500 rounded-l-3xl"></div>
            <h2 className="text-lg font-semibold">{question.question}</h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {question.options.map((option) => (
                <label key={option} className="block">
                  <input
                    type="radio"
                    name={`question${question.id}`}
                    value={option}
                    onChange={() => handleOptionChange(question.id, option)}
                    checked={answers[question.id] === option}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className="flex justify-end">
              <button className="mt-4 lg:w-[10%] py-2 px-2 shadow-xl shadow-green-900 bg-green-500 text-white rounded-lg hover:bg-green-600">
                Submit
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-end lg:mr-20">
          <button className="mt-4 lg:w-[13%] py-2 px-2 shadow-xl shadow-green-900 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit Results
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizPage;

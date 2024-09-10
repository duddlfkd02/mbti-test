import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 p-4 bg-gray-100 rounded shadow-md"
    >
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-3 text-base">{q.question}</p>
          {q.options.map((option, i) => (
            <label key={i} className="inline-block align-middle">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
                className="mx-2 peer h-3 w-3 cursor-pointer appearance-none rounded-full border border-slate-500 checked:bg-indigo-400 transition-all"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-2 rounded-full transition"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;

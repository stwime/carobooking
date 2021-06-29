import React, { useRef, useState } from 'react';

export default function QuizletEmbed({ quizletLink }) {
  const [doShowQuizlet, setShowQuizlet] = useState(false);

  return (
    <>
      {!doShowQuizlet && (
        <button
          className="gradient rounded-md text-white hover:bg-gray-200 lg:px-3 py-2 px-1 rounded-md text-md font-bold"
          onClick={() => setShowQuizlet(true)}>
          Practice Vocabulary here
        </button>
      )}
      {doShowQuizlet && (
        <iframe src={quizletLink} height="500" width="100%"></iframe>
      )}
    </>
  );
}

import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question";

export default function Summary({ userAnswers }) {
  const totalQuestions = QUESTIONS.length;
  const skipped = userAnswers.filter((answer) => answer === null).length;
  const correct = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].correct
  ).length;
  const incorrect = totalQuestions - correct - skipped;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Quiz Completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correct}</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{incorrect}</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].correct) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

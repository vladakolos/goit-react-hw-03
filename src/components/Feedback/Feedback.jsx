const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total feedbacks: {total}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
// const Feedback = ({ text, value }) => {
//   return (
//     <div>
//       <p>
//         {text}: {value}
//       </p>
//     </div>
//   );
// };

// export default Feedback;

import css from "../Options/Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </>
  );
};

export default Options;

// const Options = ({ text, updateFeedback, resetFeedback, totalFeedback }) => {
//   const handleClick = () => {
//     updateFeedback();
//   };

//   const handleReset = () => {
//     resetFeedback();
//   };

//   return (
//     <>
//       <button
//         className={css.btn}
//         onClick={totalFeedback > 0 ? handleReset : handleClick}
//       >
//         {" "}
//         {text}
//       </button>
//     </>
//   );
// };

// export default Options;

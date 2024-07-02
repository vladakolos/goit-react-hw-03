import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";
import Notification from "../../Notifications/Notifications";

export default function App() {
  const [good, setGood] = useState(() => {
    const savedClicks = JSON.parse(
      window.localStorage.getItem("saved-good-clicks")
    );
    return savedClicks !== null ? savedClicks : 0;
  });

  const [neutral, setNeutral] = useState(() => {
    const savedClicks = JSON.parse(
      window.localStorage.getItem("saved-neutral-clicks")
    );
    return savedClicks !== null ? savedClicks : 0;
  });

  const [bad, setBad] = useState(() => {
    const savedClicks = JSON.parse(
      window.localStorage.getItem("saved-bad-clicks")
    );
    return savedClicks !== null ? savedClicks : 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-good-clicks", JSON.stringify(good));
    window.localStorage.setItem(
      "saved-neutral-clicks",
      JSON.stringify(neutral)
    );
    window.localStorage.setItem("saved-bad-clicks", JSON.stringify(bad));
  }, [good, neutral, bad]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setGood(good + 1);
    } else if (feedbackType === "neutral") {
      setNeutral(neutral + 1);
    } else if (feedbackType === "bad") {
      setBad(bad + 1);
    }
  };

  const resetFeedback = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message="No Feedback yet" />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      )}
    </>
  );
}

// export default function App() {
//   const [good, setGood] = useState(() => {
//     const savedClicks = JSON.parse(
//       window.localStorage.getItem("saved-good-clicks")
//     );
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });
//   const [neutral, setNeutral] = useState(() => {
//     const savedClicks = JSON.parse(
//       window.localStorage.getItem("saved-neutral-clicks")
//     );
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });
//   const [bad, setBad] = useState(() => {
//     const savedClicks = JSON.parse(
//       window.localStorage.getItem("saved-bad-clicks")
//     );
//     if (savedClicks !== null) {
//       return savedClicks;
//     }
//     return 0;
//   });

//   useEffect(() => {
//     window.localStorage.setItem("saved-good-clicks", JSON.stringify(good));
//     window.localStorage.setItem(
//       "saved-neutral-clicks",
//       JSON.stringify(neutral)
//     );
//     window.localStorage.setItem("saved-bad-clicks", JSON.stringify(bad));
//   }, [good, neutral, bad]);

//   const updateFeedback = (feedbackType) => {
//     if (feedbackType === "good") {
//       setGood(good + 1);
//     } else if (feedbackType === "neutral") {
//       setNeutral(neutral + 1);
//     } else if (feedbackType === "bad") {
//       setBad(bad + 1);
//     }
//   };

//   const resetFeedback = () => {
//     setGood(0);
//     setNeutral(0);
//     setBad(0);
//   };

//   const totalFeedback = good + neutral + bad;
//   const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);

//   return (
//     <>
//       <Description />
//       <Options text="Good" updateFeedback={() => updateFeedback("good")} />
//       <Options
//         text="Neutral"
//         updateFeedback={() => updateFeedback("neutral")}
//       />
//       <Options text="Bad" updateFeedback={() => updateFeedback("bad")} />
//       {totalFeedback === 0 && <p>No Feedback yet</p>}
//       {totalFeedback > 0 && (
//         <>
//           <Options
//             text="Reset"
//             resetFeedback={resetFeedback}
//             totalFeedback={totalFeedback}
//           />
//           <Feedback text="Good" value={good} />
//           <Feedback text="Neutral" value={neutral} />
//           <Feedback text="Bad" value={bad} />
//           <p>Total feedbacks: {totalFeedback}</p>
//           <p>Positive feedback percentage: {positiveFeedbackPercentage}%</p>
//         </>
//       )}
//     </>
//   );
// }

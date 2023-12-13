export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {
        options.map(
          el => (
            <button
              key={el}
              name={el}
              onClick={(e) => onLeaveFeedback(e)}
            >{el}</button>))
      }
    </ul>
  );
}

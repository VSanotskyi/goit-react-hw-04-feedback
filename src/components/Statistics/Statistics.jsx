export default function Statistics(props) {
  const {
    good,
    neutral,
    bad,
    total,
    positivePercentage,
  } = props;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {positivePercentage}%</p>
    </div>
  );
}

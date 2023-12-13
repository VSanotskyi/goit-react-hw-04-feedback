import { useState } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        alert('oops :( What happened?');
    }
  };

  const total = () => good + bad + neutral;

  const positivePercentage = () => {
    if (total() > 0) {
      return calcPercentage(good, neutral, bad);
    } else {
      return 0;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {
          total() <= 0 ? (
            <Notification
              message="There is no feedback"
            />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total()}
              positivePercentage={positivePercentage()}
            />
          )
        }
      </Section>
    </>
  );
}

function calcPercentage(g, n, b) {
  const result = (g / (g + n + b)) * 100;
  return result.toFixed();
}

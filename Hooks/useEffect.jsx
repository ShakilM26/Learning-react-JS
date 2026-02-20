import React, { useState, useEffect } from 'react'; 

function ScoreTrack() {
  const [score, setScore] = useState(0);

  useEffect(() => {

    document.title = `Current Score: ${score}`;

  }, [score]); // dependency array

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Live Football Match</h2>
      <p>Team Eagle has scored: {score} goals</p>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
    </div>
  );
}

export default ScoreTrack;
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

// ekhane dependency array [] empty rakhle useEffect() sudhu
// ekbar run hobe. component render onekbar hote pare.

// ar dependency array [state/props] te jokhon state/props deya thakbe
// segulo change holei useEffect abar run korbe

// Dependency na dile ki hobe? 
// API call, Timer sob render a cholbe and App slow hoye jabe
// Dependency array side effect control kore. UI control korena.
// Dependency array thik kore dibe useEffect kotobar cholbe.
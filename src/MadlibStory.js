import React from 'react';

function MadlibStory({ formData, restartGame }) {
  return (
    <div>
      <h2>Your Madlib Story</h2>
      <p>
        Once upon a time, there was a {formData.adjective} {formData.noun} who loved the color {formData.color}. One day, it met a {formData.noun2} and they became best friends!
      </p>
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default MadlibStory;
import React, { useState } from 'react';
import MadlibForm from './MadlibForm';
import MadlibStory from './MadlibStory';

function Madlib() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);  // Store form data when the form is submitted
  };

  const restartGame = () => {
    setFormData(null);  // Reset to start the game again
  };

  return (
    <div>
      <h1>Madlibs!</h1>
      {formData ? (
        <MadlibStory formData={formData} restartGame={restartGame} />
      ) : (
        <MadlibForm onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default Madlib;
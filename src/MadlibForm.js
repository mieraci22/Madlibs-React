import React, { useState } from 'react';

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: '',
    noun2: '',
    adjective: '',
    color: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);  // Pass form data to parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="noun">Noun:</label>
        <input
          type="text"
          id="noun"
          name="noun"
          value={formData.noun}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="noun2">Noun 2:</label>
        <input
          type="text"
          id="noun2"
          name="noun2"
          value={formData.noun2}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="adjective">Adjective:</label>
        <input
          type="text"
          id="adjective"
          name="adjective"
          value={formData.adjective}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Get Story</button>
    </form>
  );
}

export default MadlibForm;
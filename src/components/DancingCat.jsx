import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isDancing, setIsDancing] = useState(true);

  const toggleDancing = () => {
    setIsDancing(!isDancing);
  };

  return (
    <div className="dancing-cat-container">
      <h1 className="title">Dancing Cat 🎵</h1>

      <div className="cat-wrapper">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={`cat ${isDancing ? 'dancing' : ''}`}
        />
      </div>

      <button
        className="control-button"
        onClick={toggleDancing}
      >
        {isDancing ? '⏸ Pause' : '▶ Play'}
      </button>

      <p className="instruction">
        {isDancing ? 'Watch the cat dance!' : 'Click Play to start dancing'}
      </p>
    </div>
  );
}

export default DancingCat;

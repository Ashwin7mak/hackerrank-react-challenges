import React, { useState } from 'react';

const CycleCounter = ({ cycle }) => {
  const [click, setClick] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setClick((prevState) => ((prevState + 1) >= cycle ? 0 : prevState + 1));
  }

  return (
    <button
      data-testid="cycle-counter"
      style={{ fontSize: '1rem', width: 120, height: 30, }}
      onClick={handleClick}
    >{click}</button>
  );
}

export default CycleCounter;

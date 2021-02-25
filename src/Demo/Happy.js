import { useState } from 'react';
import animaux from '../data/animaux';
import randomAnimaux from './random_animaux';

function Happy() {
  const [happy, setHappy] = useState('😀');
  const handleClick = () => {
    console.log(animaux);
    console.log(randomAnimaux(animaux));
    // setHappy(happy === '😀' ? '😭' : '😀');
    setHappy(randomAnimaux(animaux));
  };

  return (
    <span className="text-9xl ml-8" onClick={handleClick}>{happy}</span>
  );
}

export default Happy;

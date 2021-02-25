import { useState } from 'react';

function Medaille({
  pays, img, nomImage, score, setter,
}) {
  // const [score, setScore] = useState(0);

  return (
    <div className="w-1/2 md:w-1/4 lg:w-1/5 flex justify-center">
      <div className="mb-8 w-10/12 border-solid border-2 border-black">
        <h2 className="text-center font-bold">{pays}</h2>
        <img onClick={() => setter(score + 1)} className="w-full h-2/4" src={img} alt={nomImage} />
        <div className="flex justify-center">
          <p className="w-11/12">{score}</p>
        </div>
      </div>
    </div>
  );
}

export default Medaille;

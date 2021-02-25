import { useState, useRef } from 'react';

// fonction
// fonction () {}
const Excel = () => {
  const [somme, setSomme] = useState(0);
  const value1 = useRef();
  const value2 = useRef();
  const doSum = () => {
    setSomme(Number(value1.current.value) + Number(value2.current.value));
  };
  return (
    <div>
      <input ref={value1} onInput={doSum} className="bg-gray-200 m-4" type="number" />
      <input ref={value2} onInput={doSum} className="bg-gray-200 m-4" type="number" />
      <div>{somme}</div>
    </div>
  );
};

export default Excel;

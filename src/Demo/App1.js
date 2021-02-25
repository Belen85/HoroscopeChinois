import { useState } from 'react';
import Medaille from './Medaille';

const medaillePays = [
  { pays: 'Belgique', points: 3, img: 'img/belgica.png' },
  { pays: 'France', points: 2, img: 'img/francia.png' },
  { pays: 'Corée', points: 4, img: 'img/coreaSur.png' },
  { pays: 'USA', points: 6, img: 'img/usa.png' },
  { pays: 'Laos', points: 12, img: 'img/laos.png' },
];

function App1() {
  const [scoreBE, setScoreBE] = useState(0);
  const [scoreFR, setScoreFR] = useState(0);
  const [scoreCO, setScoreCO] = useState(0);
  const [scoreUS, setScoreUS] = useState(0);
  const [scoreLA, setScoreLA] = useState(0);

  const getWinner = () => {
    const max = Math.max(scoreBE, scoreFR, scoreCO, scoreUS, scoreLA);
    const winner = [];
    if (max === scoreBE) {
      winner.push('Belgique');
    }
    if (max === scoreFR) {
      winner.push('France');
    }
    if (max === scoreCO) {
      winner.push('Corée');
    }
    if (max === scoreUS) {
      winner.push('USA');
    }
    if (max === scoreLA) {
      winner.push('Laos');
    }
    return winner.join(', ');
  };

  const winner = getWinner();

  return (
    <div>
      <div className="flex flex-wrap">
        {/* {medaillePays.map((medaille) => (
        <Medaille
          pays={medaille.pays}
          img={medaille.img}
          nomImage={medaille.pays}
        />
      ))} */}
        <Medaille
          pays={medaillePays[0].pays}
          img={medaillePays[0].img}
          nomImage={medaillePays[0].pays}
          score={scoreBE}
          setter={setScoreBE}
        />
        <Medaille
          pays={medaillePays[1].pays}
          img={medaillePays[1].img}
          nomImage={medaillePays[1].pays}
          score={scoreFR}
          setter={setScoreFR}
        />
        <Medaille
          pays={medaillePays[2].pays}
          img={medaillePays[2].img}
          nomImage={medaillePays[2].pays}
          score={scoreCO}
          setter={setScoreCO}
        />
        <Medaille
          pays={medaillePays[3].pays}
          img={medaillePays[3].img}
          nomImage={medaillePays[3].pays}
          score={scoreUS}
          setter={setScoreUS}
        />
        <Medaille
          pays={medaillePays[4].pays}
          img={medaillePays[4].img}
          nomImage={medaillePays[4].pays}
          score={scoreLA}
          setter={setScoreLA}
        />
      </div>
      And the winner is: {winner}
      <div />
    </div>
  );
}

export default App1;

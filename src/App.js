import './App.css';
import { useEffect, useState } from 'react';
// import signes from './data/signes';
import Signe from './Signe';
import FormControl from './FormControl';
import Modal from './Modal';

function App() {
  const [signes, setSinges] = useState([]);
  const [signe, setSigne] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const [toto, setToto] = useState({});
  // const handleClick = () => fetch('https://randomuser.me/api/')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setToto(data.results[0]);
  //   });

  // useEffect(() => fetch('https://randomuser.me/api/')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setToto(data.results[0]);
  //   }), []);

  // Getting data from external source instead of getting it form ./data/signes
  useEffect(() => fetch('https://raw.githubusercontent.com/ltruchot/es3-to-esnext-challenges/master/011-horoscope_chinois/signes.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setSinges(data);
    }), []);

  return (
    <div>
      {/* <button onClick={handleClick}>Visualiser amie</button> */}
      {/* {toto.name ? toto.name.first : ''} */}
      {/* {dataSignes} */}
      {/* <button onClick={() => setModalVisible(true)}>Open Modal</button> */}
      {signes ? (
        // eslint-disable-next-line max-len
        <FormControl signe={signe} setSigne={setSigne} montrerModal={setModalVisible} data={signes} />
      ) : null}

      <div className="App flex flex-wrap">
        {signes.map((item) => <Signe nom={item.nom} img={`img/${item.img}`} qualites={item.description} />)}
      </div>
      <Modal close visible={modalVisible} setModalVisible={setModalVisible} title="Ton Signe:">
        {signe}
        {/* <p>{signes[0].nom}</p> */}
      </Modal>
    </div>
  );
}

export default App;

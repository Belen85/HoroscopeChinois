import { useRef } from 'react';
import PropTypes from 'prop-types';
import { getSign } from './helpers';

function FormControl({
  montrerModal, setSigne, data,
}) {
  const ipt = useRef();
  function calculSigne(e) {
    e.preventDefault();
    // const ipt = document.getElementById('ipt');
    const val = Number(ipt.current.value);
    // const ipt2 = document.getElementById('ipt2');
    // console.log('test', ipt);
    // alert(ipt.value);
    // const result = getSign(val);
    // ipt2.value = result;
    // alert(ipt2.value);
    setSigne(getSign(val, data));
    montrerModal(true);
  }
  return (
    <form className="mx-3.5 my-3.5">
      <label htmlFor="dateNaissance">Introduissez votre date de naissance: </label>
      <input name="dateNaissance" className="border-black border-2" type="number" ref={ipt} /><br />
      <button className="bg-gray-300" type="submit" onClick={(calculSigne)}>Obtenir signe chinois</button>
      {/* <p>{signe}</p> */}
      {/* <input className="border-black border-2" type="text" id="ipt2" /> */}
    </form>
  );
}

FormControl.propTypes = {
  montrerModal: PropTypes.func,
  setSigne: PropTypes.func,
  data: PropTypes.object,
};

FormControl.defaultProps = {
  montrerModal: (a) => a,
  setSigne: (a) => a,
};

export default FormControl;

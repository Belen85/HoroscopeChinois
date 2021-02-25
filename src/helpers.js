// import signes from './data/signes';
// Number -> string
// transformer une anné en signe astrologique
// eslint-disable-next-line import/prefer-default-export
export function getSign(ipt, data) {
  // eslint-disable-next-line max-len
  // const arr = ['singe', 'coq', 'chien', 'cochon', 'rat', 'boeuf', 'tigre', 'lapin', 'dragon', 'serpant', 'cheval', 'chevre'];
  return (
    <div>
      <h2 className="text-xl bold">{data[ipt % 12].nom}</h2>
      <p>{data[ipt % 12].description}</p>
    </div>
  );
}
// console.log(getSign(1985));

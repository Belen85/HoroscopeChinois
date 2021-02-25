function Signe({ nom, img, qualites }) {
  return (
    <div className="w-1/2 md:w-1/4 lg:w-1/6 flex justify-center">
      <div className="mb-8 w-10/12 border-solid border-2 border-black">
        <h2 className="text-center font-bold">{nom}</h2>
        <img src={img} alt={nom} />
        <div className="flex justify-center">
          <p className="w-11/12">{`${qualites.slice(0, 150)}...`}</p>
        </div>
      </div>
    </div>
  );
}

export default Signe;

function Modal({
  children, title, close, visible, setModalVisible,
}) {
  return (
    <div className={`fixed left-0 -top-0 w-full h-full flex justify-center bg-opacity-75 bg-white ${visible ? 'block' : 'hidden'}`}>
      <div className="w-9/12 h-1/2 border-2 border-black bg-white m-auto">
        <div className="flex justify-between">
          <h2 className="text-xl bold p-2 ml-7">{title}</h2>
          <button type="button" onClick={() => setModalVisible(false)} className="p-2">{close ? 'X' : null}</button>
        </div>
        <div className="mx-9">
          {' '}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;

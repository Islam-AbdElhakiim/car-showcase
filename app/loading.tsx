const Loading = () => {
  return (
    <div className="z-20 flex-center  absolute h-screen min-h-screen w-screen bg-white overflow-hidden">
      <div className="lds-ring overflow-hidden">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

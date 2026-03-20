const Landing=()=>{
  return (
    <div className="relative top-0 left-0 flex flex-col items-center justify-center w-screen overflow-hidden min-h-screen py-2" style={{backgroundImage:"linear-gradient(180deg, #87CEEB 5%, #FFFFFF 100%)"}}>
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="/sun.svg" alt="sun" className="w-[20rem] w-[20rem] object-cover"/>
      </div>
      <div className="absolute bottom-[40vh] left-[25vw] w-full h-[80vh]">
        <img src="/hill-center.svg" alt="hill right" className="h-full w-full object-cover"/>
      </div>
      <div className="absolute bottom-[20vh] left-[30vw] w-full h-[40vh]">
        <img src="/hill-bg.svg" alt="hill right" className="h-full object-cover"/>
      </div>
      <div className="absolute bottom-[20vh] left-0 w-full h-[60vh]">
        <img src="/hill-fg.svg" alt="hill left" className="h-full object-cover"/>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[50vh]">
        <img src="/hill-fg.svg" alt="hill left" className="h-full object-cover"/>
      </div>
      <div className="flex flex-row items-center justify-around absolute -bottom-[50vh] left-0 w-full h-full" style={{backgroundImage:"url('/bamboo.svg')",backgroundRepeat:"repeat",backgroundSize:"cover"}}>
      </div>
    </div>
  );
}

export default Landing;
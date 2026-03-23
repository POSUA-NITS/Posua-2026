const Landing=()=>{
  return (
    <div className="relative top-0 left-0 flex flex-col items-center justify-center w-screen overflow-hidden min-h-screen py-2">
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img src="/mountain1.svg" alt="mountain" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full"  style={{backgroundImage:"linear-gradient(180deg, #87CEEB 5%,#ffffff 30%,transparent 65%)"}}>
        <div className="absolute top-0 left-0 w-full h-full">
          <img src="/sun.svg" alt="sun" className="w-[14rem] h-[14rem] object-cover"/>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around absolute -bottom-[50vh] left-0 w-full h-full" style={{backgroundImage:"url('/bamboo.svg')",backgroundRepeat:"repeat",backgroundSize:"cover"}}>
      </div>
    </div>
  );
}

export default Landing;
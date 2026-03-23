const Landing=()=>{
  return (
    <div className="relative top-0 left-0 flex flex-col items-center justify-center w-screen overflow-hidden min-h-screen py-2">
      <div className="absolute bottom-0 left-0 w-full h-full">
        <img src="/mountain1.svg" alt="mountain" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full"  style={{backgroundImage:"linear-gradient(180deg, #87CEEB 5%,#ddddee 22.5%,#ffffff 37.5%,transparent 65%)"}}>
        <div className="absolute top-0 left-[10rem] w-[15rem] h-full">
          <img src="/sun.svg" alt="sun" className="w-[14rem] h-[14rem] object-cover"/>
        </div>
        <div className="absolute top-0 right-0 w-fit h-fit">
          <img src="/cloud.png" alt="cloud" className="w-[30rem] h-[30rem] object-cover"/>
        </div>
        
        <div className="absolute top-[10rem] left-0">
          <img src="/flowerleft.png" alt="flower" className="w-[8rem] h-[8rem] object-cover"/>
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="/flowerleft.png" alt="flower" className="w-[8rem] -scale-x-100 h-[8rem] object-cover"/>
      </div>
      <div className="flex flex-row items-center justify-around absolute -bottom-[50vh] left-0 w-full h-full" style={{backgroundImage:"url('/bamboo.svg')",backgroundRepeat:"repeat",backgroundSize:"cover"}}>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen backdrop-blur-[1px] bg-[#00000034]">
        <div className="flex flex-col items-center h-full w-full justify-center">
          <img src="/logoposua.png" alt="logo" className="object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
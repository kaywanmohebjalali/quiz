

const Click = (prop) => {
  const {func, children='click', AddClassNAme=null}=prop


  return (

    <>
     {
       
       !AddClassNAme?
       <div className={`mt-4 text-white text-center flex flex-col gap-5`}>
       <div onClick={func} className="relative w-[18%] m-auto  ">
      <button  className={`absolute  left-0 hover:opacity-0 transition ease-in-out duration-700 opacity-1 w-[100%] shadow-md font-bold bg-gradient-to-r  from-cyan-500 to-blue-500  rounded-full  py-2 m-auto`}>{children}</button>
      <button className={`absolute  left-0 hover:opacity-1 transition ease-in-out duration-700 hover:opacity-0 w-[100%] shadow-md font-bold bg-gradient-to-l  from-cyan-500 to-blue-500  rounded-full  py-2 m-auto`}>{children}</button>
      
      
      </div>
      </div>
      :
      <button onClick={func} className={AddClassNAme}>
        {children}
      </button>
    }
    
    </>
    
  )
}

export default Click
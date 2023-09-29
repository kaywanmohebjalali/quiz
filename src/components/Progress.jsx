

const Progress = (prop) => {
    const {color='bg-sky-400',WidthPercentage='0%' ,children}=prop
  return (
    <>
      <div className="w-full m-auto bg-slate-400  rounded-full">
        <div style={{ width: WidthPercentage }} className={`${color} py-2 rounded-full`}>
        </div>
      </div>
    {children}

    </>
  );
};

export default Progress;

const Benefit = ({ benefit, index }) => {
  const { name, description } = benefit;
  return (
    <div id={`point-${index + 1}`} className="flex">
      <div className="pr-2 md:pr-4 lg:pr-6">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-800">{`0${
          index + 1
        }`}</p>
      </div>
      <div className="px-2">
        <h3 className="text-3xl md:text-4xl lg:text-5xl pb-4">{name}</h3>
        <p className="lg:leading-[2em] ">{description}</p>
      </div>
    </div>
  );
};

export default Benefit;

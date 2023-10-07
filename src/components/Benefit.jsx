const Benefit = ({ benefit, index }) => {
  const { name, description } = benefit;
  return (
    <div id={`point-${index + 1}`} className="flex">
      <div className="pr-2 md:pr-4 lg:pr-6">
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent">{`0${
          index + 1
        }`}</p>
      </div>
      <div className="px-2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl pb-4 font-syne">
          {name}
        </h3>
        <p className="leading-[2em] ">{description}</p>
      </div>
    </div>
  );
};

export default Benefit;

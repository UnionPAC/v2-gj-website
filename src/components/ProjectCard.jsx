const ProjectCard = ({ project }) => {
  const {
    id,
    fontAwesomeIcon,
    title,
    description,
    tags,
    githubLink,
    projectLink,
  } = project;

  return (
    <div
      id={`card-${id}`}
      className="max-w-[480px] min-h-[450px] p-6 flex justify-between relative mb-16 xl:mb-0 xl:mx-4 rounded-lg border-[5px] border-slate-900 bg-[#050505] hover:shadow-2xl hover:shadow-slate-700"
    >
      <a href={projectLink} target="_blank">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <i
            className={`${fontAwesomeIcon} text-2xl lg:text-3xl xl:text-4xl z-10 p-1 text-[#9FFF8A]`}
          ></i>
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold font-syne py-4 lg:py-6 text-center mt-12">
              {title}
            </h3>
            <p className="pb-6">{description}</p>
          </div>
          <div className="flex flex-col justify-between items-center xsm:flex-row">
            <div className="flex space-x-2 pb-6 xsm:pb-0 xl:pr-6 text-white">
              {tags.map((tag, index) => {
                return (
                  <p
                    key={`${title}: tag-${index}`}
                    className="px-2 lg:px-3 py-1 text-sm border border-[#347fdc] text-[#347fdc]"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
            <div className="flex justify-end">
              <a href={githubLink} target="_blank">
                <i className="fa-brands fa-github text-2xl lg:text-[1.8em] px-3"></i>
              </a>
              <a href={projectLink} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square text-2xl lg:text-[1.8em] px-2"></i>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

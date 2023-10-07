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
      className="max-w-[480px] min-h-[450px] p-6 flex justify-between relative mb-16 xl:mb-0 xl:mx-4 rounded-lg bg-secondary"
    >
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <i
          className={`${fontAwesomeIcon} text-2xl lg:text-3xl xl:text-4xl z-10 bg-secondary p-1 text-primary`}
        ></i>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex-1">
          <h3 className="text-2xl lg:text-3xl font-bold font-syne py-4 lg:py-6 text-center text-white mt-12">
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
                  className="border border-primary text-primary px-2 lg:px-3 py-1 text-sm"
                >
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="flex justify-end">
            <a href={githubLink}>
              <i className="fa-brands fa-github text-2xl lg:text-[1.8em] px-3 text-white"></i>
            </a>
            <a href={projectLink}>
              <i className="fa-solid fa-arrow-up-right-from-square text-2xl lg:text-[1.8em] px-2 text-accent"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

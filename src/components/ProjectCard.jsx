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
    <div id={`card-${id}`} className="border-2">
      <div>
        <i className={fontAwesomeIcon}></i>
      </div>
      <div className="py-6">
        <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex space-x-2">
          {tags.map((tag, index) => {
            return (
              <p
                key={`${title}: tag-${index}`}
                className="border-[1px] px-3 py-1"
              >
                {tag}
              </p>
            );
          })}
        </div>
        <div>
          <a href={githubLink}>
            <i className="fa-brands fa-github text-2xl"></i>
          </a>
          <a href={projectLink}>
            <i className="fa-solid fa-arrow-up-right-from-square text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

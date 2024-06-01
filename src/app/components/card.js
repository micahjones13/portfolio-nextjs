import "./css/card.css";
const Card = ({ title, description, relevantLinks }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="flex justify-evenly">
        {relevantLinks.github && (
          <a
            href={relevantLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
        {relevantLinks.storybook && (
          <a
            href={relevantLinks.storybook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook
          </a>
        )}
        {relevantLinks.website && (
          <a
            href={relevantLinks.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;

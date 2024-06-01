import "./css/scroll-list.css";
export default function ScrollList() {
  //TODO: Add more skills. Add second arr of skills - maybe like recent languages?
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Angular",
    "Design Systems",
    "DevRel",
    "Software Support",
    "Git / Github",
    "CI/CD",
    "Github Actions",
    "Cypress",
    "Playwright",
    "PostCSS",
    "Web Components",
    "StencilJS",
    "Lit",
    "Figma",
    "tailwind",
  ];
  const longSkills = [...skills, ...skills];
  return (
    <>
      <div className="scroller">
        <div className="scroller-content">
          {longSkills.map((skill, index) => (
            <p className="skill" key={index}>
              {skill}
            </p>
          ))}
        </div>
      </div>
      <br></br>
      <div className="scroller">
        <div className="scroller-content-right">
          {longSkills.map((skill, index) => (
            <p className="skill" key={index}>
              {skill}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

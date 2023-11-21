import "./portfolio.css";
import { useEffect, useState } from "react";
import { IProject } from "../../types/projects";
import noProject from "../../assets/no_project.svg";

const Portfolio = () => {
  const [projets, setProjets] = useState<IProject[]>([]);
  const getProjets = () => {
    fetch("http://localhost:3000/projects/")
      .then((res) => res.json())
      .then((res) => setProjets(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProjets();
  }, []);

  return (
    <section id="portfolio">
      <h2 className="mesProjets">Mon portfolio</h2>
      <span className="mesProjets-desc">
        Voici les différents projets réalisés depuis 2 ans.
      </span>
      <div className="projectItems">
        {projets.map((item, key) => (
          <div className="projectItem" key={key}>
            <a href={item.lienGit}>
              <img
                className="projectItemImage"
                src={item.imageUrl ? item.imageUrl : noProject}
              />
              <h3 className="projectItemTitle">{item.name}</h3>
              <p className="projectItemTitle">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

import "./portfolio.css";
import LogoRLIdle from "../../assets/logo.webp";

const Portfolio = () => {
  const myProjets = [
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
    {
      nom: "RL Idle",
      description: "Un Idle game basé sur le jeu Rocket League",
      lienGit: "https://github.com/RL-IDLE/rl-idle",
      image: LogoRLIdle,
    },
  ];

  return (
    <section id="portfolio">
      <h2 className="mesProjets">Mon portfolio</h2>
      <span className="mesProjets-desc">
        Voici les différents projets réalisés depuis 2 ans.
      </span>
      <div className="projectItems">
        {myProjets.map((item) => (
          <div className="projectItem">
            <a href={item.lienGit}>
              <img className="projectItemImage" src={item.image} />
              <h3 className="projectItemTitle">{item.nom}</h3>
              <p className="projectItemTitle">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

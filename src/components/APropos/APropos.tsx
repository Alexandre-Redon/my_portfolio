import "./apropos.css";
import ReactLogo from "../../assets/reactLogo.svg";
import HtmlLogo from "../../assets/html_logo.svg";
import NestLogo from "../../assets/NestJS.svg";

const APropos = () => {
  return (
    <section id="a-propos">
      <span className="a-propos-titre">Mes compétences</span>
      <span className="a-propos-description">
        Je suis actuellement en 1ère année de Master Développement Web à Ynov
        Bordeaux. Je commence à me familiariser avec le HTML, CSS et Javascript.
        De nombreux projets sont à venir !
      </span>
      <div className="listSkills">
        <div className="listSkillItem">
          <img src={ReactLogo} alt="" className="Itemlogo" />
          <div className="listSkillItemText">
            <h2 className="ItemTitle">React</h2>
            <p className="Itemtext">
              J'ai commencé React l'année dernière en entreprise et je débute
              les projets solo avec ce framework car je trouve que cette
              librairie a beaucoup d'avantages
            </p>
          </div>
        </div>
        <div className="listSkillItem">
          <img src={HtmlLogo} alt="" className="Itemlogo" />
          <div className="listSkillItemText">
            <h2 className="Itemlogo">HTML/CSS</h2>
            <p className="Itemtext">
              J'ai pu approfondir mes connaissances en HTML et CSS grace au
              React et grace à mon début d'année au master. Je vais commencer à
              utiliser Tailwind pour le css car j'ai eu l'habitude de l'utiliser
              lors de nombreux projets
            </p>
          </div>
        </div>
        <div className="listSkillItem">
          <img src={NestLogo} alt="" className="Itemlogo" />
          <div className="listSkillItemText">
            <h2 className="Itemlogo">NestJS</h2>
            <p className="Itemtext">
              Je n'ai pas d'expérience sur NestJS mais j'ai une grande envie
              d'apprendre ce framework
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APropos;

import "./presentation.css";

const Presentation = () => {
  return (
    <section id="presentation">
      <div className="presentationContenu">
        <p className="hello">Bonjour,</p>
        <p className="presentation">
          Je suis <span className="nom">Alexandre</span>
        </p>
        <p className="description">Développeur web</p>
        <p className="descriptionPara">
          Je suis en alternance depuis 2022. Mon objectif : devenir fullstack !
        </p>
        <a
          href="https://github.com/WasthElse2002"
          className="github-redirect"
          target="_blank"
        >
          <button className="button-a-propos">Voir mon Github</button>
        </a>
      </div>
      <img src="" alt="" className="presentationPhoto" />
    </section>
  );
};

export default Presentation;

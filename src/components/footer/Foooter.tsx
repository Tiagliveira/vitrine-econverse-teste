import { useState } from "react";
import OverlaySection from "../ovelay/OverlaySection";
import { handleOverlay } from "../ovelay/handleOverlay";
import UnderConstruction from "../construction/Construction";
import "./footer.scss"


import Logo from "../../assets/Group 35.png"
import Facebok from "../../assets/facebook (1).png"
import Instagram from "../../assets/instagram (1).png"
import Linkedin from "../../assets/linkedin (1).png"



const Footer = () => {
    const [activeOverlay, setactiveOverlay] = useState<string | null>(null);

    const openOverlay = (section: string) => setactiveOverlay(section);
    const closeOverlay = () => setactiveOverlay(null);

    const handleClick = (target: string) => {
        handleOverlay(target, openOverlay);
    };

    return (
        <footer className="footer">
  {/* Newsletter */}
  <section className="newsletter">
  <div className="newsletter-text">
    <h4>Inscreva-se na nossa newsletter</h4>
    <p>Assine e receba novidades e conteúdos exclusivos da Econverse.</p>
  </div>

  <form className="newsletter-form">
    <div className="form-row">
      <input type="text" placeholder="Digite seu nome" />
      <input type="email" placeholder="Digite seu e-mail" />
      <button type="submit">INSCREVER</button>
    </div>
    <label className="terms-check">
      <input type="checkbox" />
      Aceito os termos e condições
    </label>
  </form>
</section>


  {/* Informações principais */}
  <section className="footer-main">
    <div className="brand">
      <img src={Logo} alt="Logo Econverse" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="social-icons">
        <a onClick={() => handleClick("instagram")}><img src={Instagram} alt="Instagram" /></a>
        <a onClick={() => handleClick("facebook")}><img src={Facebok} alt="Facebook" /></a>
        <a onClick={() => handleClick("linkedin")}><img src={Linkedin} alt="Linkedin" /></a>
      </div>
    </div>

    <div className="footer-links">
      <div>
        <h5>Institucional</h5>
        <a onClick={() => handleClick("Sobre-nos")}>Sobre Nós</a>
        <a onClick={() => handleClick("movimento")}>Movimento</a>
        <a onClick={() => handleClick("trabalhe-conosco")}>Trabalhe conosco</a>
      </div>
      <div>
        <h5>Ajuda</h5>
        <a onClick={() => handleClick("suporte")}>Suporte</a>
        <a onClick={() => handleClick("fale-conosco")}>Fale conosco</a>
        <a onClick={() => handleClick("perguntas-frequentes")}>Perguntas Frequentes</a>
      </div>
      <div>
        <h5>Termos</h5>
        <a onClick={() => handleClick("temos-e-condicoes")}>Termos e condições</a>
        <a onClick={() => handleClick("politica-de-privacidade")}>Política de Privacidade</a>
        <a onClick={() => handleClick("troca-e-devolucao")}>Troca e Devolução</a>
      </div>
    </div>
  </section>

  {/* Rodapé final */}
  <section className="footer-bottom">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </section>

  {/* Overlay */}
  {activeOverlay && (
    <OverlaySection onclose={closeOverlay}>
      <UnderConstruction
        title="Conteúdo em construção"
        message={`Estamos trabalhando na seção "${activeOverlay}". Em breve estará disponível!`}
      />
    </OverlaySection>
  )}
</footer>
 )}


export default Footer
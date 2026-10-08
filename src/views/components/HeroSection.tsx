import { FiArrowDown, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { site, templates } from "../../content";
import { assetUrl } from "../../utils";
export function HeroSection() {
  return <section className="hero container" id="top"><div className="hero-copy"><p className="eyebrow">{site.hero.eyebrow}</p><h1>{site.hero.title}<br /><em>{site.hero.emphasis}</em></h1><p className="hero-description">{site.hero.text}</p>
    <div className="hero-actions"><a className="button" href="#catalogue">{site.hero.primary}<FiArrowDown aria-hidden="true" /></a><a className="text-link" href={site.contactUrl}>{site.hero.secondary}<FiArrowUpRight aria-hidden="true" /></a></div>
    <p className="hero-note"><FiCheckCircle aria-hidden="true" /> {templates.length} univers · votre identité · les bons outils</p>
  </div><div className="hero-gallery" aria-label="Un aperçu de nos créations"><div className="hero-browser"><div className="browser-bar"><span /><span /><span /><p>Une base. Votre univers.</p></div><img src={assetUrl("previews/03-desktop-home.jpg")} width="1440" height="1000" alt="Aperçu de la boutique Véloce sur ordinateur" fetchPriority="high" /></div>
    <div className="hero-phone"><div className="phone-camera" /><img src={assetUrl("previews/06-mobile-home.jpg")} width="390" height="844" alt="Aperçu mobile du salon Studio Parallèle" /></div>
    <div className="hero-sticker"><span>Conçu pour</span><strong>votre activité.</strong></div>
  </div></section>;
}

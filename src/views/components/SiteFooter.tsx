import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../../content";
import { assetUrl } from "../../utils";
export function SiteFooter() { return <footer className="site-footer container"><div><a href={site.companyUrl} aria-label="Le site d’entreprise antl"><img src={assetUrl(site.logo)} alt="antl" width="100" height="48" /></a><p>{site.footer}</p></div><nav aria-label="Liens de pied de page"><a href={site.companyUrl}>Découvrir antl<FiArrowUpRight aria-hidden="true" /></a><a href={site.contactUrl}>Nous contacter<FiArrowUpRight aria-hidden="true" /></a><a href="https://antl.fr/legal">Mentions légales</a></nav><small>© {new Date().getFullYear()} antl · Sites de démonstration</small></footer>; }

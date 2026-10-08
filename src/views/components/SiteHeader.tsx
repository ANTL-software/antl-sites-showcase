import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../../content";
import { assetUrl } from "../../utils";
export function SiteHeader() {
  return <header className="site-header container"><a className="brand" href="#top" aria-label="antl — accueil"><img src={assetUrl(site.logo)} alt="antl" width="110" height="52" /></a>
    <nav aria-label="Navigation principale">{site.navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    <a className="button button--small" href={site.contactUrl}>Parlons de votre projet <FiArrowUpRight aria-hidden="true" /></a>
  </header>;
}

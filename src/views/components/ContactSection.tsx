import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../../content";
export function ContactSection() { return <section className="contact-section container" id="contact"><p className="eyebrow">{site.contact.eyebrow}</p><h2>{site.contact.title}<br /><em>{site.contact.emphasis}</em></h2><p>{site.contact.text}</p><a className="button" href={site.contactUrl}>{site.contact.cta}<FiArrowUpRight aria-hidden="true" /></a></section>; }

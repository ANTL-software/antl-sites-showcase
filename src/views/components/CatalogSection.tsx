import { FiInfo } from "react-icons/fi";
import { site, templates } from "../../content";
import { useCatalog } from "../../hooks";
import { TemplateCard } from "./TemplateCard";
export function CatalogSection() {
  const catalog = useCatalog(templates);
  return <section className="catalog-section container" id="catalogue"><div className="section-heading"><div><p className="eyebrow">{site.catalog.eyebrow}</p><h2>{site.catalog.title}</h2></div><p>{site.catalog.text}</p></div>
    <div className="catalog-toolbar"><div className="filters" aria-label="Filtrer les sites par besoin">{site.filters.map(filter => <button type="button" aria-pressed={catalog.filter === filter.id} key={filter.id} onClick={() => catalog.setFilter(filter.id)}>{filter.label}</button>)}</div><p aria-live="polite">{catalog.visible.length} univers à explorer</p></div>
    <div className="catalog-grid">{catalog.visible.map(template => <TemplateCard key={template.id} template={template} />)}</div>
    <div className="demo-notice"><FiInfo aria-hidden="true" /><p>{site.catalog.demoNotice}</p></div>
  </section>;
}

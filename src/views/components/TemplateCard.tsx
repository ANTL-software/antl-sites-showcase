import type { CSSProperties } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import type { Template } from "../../types";
import { PreviewCarousel } from "./PreviewCarousel";
export function TemplateCard({ template }: { template: Template }) {
  const style: CSSProperties & { "--preview-accent": string } = { "--preview-accent": template.accent };
  return <article className="template-card" style={style}>
    <PreviewCarousel template={template} />
    <div className="template-card__body"><div className="template-card__heading"><div><p className="eyebrow">{template.business}</p><h3>{template.name}</h3></div><span className="template-number">{template.id}</span></div>
      <p className="template-description">{template.description}</p>
      <ul className="template-features">{template.features.map(feature => <li key={feature}><FiCheck aria-hidden="true" />{feature}</li>)}</ul>
      <a className="demo-link" href={template.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={"Explorer la démo " + template.name + " (nouvel onglet)"}>Explorer la démo <FiArrowUpRight aria-hidden="true" /></a>
    </div>
  </article>;
}

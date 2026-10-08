import { FiCompass, FiLayers, FiSliders } from "react-icons/fi";
import { site } from "../../content";
const icons = [FiCompass, FiSliders, FiLayers] as const;
export function ApproachSection() {
  return <section className="approach-section" id="approche"><div className="container"><div className="section-heading"><div><p className="eyebrow">{site.approach.eyebrow}</p><h2>{site.approach.title}</h2></div><p>{site.approach.text}</p></div>
    <div className="approach-grid">{site.approach.steps.map((step,index) => { const Icon = icons[index] ?? FiLayers; return <article key={step.title}><span className="approach-icon"><Icon aria-hidden="true" /></span><p className="eyebrow">0{index + 1}</p><h3>{step.title}</h3><p>{step.text}</p></article>; })}</div>
  </div></section>;
}

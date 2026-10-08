import type { ReactNode } from "react";
import type { SectionId } from "../../types";
import { site } from "../../content";
import { SiteHeader, HeroSection, CatalogSection, ApproachSection, ContactSection, SiteFooter } from "../components";
const sections: Record<SectionId, () => ReactNode> = { hero: () => <HeroSection />, catalog: () => <CatalogSection />, approach: () => <ApproachSection />, contact: () => <ContactSection /> };
export function ShowcasePage() { return <><a className="skip-link" href="#catalogue">Aller au catalogue</a><SiteHeader /><main>{site.sections.map(id => <div key={id}>{sections[id]()}</div>)}</main><SiteFooter /></>; }

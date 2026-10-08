import { FiChevronLeft, FiChevronRight, FiMaximize2, FiMonitor, FiSmartphone, FiX } from "react-icons/fi";
import { usePreviewCarousel, usePreviewDialog } from "../../hooks";
import { assetUrl } from "../../utils";
import type { Template } from "../../types";

export function PreviewCarousel({ template }: { template: Template }) {
  const carousel = usePreviewCarousel(template.previews);
  const previewDialog = usePreviewDialog();
  const open = () => { if (!carousel.consumeSwipe()) previewDialog.open(); };
  const close = previewDialog.close;
  const controls = <div className="carousel-controls">
    <button type="button" onClick={() => carousel.move(-1)} aria-label={"Capture précédente de " + template.name}><FiChevronLeft aria-hidden="true" /></button>
    <p aria-live="polite">{carousel.current?.label} <span>{carousel.index + 1} / {carousel.slides.length}</span></p>
    <button type="button" onClick={() => carousel.move(1)} aria-label={"Capture suivante de " + template.name}><FiChevronRight aria-hidden="true" /></button>
  </div>;
  return <section className="preview-carousel" aria-label={"Aperçus de " + template.name} aria-roledescription="carrousel">
    <div className="preview-toolbar"><span>Aperçu du site</span><div className="device-switch" aria-label={"Format des captures de " + template.name}>
      <button type="button" aria-pressed={carousel.device === "desktop"} onClick={() => carousel.selectDevice("desktop")}><FiMonitor aria-hidden="true" /><span>Desktop</span></button>
      <button type="button" aria-pressed={carousel.device === "mobile"} onClick={() => carousel.selectDevice("mobile")}><FiSmartphone aria-hidden="true" /><span>Mobile</span></button>
    </div></div>
    <div className={"preview-stage preview-stage--" + carousel.device} onTouchStart={event => carousel.startSwipe(event.touches[0]?.clientX ?? 0)} onTouchEnd={event => carousel.endSwipe(event.changedTouches[0]?.clientX ?? 0)} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); carousel.move(event.key === "ArrowLeft" ? -1 : 1); } }}>
      <button className="preview-expand" type="button" onClick={open} aria-label={"Agrandir la capture de " + template.name}>
        {carousel.current && <img src={assetUrl("previews/" + carousel.current.file)} width={carousel.current.width} height={carousel.current.height} alt={template.name + " — " + carousel.current.label + " sur " + carousel.device} loading="lazy" decoding="async" />}
        <span className="expand-label"><FiMaximize2 aria-hidden="true" /> Agrandir</span>
      </button>
    </div>{controls}
    <dialog className="preview-dialog" ref={previewDialog.dialog} onClose={previewDialog.restoreScroll} onCancel={previewDialog.restoreScroll} onClick={event => { if (event.target === event.currentTarget) close(); }} onKeyDown={event => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); carousel.move(event.key === "ArrowLeft" ? -1 : 1); } }} aria-label={"Capture agrandie de " + template.name}>
      <div className="preview-dialog__header"><strong>{template.name} · {carousel.device === "desktop" ? "Desktop" : "Mobile"}</strong><button type="button" onClick={close} aria-label="Fermer l’aperçu"><FiX aria-hidden="true" /></button></div>
      {carousel.current && <img src={assetUrl("previews/" + carousel.current.file)} alt={template.name + " — " + carousel.current.label} />}
      {controls}
    </dialog>
  </section>;
}

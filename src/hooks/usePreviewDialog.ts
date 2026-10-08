import { useEffect, useRef } from "react";
export function usePreviewDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const restoreScroll = () => { document.body.style.overflow = previousOverflow.current; };
  const open = () => { previousOverflow.current = document.body.style.overflow; dialog.current?.showModal(); document.body.style.overflow = "hidden"; };
  const close = () => { dialog.current?.close(); restoreScroll(); };
  useEffect(() => { const element = dialog.current; return () => { if (element?.open) document.body.style.overflow = previousOverflow.current; }; }, []);
  return { dialog, open, close, restoreScroll };
}

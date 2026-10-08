import { useMemo, useRef, useState } from "react";
import type { Device, Preview } from "../types";
export function usePreviewCarousel(previews: readonly Preview[]) {
  const [device, setDevice] = useState<Device>("desktop");
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const swiped = useRef(false);
  const slides = useMemo(() => previews.filter(preview => preview.device === device), [previews, device]);
  const current = slides[index] ?? slides[0];
  const move = (direction: number) => setIndex(previous => (previous + direction + slides.length) % Math.max(1, slides.length));
  const selectDevice = (next: Device) => { setDevice(next); setIndex(0); };
  const startSwipe = (x: number) => { startX.current = x; swiped.current = false; };
  const endSwipe = (x: number) => { if (startX.current !== null && Math.abs(x - startX.current) > 45) { move(x < startX.current ? 1 : -1); swiped.current = true; } startX.current = null; };
  const consumeSwipe = () => { const value = swiped.current; swiped.current = false; return value; };
  return { device, index, slides, current, move, selectDevice, selectSlide: setIndex, startSwipe, endSwipe, consumeSwipe };
}

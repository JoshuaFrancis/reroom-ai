"use client";

import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeClass: string;
  afterClass: string;
  beforeLabel: string;
  afterLabel: string;
  height?: string;
}

export default function BeforeAfterSlider({
  beforeClass,
  afterClass,
  beforeLabel,
  afterLabel,
  height = "h-80",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className={`before-after-slider relative rounded-2xl overflow-hidden ${height} w-full touch-none select-none`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After side (full width behind) */}
      <div className={`absolute inset-0 ${afterClass}`}>
        <span className="absolute bottom-3 right-3 bg-white/90 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
          After
        </span>
      </div>

      {/* Before side (clipped) */}
      <div
        className={`absolute inset-0 ${beforeClass}`}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <span className="absolute bottom-3 left-3 bg-white/90 text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
          Before
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="slider-handle"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />
    </div>
  );
}

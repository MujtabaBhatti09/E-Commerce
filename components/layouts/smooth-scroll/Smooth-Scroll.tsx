'use client';

import { useEffect, useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  let y = 0;
  let targetY = 0;
  const ease = 0.09;

  // Update spacer height using ResizeObserver
  useEffect(() => {
    const resizeContent = () => {
      if (contentRef.current && spacerRef.current) {
        const height = contentRef.current.getBoundingClientRect().height;
        spacerRef.current.style.height = `${height}px`;
      }
    };

    const observer = new ResizeObserver(resizeContent);
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    // Also listen to window resize
    window.addEventListener('resize', resizeContent);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeContent);
    };
  }, []);

  useAnimationFrame(() => {
    targetY = window.scrollY;
    y += (targetY - y) * ease;

    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(${-y}px)`;
    }
  });

  return (
    <>
      {/* Spacer that mimics full height of animated content */}
      <div ref={spacerRef} className="relative w-full" />

      {/* Fixed content that moves */}
      <div
        ref={contentRef}
        className="fixed top-0 left-0 w-full will-change-transform scroll-wrapper-root"
      >
        {children}
      </div>
    </>
  );
}

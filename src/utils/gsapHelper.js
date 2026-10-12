import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Custom React hook for safely running GSAP animations and ScrollTrigger
 * inside a gsap.context scoped to a component reference.
 * Automatically reverts on component unmount to ensure 0 memory leaks.
 */
export function useGsapContext(callback, scopeRef, deps = []) {
  useEffect(() => {
    if (!scopeRef?.current) return;
    const ctx = gsap.context(callback, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

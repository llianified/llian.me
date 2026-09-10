"use client";

import {
  createElement,
  useEffect,
  useRef,
  type CSSProperties,
  type HTMLAttributes,
} from "react";

type RevealTag = "div" | "section" | "header" | "footer" | "article" | "aside";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  delay?: number;
};

let observer: IntersectionObserver | null = null;
const pending = new WeakMap<Element, () => void>();

function getObserver() {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        // Elements already scrolled past (e.g. returning to /#projects) count as seen.
        if (!entry.isIntersecting && entry.boundingClientRect.top >= 0) continue;
        pending.get(entry.target)?.();
        pending.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
  );

  return observer;
}

export function stagger(index: number, extra?: CSSProperties): CSSProperties {
  return { ...extra, "--i": index } as CSSProperties;
}

export function Reveal({ as = "div", delay, style, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const io = getObserver();
    pending.set(element, () => {
      element.dataset.inview = "";
    });
    io.observe(element);

    return () => {
      pending.delete(element);
      io.unobserve(element);
    };
  }, []);

  const mergedStyle = delay
    ? ({ ...style, "--motion-delay": `${delay}ms` } as CSSProperties)
    : style;

  return createElement(as, { ...rest, ref, style: mergedStyle, "data-reveal": "" }, children);
}

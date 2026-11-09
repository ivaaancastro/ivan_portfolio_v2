/**
 * Scroll reveal for elements marked with [data-reveal] (styles in global.css).
 * Each element is revealed once, the first time it enters the viewport.
 */
const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

if (!("IntersectionObserver" in window)) {
  elements.forEach((el) => el.classList.add("is-revealed"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  elements.forEach((el) => observer.observe(el));
}

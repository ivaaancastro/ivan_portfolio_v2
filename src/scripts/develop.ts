// Lifestyle photos: mark each [data-develop] figure once it is on screen (CSS in global.css).
const figures = document.querySelectorAll<HTMLElement>("[data-develop]");

if (!("IntersectionObserver" in window)) {
  figures.forEach((figure) => figure.classList.add("is-shown"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-shown");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.25 },
  );
  figures.forEach((figure) => observer.observe(figure));
}

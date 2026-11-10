// Strava card: when it enters the screen the kilometres count up from zero and the bars grow
// (bars in global.css, .strava.is-live). Once only; with "reduce motion" the final values stay.
const DURATION = 1400;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function countUp(card: HTMLElement) {
  for (const el of card.querySelectorAll<HTMLElement>("[data-count]")) {
    const target = Number(el.dataset.count);
    const format = new Intl.NumberFormat(el.dataset.locale);
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      el.textContent = format.format(Math.round(target * easeOut(progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

for (const card of document.querySelectorAll<HTMLElement>("[data-strava]")) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    card.classList.add("is-live");
    continue;
  }
  // Start from zero so the count is visible when it plays.
  for (const el of card.querySelectorAll<HTMLElement>("[data-count]")) {
    el.textContent = new Intl.NumberFormat(el.dataset.locale).format(0);
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      card.classList.add("is-live");
      countUp(card);
    },
    { threshold: 0.4 },
  );
  observer.observe(card);
}

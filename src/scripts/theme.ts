/**
 * Light/dark toggle. Without a stored choice the OS setting applies (CSS media query);
 * a click stores the opposite of what is shown and sets data-theme on <html>.
 * The stored choice is applied before paint by the inline script in Layout.astro.
 */
const root = document.documentElement;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const buttons = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");

const isDark = () => (root.dataset.theme ? root.dataset.theme === "dark" : prefersDark.matches);

function sync() {
  buttons.forEach((button) => button.setAttribute("aria-pressed", String(isDark())));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage blocked: the choice lasts for this page only.
    }
    sync();
  });
});

prefersDark.addEventListener("change", sync);
sync();

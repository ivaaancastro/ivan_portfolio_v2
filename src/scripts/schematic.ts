/**
 * Stack schematic. Draws itself once when a fifth of it is on screen (.is-drawn), and
 * hovering or focusing a tool or a project highlights it, its links and the nodes at the other
 * end while everything else fades. CSS in global.css.
 */
document.querySelectorAll<HTMLElement>("[data-schematic]").forEach((root) => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          root.classList.add("is-drawn");
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(root);
  } else {
    root.classList.add("is-drawn");
  }

  const nodes = root.querySelectorAll<HTMLElement>("[data-key]");
  const links = root.querySelectorAll<SVGElement>("[data-keys]");
  const keysOf = (el: Element) => (el.getAttribute("data-keys") ?? "").split(" ");

  function activate(key: string | undefined) {
    if (!key) {
      delete root.dataset.active;
      return;
    }
    const related = new Set([key]);
    links.forEach((link) => {
      const keys = keysOf(link);
      const on = keys.includes(key);
      if (on) keys.forEach((k) => related.add(k));
      link.classList.toggle("is-related", on);
    });
    nodes.forEach((node) =>
      node.classList.toggle("is-related", related.has(node.dataset.key ?? "")),
    );
    root.dataset.active = key;
  }

  nodes.forEach((node) => {
    node.addEventListener("pointerenter", () => activate(node.dataset.key));
    node.addEventListener("focusin", () => activate(node.dataset.key));
    node.addEventListener("pointerleave", () => activate(undefined));
    node.addEventListener("focusout", () => activate(undefined));
  });
});

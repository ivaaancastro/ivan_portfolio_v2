/** Closes the mobile menu popover when one of its links is followed (anchors stay on the page). */
const menu = document.getElementById("site-menu");

menu?.querySelectorAll("[data-menu-link]").forEach((link) => {
  link.addEventListener("click", () => menu.hidePopover());
});

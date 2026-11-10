// Contact: copies the email to the clipboard and announces it to screen readers.
const status = document.querySelector<HTMLElement>("[data-copy-status]");

for (const button of document.querySelectorAll<HTMLButtonElement>("[data-copy]")) {
  if (!navigator.clipboard) {
    button.hidden = true;
    continue;
  }
  const label = button.querySelector<HTMLElement>("[data-copy-label]");
  const original = label?.textContent ?? "";
  let timer: number | undefined;

  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy ?? "");
    } catch {
      return; // Permission denied: the mailto link is still there.
    }
    const copied = button.dataset.copiedLabel ?? "";
    button.dataset.done = "";
    if (label) label.textContent = copied;
    if (status) status.textContent = copied;
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      delete button.dataset.done;
      if (label) label.textContent = original;
      if (status) status.textContent = "";
    }, 2000);
  });
}

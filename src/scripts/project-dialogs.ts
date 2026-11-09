/**
 * Opens the project <dialog> linked to each card button and closes it when the
 * backdrop is clicked. Esc, focus trapping and focus return are native to <dialog>.
 */
document.querySelectorAll<HTMLButtonElement>("[data-dialog-open]").forEach((button) => {
  const dialog = document.getElementById(button.dataset.dialogOpen ?? "");
  if (!(dialog instanceof HTMLDialogElement)) return;

  button.addEventListener("click", () => dialog.showModal());

  // A click whose target is the <dialog> itself landed on the backdrop.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const r = params.get("r");
  const outOf = document.querySelector(".out-of");
  if (r) {
    outOf.textContent = `You selected ${r} out of 5`;
  }
});

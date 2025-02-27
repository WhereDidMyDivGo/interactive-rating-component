document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const r = params.get("r");
  const outOf = document.querySelector(".out-of");
  if (r) {
    if ([1, 2, 3, 4, 5].includes(Number(r))) {
      outOf.textContent = `You selected ${r} out of 5`;
    } else {
      outOf.textContent = `Invalid rating`;
    }
  }
});

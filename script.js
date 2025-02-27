document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".number");
  const submitButton = document.querySelector(".submit");

  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      numbers.forEach((num) => num.classList.remove("selected"));
      number.classList.add("selected");
    });
  });

  submitButton.addEventListener("click", () => {
    const selectedNumber = document.querySelector(".number.selected");
    if (selectedNumber) {
      const rating = selectedNumber.textContent;
      window.location.href = `rating.html?r=${rating}`;
    }
  });
});

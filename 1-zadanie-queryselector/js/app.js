document.addEventListener("DOMContentLoaded", () => {
  const cnt = document.querySelector(".container");
  const firstAttempt = cnt.querySelectorAll(".first-attempt");
  const dataBorder = cnt.querySelectorAll("[data-border]");
  const hack = cnt.querySelectorAll(".hack");
  const hijack = cnt.querySelectorAll(".hijack");

  firstAttempt.forEach((el) => {
    el.classList.add("active");
  });

  for (let el of dataBorder) {
    el.dataset.elActive = true;
  }

  for (let el of hack) {
    el.setAttribute("title", "hacking");
  }

  for (let el of hijack) {
    el.removeAttribute("title");
  }
});

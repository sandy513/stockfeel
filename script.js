const body = document.querySelector("body");
const instagram = document.querySelector(".instagram");
instagram.addEventListener(
  "mouseover",
  function () {
    body.classList.add("linked");
  },
  false
);
instagram.addEventListener(
  "mouseout",
  function () {
    body.classList.remove("linked");
  },
  false
);
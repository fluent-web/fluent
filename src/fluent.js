document.querySelectorAll(".text-field").forEach((search) => {
  search.insertAdjacentHTML(
    "beforeend",
    `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" class="search-icon">
    <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="#0078d4" stroke-miterlimit="10" stroke-width="30"/>
    <path fill="none" stroke="#0078d4" stroke-linecap="round" stroke-miterlimit="10" stroke-width="30" d="M338.29 338.29L448 448"/>
  </svg>
  `
  );
  var clear = document.createElement("button");
  clear.classList.add("clear-btn");
  clear.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" height="20">
  <path fill="none" stroke="#605E5C" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/>
  </svg>
  `;
  search.addEventListener("input", function () {
    var field = this.querySelector("input");
    if (field.value != "") {
      search.appendChild(clear);
    } else if (field.value == "") {
      clear.remove();
    }
  });
  clear.addEventListener("click", function () {
    search.querySelector("input").focus();
    search.querySelector("input").value = "";
    this.remove();
  });
});
document.querySelectorAll(".text-field:not(.search-box)").forEach((field) => {
  field.querySelector(".search-icon").remove();
});
document
  .querySelectorAll(".text-field.text-field-underlined")
  .forEach((field) => {
    field.insertAdjacentHTML("beforeend", `<div class="underline"></div>`);
    var input = field.querySelector("input");
    var underline = field.querySelector(".underline");
    input.addEventListener("click", function () {
      underline.classList.add("active");
    });
    input.addEventListener("blur", function () {
      underline.classList.remove("active");
    });
    field.addEventListener("input", function () {
      var clear = field.querySelector(".clear-btn");
      if (clear == null) {
        return;
      } else {
        clear.addEventListener("click", function () {
          underline.classList.add("active");
        });
      }
    });
  });

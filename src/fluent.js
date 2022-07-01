// text field
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
document.querySelectorAll(".text-field.has-prefix").forEach((field) => {
  field.insertAdjacentHTML(
    "afterbegin",
    `<label class="prefix">${field.getAttribute("prefix-text")}<label>`
  );
  var input = field.querySelector("input");
  input.addEventListener("click", function () {
    field.classList.add("focus");
  });
  input.addEventListener("blur", function () {
    field.classList.remove("focus");
  });
  input.addEventListener("input", function () {
    var clear = field.querySelector(".clear-btn");
    if (clear == null) {
      return;
    } else {
      clear.addEventListener("click", function () {
        field.classList.add("focus");
      });
    }
  });
  if (input.hasAttribute("disabled") == true) {
    field.classList.add("disabled");
  } else {
    return;
  }
});
document.querySelectorAll(".text-field.has-suffix").forEach((field) => {
  field.insertAdjacentHTML(
    "beforeend",
    `<label class="suffix">${field.getAttribute("suffix-text")}</label>`
  );
  var input = field.querySelector("input");
  var labelWidth = field.querySelector(".suffix").offsetWidth;
  field.setAttribute("style", `--labelWidth: ${labelWidth}px;`);
  input.addEventListener("click", function () {
    field.classList.add("focus");
  });
  input.addEventListener("blur", function () {
    field.classList.remove("focus");
  });
  input.addEventListener("input", function () {
    var clear = field.querySelector(".clear-btn");
    if (clear == null) {
      return;
    } else {
      clear.addEventListener("click", function () {
        field.classList.add("focus");
      });
    }
  });
  if (input.hasAttribute("disabled") == true) {
    field.classList.add("disabled");
  } else {
    return;
  }
});
// dropdown
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  var btn = dropdown.querySelector(".dropdown-btn");
  btn.insertAdjacentHTML(
    "beforeend",
    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" class="dropdown-icon">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20" d="M112 184l144 144 144-144"/>
    </svg>
    `
  );
});
// toggle
document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.insertAdjacentHTML(
    "beforeend",
    `
  <span class="slider">
    <span class="slider-inner"></span>
  </span>
  `
  );
  toggle.insertAdjacentHTML(
    "beforeend",
    `<label class="toggle-label">${toggle.getAttribute("toggle-label")}</label>`
  );
  toggle.querySelector(".slider").addEventListener("click", function () {
    var check = toggle.querySelector("input[type='checkbox']");
    if (!check.checked == true) {
      toggle.querySelector(".slider").classList.add("is-on");
    } else {
      return;
    }
  });
});
document.querySelectorAll(".toggle.is-on").forEach((toggle) => {
  var check = toggle.querySelector("input[type='checkbox']");
  var slider = toggle.querySelector(".slider");
  if (check.hasAttribute("disabled") == false) {
    slider.click();
  } else {
    slider.classList.add("is-disabled-on");
  }
  check.checked = true;
});
document.querySelectorAll(".checkbox").forEach((check) => {
  check.insertAdjacentHTML(
    "beforeend",
    `
  <span class="rect">
    <span class="rect-inner">
      <svg height="9" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3516 1.35156L5 9.71094L0.648438 5.35156L1.35156 4.64844L5 8.28906L12.6484 0.648438L13.3516 1.35156Z" fill="#605E5C"/>
      </svg>
    </span>
  </span>
  <label class="checkbox-label">${check.getAttribute("checkbox-label")}</label>
  `
  );
});
// radio
document.querySelectorAll(".radio").forEach((radio) => {
  radio.insertAdjacentHTML(
    "beforeend",
    `
  <label class="radio-label">${radio.getAttribute("radio-label")}</label>
  `
  );
});
document.querySelectorAll(".persona").forEach((persona) => {
  if (persona.getAttribute("type") == "text") {
    persona.innerHTML = `
    ${persona.getAttribute("text")}
    <span class="status"></span>
    `;
  } else if (persona.getAttribute("type") == "image") {
    persona.setAttribute("style", `--bgImg: ${persona.getAttribute("src")}`);
    persona.innerHTML = `
    <img src="${persona.getAttribute("src")}" class="persona-img">
    <span class="status"></span>
    `;
  }
  var status = persona.querySelector(".status");
  switch (persona.getAttribute("status")) {
    case "online": {
      status.classList.add("online");
      break;
    }
    case "away": {
      status.classList.add("away");
      break;
    }
    case "busy": {
      status.classList.add("busy");
      break;
    }
    case "offline": {
      status.classList.add("offline");
      break;
    }
    default: {
      return;
    }
  }
});
// pivot
document.querySelectorAll(".pivot").forEach((pivot) => {
  var items = pivot.querySelectorAll(".pivot-btn");
  var panes = pivot.querySelectorAll(".pivot-item");
  var mark = document.createElement("div");
  mark.classList.add("mark");
  pivot.querySelector(".pivot-btn.is-active").appendChild(mark);
  items.forEach((item, index) => {
    var pane = panes[index];
    item.addEventListener("click", function () {
      pivot.querySelector(".pivot-btn.is-active").removeChild(mark);
      pivot.querySelector(".pivot-btn.is-active").classList.remove("is-active");
      pivot
        .querySelector(".pivot-item.is-active")
        .classList.remove("is-active");
      this.classList.add("is-active");
      this.appendChild(mark);
      pane.classList.add("is-active");
    });
  });
});

// COLORS VARIABLES
var colors = {
  base: {
    black: "#333333",
    white: "#ffffff",
  },
  primary: {
    // blue
    blue: "#1846C7",
    blue24: "#C8D3F2",
    blue8: "#DAE1F6",
    // pink
    pink: "#EE215B",
    pink24: "#FCD3DE",
    pink8: "#FDE9EE",
  },
  grey: {
    grey80: "#5C5C5C",
    grey60: "#858585",
    grey40: "#ADADAD",
    grey20: "#D6D6D6",
    grey12: "#E7E7E7",
    grey8: "#EFEFEF",
    grey4: "#F7F7F7",
  },
  secondary: {
    normal: {
      blue: "#0091FF",
      purple: "#A50AFF",
      green: "#22B217",
      red: "#E02E2E",
      orange: "#FA6400",
      yellow: "#F7B500",
    },
    light: {
      blue: "#E5F4FF",
      purple: "#F6E6FF",
      green: "#E9F7E8",
      red: "#FCEAEA",
      orange: "#FFEFE5",
      yellow: "#FEF8E5",
    },
  },
  other: {
    // blue
    blueHover: "#1640B6",
    blueActive: "#143AA4",
    // other
    deepSky: "#00C2FF",
    mint: "#00FFA3",
    darkGreen: "#008D6B",
    violetRed: "#D4007D",
  },
};
// BASIC STYLE as <style>
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}
*::before, *::after {
  box-sizing: border-box;
}
flid-button[type="primary"] {
  color: ${colors.base.white};
  background-color: ${colors.primary.blue};
}
flid-button[type="primary"]:hover {
  background-color: ${colors.other.blueHover};
}
flid-button[type="primary"]:active {
  background-color: ${colors.other.blueActive};
}
flid-button[type="secondary"] {
  color: ${colors.base.black};
  background-color: ${colors.base.white};
  border: 1px solid ${colors.grey.grey12};
}
flid-button[type="secondary"]:hover {
  border-color: ${colors.grey.grey20};
}
flid-button[type="secondary"]:active {
  background-color: ${colors.grey.grey4};
}
flid-button[type="text"] {
  color: ${colors.primary.blue};
  background-color: transparent;
  border: none;
}
flid-button[type="text"]:hover {
  color: ${colors.other.blueHover};
  background-color: ${colors.primary.blue8};
}
flid-button[type="text"]:active {
  background-color: ${colors.primary.blue24}
}
flid-button[type="grey"] {
  color: ${colors.base.black};
  background-color: ${colors.grey.grey8};
  border: none;
}
flid-button[type="grey"]:hover {
  background-color: ${colors.grey.grey12};
}
flid-button[type="grey"]:active {
  background-color: ${colors.grey.grey20}
}
flid-button[disabled] {
  pointer-events: none;
  opacity: 0.5;
}
</style>
`
);
// MAIN DESIGN
/* alert */
document.querySelectorAll("flid-alert").forEach((alert) => {
  var size = alert.getAttribute("size");
  var styled = alert.style;
  switch (alert.getAttribute("type")) {
    case "success": {
      // prettier-ignore
      alert.innerHTML = `
      <div class="icon-container" style="margin-right: ${size}px;">
        <svg height="${size / 3 * 5}" width="${size / 3 * 5}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM10 1.75C5.44365 1.75 1.75 5.44365 1.75 10C1.75 14.5563 5.44365 18.25 10 18.25C14.5563 18.25 18.25 14.5563 18.25 10C18.25 5.44365 14.5563 1.75 10 1.75Z" fill="${colors.secondary.normal.green}"/>
          <path d="M14.0167 8.13332C14.3096 7.84043 14.3096 7.36555 14.0167 7.07266C13.7238 6.77977 13.2489 6.77977 12.956 7.07266L8.59734 11.4313L6.97467 9.80866C6.68177 9.51577 6.2069 9.51577 5.91401 9.80866C5.62111 10.1016 5.62111 10.5764 5.91401 10.8693L8.08101 13.0363C8.3739 13.3292 8.84877 13.3292 9.14166 13.0363C9.1835 12.9945 9.21936 12.9489 9.24924 12.9007L14.0167 8.13332Z" fill="${colors.secondary.normal.green}"/>
        </svg>
      </div>
      <div>
        ${alert.innerText}
      </div>`
      styled.backgroundColor = colors.secondary.light.green;
      break;
    }
    case "warning": {
      // prettier-ignore
      alert.innerHTML = `
      <div class="icon-container" style="margin-right: ${size}px;">
        <svg width="${size / 3 * 5}" height="${size / 3 * 5}" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7 19.8H3.29999C2.19999 19.8 1.19999 19.2 0.599994 18.3C-6.10948e-06 17.4 -6.10948e-06 16.2 0.599994 15.2L8.29999 1.8C8.89999 0.799997 9.89999 0.199997 11 0.199997C12.1 0.199997 13.1 0.799997 13.7 1.8L21.4 15.2C22 16.2 21.9 17.3 21.4 18.3C20.9 19.3 19.8 19.8 18.7 19.8ZM9.59999 2.5C9.89999 2 10.4 1.7 11 1.7C11.6 1.7 12.1 2 12.4 2.5L20.1 15.9C20.4 16.4 20.4 17 20.1 17.5C19.8 18 19.3 18.3 18.7 18.3H3.39999C2.79999 18.3 2.29999 18 1.99999 17.5C1.69999 17 1.69999 16.4 1.99999 15.9L9.59999 2.5Z" fill="${colors.secondary.normal.yellow}"/>
          <path d="M11 11.9C10.6 11.9 10.2 11.6 10.2 11.1V7.4C10.2 7 10.5 6.6 11 6.6C11.5 6.6 11.8 6.9 11.8 7.4V11.1C11.8 11.5 11.4 11.9 11 11.9Z" fill="${colors.secondary.normal.yellow}"/>
          <path d="M11 15.4C10.4 15.4 9.99999 15 9.99999 14.4C9.99999 14.1 10.1 13.9 10.3 13.7C10.5 13.5 10.7 13.4 11 13.4C11.6 13.4 12 13.8 12 14.4C12 15 11.6 15.4 11 15.4Z" fill="${colors.secondary.normal.yellow}"/>
        </svg>
      </div>
      <div>
        ${alert.innerText}
      </div>`
      styled.backgroundColor = colors.secondary.light.yellow;
      break;
    }
    case "error": {
      // prettier-ignore
      alert.innerHTML = `
      <div class="icon-container" style="margin-right: ${size}px;">
        <svg width="${size / 3 * 5}" height="${size / 3 * 5}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 19.8C4.60001 19.8 0.200012 15.4 0.200012 10C0.200012 4.6 4.60001 0.300003 10 0.300003C15.4 0.300003 19.8 4.7 19.8 10.1C19.8 15.5 15.4 19.8 10 19.8ZM1.70001 10.1C1.70001 5.5 5.50001 1.8 10 1.8C14.5 1.8 18.3 5.5 18.3 10.1C18.3 14.7 14.6 18.4 10 18.4C5.40001 18.4 1.70001 14.7 1.70001 10.1Z" fill="${colors.secondary.normal.red}"/>          <path d="M10 11.3C9.60001 11.3 9.20001 11 9.20001 10.5V5.5C9.20001 5.1 9.50001 4.7 10 4.7C10.5 4.7 10.8 5 10.8 5.5V10.5C10.8 10.9 10.4 11.3 10 11.3Z" fill="${colors.primary.pink}"/>
          <path d="M10 15.3C9.40001 15.3 9.00001 14.9 9.00001 14.3C9.00001 14 9.10001 13.8 9.30001 13.6C9.50001 13.4 9.70001 13.3 10 13.3C10.6 13.3 11 13.7 11 14.3C11 14.9 10.6 15.3 10 15.3Z" fill="${colors.primary.pink}"/>
        </svg>
      </div>
      <div>
        ${alert.innerText}
      </div>`
      styled.backgroundColor = colors.primary.pink8;
      break;
    }
    case "info": {
      // prettier-ignore
      alert.innerHTML = `
      <div class="icon-container" style="margin-right: ${size}px;">
        <svg width="${size / 3 * 5}" height="${size / 3 * 5}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.25C4.61479 0.25 0.25 4.61479 0.25 10C0.25 15.3852 4.61479 19.75 10 19.75C15.3852 19.75 19.75 15.3852 19.75 10C19.75 4.61479 15.3852 0.25 10 0.25ZM10 1.75C5.44321 1.75 1.75 5.44321 1.75 10C1.75 14.5568 5.44321 18.25 10 18.25C14.5568 18.25 18.25 14.5568 18.25 10C18.25 5.44321 14.5568 1.75 10 1.75Z" fill="${colors.primary.blue}"/>
          <path d="M10.75 10C10.75 9.58579 10.4142 9.25 10 9.25C9.58579 9.25 9.25 9.58579 9.25 10V15C9.25 15.4142 9.58579 15.75 10 15.75C10.4142 15.75 10.75 15.4142 10.75 15V10Z" fill="${colors.primary.blue}"/>
          <path d="M9.999 5.25C9.44874 5.25 8.99745 5.69648 9 6.25272C9.00147 6.80368 9.44869 7.25 10 7.25C10.5522 7.25 11 6.80221 11 6.25C11 5.69584 10.5503 5.25 9.999 5.25Z" fill="${colors.primary.blue}"/>
        </svg>

      </div>
      <div>
        ${alert.innerText}
      </div>`
      styled.backgroundColor = colors.primary.blue8;
      break;
    }
  }
  styled.display = "flex";
  styled.alignItems = "stretch";
  styled.justifyContent = "space-between";
  styled.color = colors.base.black;
  styled.lineHeight = (size / 2) * 3 + "px";
  styled.fontWeight = "600";
  styled.fontSize = size + "px";
  styled.maxWidth = "600px";
  styled.borderRadius = size / 2 + "px";
  styled.padding = `${(size / 3) * 2}px ${size}px`;
  // icon style
  var icon = alert.querySelector(".icon");
  icon.style.display = "block";
});
// badge
document.querySelectorAll("flid-badge").forEach((badge) => {
  var styled = badge.style;
  var type = badge.getAttribute("type");
  var size = badge.getAttribute("size");
  styled.cursor = "default";
  styled.display = "inline-block";
  styled.backgroundColor = colors.primary.blue8;
  styled.color = colors.primary.blue;
  styled.fontWeight = "600";
  styled.fontSize = size + "px";
  styled.padding = `3px ${size}px`;
  styled.textAlign = "center";
  styled.transition = ".06s ease";
  switch (type) {
    case "rect": {
      styled.borderRadius = size / 3 + "px";
      break;
    }
    case "oval": {
      styled.borderRadius = badge.offsetHeight + "px";
      break;
    }
  }
  // hover style
  badge.addEventListener("mouseover", function () {
    this.style.backgroundColor = colors.primary.blue;
    this.style.color = colors.base.white;
  });
  badge.addEventListener("mouseleave", function () {
    this.style.backgroundColor = colors.primary.blue8;
    this.style.color = colors.primary.blue;
  });
});
document.querySelectorAll("flid-badge[number-badge]").forEach((badge) => {
  var size = badge.getAttribute("size");
  var styled = badge.style;
  styled.height = styled.width = size * 2 + "px";
  styled.padding = 0;
  styled.display = "flex";
  styled.alignItems = "center";
  styled.justifyContent = "center";
});
document.querySelectorAll("flid-badge[filled]").forEach((badge) => {
  var styled = badge.style;
  styled.backgroundColor = colors.primary.blue;
  styled.color = colors.base.white;
  badge.addEventListener("mouseleave", function () {
    styled.backgroundColor = colors.primary.blue;
    styled.color = colors.base.white;
  });
});
// button
document.querySelectorAll("flid-button").forEach((btn) => {
  var type = btn.getAttribute("type");
  var size = btn.getAttribute("size");
  var styled = btn.style;
  if (btn.hasAttribute("is-link") == true) {
    styled.cursor = "pointer";
    btn.addEventListener("click", function () {
      window.open(btn.getAttribute("href"), btn.getAttribute("target"));
    });
  } else if (btn.hasAttribute("is-link") == false) {
    styled.cursor = "default";
    btn.addEventListener("click", function () {
      return;
    });
  }
  styled.transition = ".13s ease";
  styled.display = "inline-block";
  styled.userSelect = "none";
  styled.fontSize = size + "px";
  styled.padding = `${size / 1.7}px ${(size / 2) * 3}px`;
  styled.fontWeight = "500";
  styled.lineHeight = "1";
  styled.borderRadius = size / 2.5 + "px";
});

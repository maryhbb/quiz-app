// Dark moode with localStorage

export function registerThemeToggle() {
  const modeToggle = document.querySelector(".profile-card__mode-toggle");

  modeToggle.onclick = () => {
    const theme = getTheme();
    const updatedTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", updatedTheme);

    updateStyle(updatedTheme);
  };
}

function getTheme() {
  return localStorage.getItem("theme") ?? "light";
}

function updateStyle(theme) {
  const rootStyle = document.documentElement.style;

  if (theme === "light") {
    rootStyle.setProperty("--transparent-white", "rgba(255, 255, 255, 0.3)");
    rootStyle.setProperty(
      "--main-bg",
      "linear-gradient(to left bottom,var(--gradient-start),var(--gradient-mid),var(--gradient-end))"
    );
    rootStyle.setProperty(
      "--header-footer-bg",
      "linear-gradient(to left bottom,var(--gradient-start),var(--gradient-mid),var(--gradient-end))"
    );
    rootStyle.setProperty("--gradient-start", "lightblue");
    rootStyle.setProperty("--gradient-mid", "lightpink");
    rootStyle.setProperty("--gradient-end", "lightblue");
    rootStyle.setProperty("--card-background", "var(--transparent-white)");
    rootStyle.setProperty("--button-background", "var(--transparent-white)");
    rootStyle.setProperty("--button-border-color", "rgba(255, 255, 255, 0.6)");
    rootStyle.setProperty("--bookmark-color", "transparent");
    rootStyle.setProperty("--footer-border-color", "#ccc");
    rootStyle.setProperty(
      "--navigation-hover-color",
      "rgba(255, 255, 255, 0.5)"
    );
    rootStyle.setProperty("--bg-color", "#000");
    rootStyle.setProperty("--text-color", "#000");
  } else {
    rootStyle.setProperty(
      "--main-bg",
      "linear-gradient(to left bottom,#11152b ,#1d2b44)"
    );
    rootStyle.setProperty(
      "--header-footer-bg",
      "linear-gradient(to left bottom,#11152b ,#1d2b44)"
    );
    rootStyle.setProperty("--dark-mode-color", "#11152b");
    rootStyle.setProperty("--dark-mode-accent-color", "#6aa9e126");
    rootStyle.setProperty("--card-background", "var(--dark-mode-accent-color)");
    rootStyle.setProperty(
      "--button-background",
      "var(--dark-mode-accent-color)"
    );
    rootStyle.setProperty("--button-border-color", "transparent");
    rootStyle.setProperty("--bookmark-color", "transparent");
    rootStyle.setProperty(
      "--navigation-hover-color",
      "rgba(255, 255, 255, 0.5)"
    );
    rootStyle.setProperty("--text-color", "#fff");
    rootStyle.setProperty("--bg-color", "#ccc");
  }
}

export function applyTheme() {
  updateStyle(getTheme());
}

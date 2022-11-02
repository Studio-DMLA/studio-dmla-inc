export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export function initTheme(): Theme {
  let theme = Theme.Light;
  if (typeof window !== "undefined") {
    theme = window.localStorage.getItem("theme") ? window.localStorage.getItem("theme") as Theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light;
  }
  return theme;
}

export function getTheme(): Theme {
  if (typeof window !== "undefined") {
    return document.body.classList.contains("dark") ? Theme.Dark : Theme.Light;
  }
  return initTheme();
}

export function setTheme(theme: Theme) {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("theme");
    window.localStorage.setItem("theme", theme);
    if (document.body.classList.contains(Theme.Dark)) {
      document.body.classList.remove(Theme.Dark);
    } 
    if (document.body.classList.contains(Theme.Light)) {
      document.body.classList.remove(Theme.Light);
    }
    document.body.classList.add(theme);
  }
}

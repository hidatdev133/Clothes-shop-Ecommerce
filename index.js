const sidebar = document.querySelector("#bar");

const nav = document.querySelector("#navbar");

const close = document.querySelector("#close");

if (sidebar) {
  sidebar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  }
  
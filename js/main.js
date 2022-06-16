const body = document.querySelector("body");
const header = document.querySelector("#header")
const hamburger = document.querySelector("#hamburger")

hamburger.addEventListener("click", () => {
  if(header.classList.contains("open")) {
    header.classList.remove("open")
    body.classList.remove("noscroll")
  } else {
    header.classList.add("open")
    body.classList.add("noscroll")
    window.scrollTo(0,0)
  }
})
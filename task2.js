
const body = document.querySelector("body");
const btn = document.createElement("button");
body.appendChild(btn);
btn.textContent = "Click me";

const div = document.createElement("div");
body.appendChild(div);

function insertPicture() {
  const img = document.createElement("img")
  body.appendChild(img)
  img.src = "https://picsum.photos/200/300";
  img.style.margin = "1rem";
}

btn.addEventListener("click", insertPicture);
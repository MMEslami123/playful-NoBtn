const h1 = document.querySelector("h1");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
yesBtn.addEventListener("click", () => {
  h1.innerHTML = "we are so happy that you come back!";
  yesBtn.style = "display:none";
  noBtn.style = "display:none";
});
noBtn.addEventListener("mouseover", (event) => {
  console.log(event.clientX);
  console.log(event.clientY);

  let width = Math.floor(Math.random() * innerWidth - 100);
  let height = Math.floor(Math.random() * innerHeight - 100);
  if (
    width < innerWidth &&
    width > 0 &&
    height < innerHeight &&
    height > 0
  )
    noBtn.style = `transform: translate(${width}px,${height}px)`;
  else {
    if (width < 0)
      noBtn.style = `transform: translate(${width + 100}px,${height}px)`;
    else if (height < 0)
      noBtn.style = `transform: translate(${width}px,${height + 100}px)`;
  }
});
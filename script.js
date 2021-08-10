const imgFrame = document.querySelector("#img-frame");
const imgPlholder = document.querySelector("#img-placeholder");
const imgButton = document.querySelector("#img-button");

imgButton.addEventListener("click", () => {
  fetch("https://picsum.photos/200").then((response) => {
    console.log(response.url);
    imgPlholder.src = response.url;
  });
});
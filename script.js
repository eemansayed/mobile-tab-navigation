const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();
  });
});

function listItems() {
  contents.forEach((content) => content.classList.remove("show"));
}

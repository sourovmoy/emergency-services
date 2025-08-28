let copy = 0;
const btns = document.getElementsByClassName("copy-btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    console.log(btn);

    copy++;
    console.log(copy);
    document.getElementById("copy-count").innerText = copy;
  });
}

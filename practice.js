let copy = 0;
const btns = document.getElementsByClassName("copy-btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    alert("Number has copied");

    const copyNum = document.getElementsByClassName("copy-num")[0].innerText;
    console.log(copyNum);
    navigator.clipboard.writeText(copyNum);

    copy++;

    document.getElementById("copy-count").innerText = copy;
  });
}

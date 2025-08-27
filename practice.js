const storage = [];

document
  .getElementById("emergency-call-btn")
  .addEventListener("click", function () {
    const history = {
      name: "National Emergency Number",
      number: "999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
function callHistory(history) {
  storage.push(history);
  const callHistory = document.getElementById("call-history");
  callHistory.innerText = "";

  for (const data of storage) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div
            class="flex justify-between items-center rounded-md bg-[#fafafa] mx-4 p-4"
          >
            <div>
              <h4 class="font-semibold">${data.name}</h4>
              <p class="text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>${data.date}</div>
          </div>
      `;

    callHistory.appendChild(div);
  }
}

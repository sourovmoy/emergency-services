const storage = [];
let love = 0;
/*
 * Shared function start
 */
// string to number
function strToNUm(id) {
  const number = parseInt(document.getElementById(id).innerText);

  return number;
}

// love button click function
function loveClickBtn(id) {
  document.getElementById(id).addEventListener("click", function () {
    loveCount();
  });
}

// coins checker
function coinsCheck() {
  const cutCoin = 20;
  const coins = strToNUm("coins");
  if (coins >= 20) {
    const presentCoins = coins - cutCoin;
    document.getElementById("coins").innerText = presentCoins;
  } else {
    alert("❌Insufficient Coins");

    return;
  }
}

//call history
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
/*
 * Shared function end
 */

// for love button

function loveCount() {
  love++;
  document.getElementById("love-count").innerText = love;
}
// love count for national emergency

loveClickBtn("national-love-btn");

//    love count for police helpline

loveClickBtn("police-love-btn");

//    love count for fire service

loveClickBtn("fire-love-btn");

//    love count for ambulance

loveClickBtn("ambulance-love-btn");

//    love count for Women & Child

loveClickBtn("woman-love-btn");

//    love count for electricity

loveClickBtn("electricity-love-btn");

//    love count for police Anti-Corruption

loveClickBtn("corruption-love-btn");

//    love count for police brac

loveClickBtn("brac-love-btn");

//    love count for railway

loveClickBtn("railway-love-btn");

// call using coins

// call function for emergency

document
  .getElementById("emergency-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling National Emergency Service 999....");
    coinsCheck();
    const history = {
      name: "National Emergency Number",
      number: "999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });

// call function for Police Helpline
document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Police Helpline Service 999....");
    coinsCheck();
    const history = {
      name: "Police Helpline Number",
      number: "999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// call function for Fire Service
document.getElementById("fire-call-btn").addEventListener("click", function () {
  alert("📞Calling Fire Helpline Service 999....");
  coinsCheck();
  const history = {
    name: "Fire Service Number",
    number: "999",
    date: new Date().toLocaleTimeString(),
  };
  callHistory(history);
});
// call function for Ambulance Service
document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Ambulance Helpline Service 1994-999999....");
    coinsCheck();
    const history = {
      name: "Ambulance Service Number",
      number: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// call function for Women & Child
document
  .getElementById("Women-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Women & Child Helpline Service 109....");
    coinsCheck();
    const history = {
      name: "Women & Child Helpline Number",
      number: "109",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// call function for Anti-Corruption
document
  .getElementById("Anti-Corruption-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Anti-Corruption Helpline Service 106....");
    coinsCheck();
    const history = {
      name: "Anti-Corruption Helpline Number",
      number: "106",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// call function for electricity
document
  .getElementById("electricity-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Electricity Helpline Service 16216....");
    coinsCheck();
    const history = {
      name: "Electricity Helpline Number",
      number: "16216",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// call function for brac
document.getElementById("brac-call-btn").addEventListener("click", function () {
  alert("📞Calling Brac Helpline Service 16445....");
  coinsCheck();
  const history = {
    name: "Brac Helpline Number",
    number: "16445",
    date: new Date().toLocaleTimeString(),
  };
  callHistory(history);
});
// call function for emergency
document
  .getElementById("railway-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Bangladesh Railway Helpline Service 163....");
    coinsCheck();
    const history = {
      name: "Bangladesh Railway Helpline Number",
      number: "163",
      date: new Date().toLocaleTimeString(),
    };
    callHistory(history);
  });
// clear btn function
document.getElementById("clear-btn").addEventListener("click", function () {
  storage.length = 0;
  document.getElementById("call-history").innerHTML = "";
});

// ## # try some shortcut###
// copy btn function by loop through
let copy = 0;
const btns = document.getElementsByClassName("copy-btn");
for (const btn of btns) {
  btn.addEventListener("click", function () {
    alert("Do you want to copy the number?©️");
    const copyNum = document.getElementsByClassName("copy-num")[0].innerText;
    navigator.clipboard.writeText(copyNum);
    alert("Number Copied😊");
    copy++;

    document.getElementById("copy-count").innerText = copy;
  });
}

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
    return alert("❌Insufficient Coins");
  }
}
/*
 * Shared function end
 */

// for love button

let love = 0;
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
  });

// call function for Police Helpline
document
  .getElementById("police-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Police Helpline Service 999....");
    coinsCheck();
  });
// call function for Fire Service
document.getElementById("fire-call-btn").addEventListener("click", function () {
  alert("📞Calling Fire Helpline Service 999....");
  coinsCheck();
});
// call function for Ambulance Service
document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Ambulance Helpline Service 1994-999999....");
    coinsCheck();
  });
// call function for Women & Child
document
  .getElementById("Women-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Women & Child Helpline Service 109....");
    coinsCheck();
  });
// call function for Anti-Corruption
document
  .getElementById("Anti-Corruption-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Anti-Corruption Helpline Service 106....");
    coinsCheck();
  });
// call function for electricity
document
  .getElementById("electricity-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Electricity Helpline Service 16216....");
    coinsCheck();
  });
// call function for brac
document.getElementById("brac-call-btn").addEventListener("click", function () {
  alert("📞Calling Brac Helpline Service 16445....");
  coinsCheck();
});
// call function for emergency
document
  .getElementById("railway-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling Bangladesh Railway Helpline Service 163....");
    coinsCheck();
  });

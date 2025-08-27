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

// call useing coins
document
  .getElementById("ambulance-call-btn")
  .addEventListener("click", function () {
    alert("📞Calling National Emergency Service 999....");
    coinsCheck();
  });

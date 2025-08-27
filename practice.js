document
  .getElementById("ambulance-love-btn")
  .addEventListener("click", function () {
    alert("📞Calling National Emergency Service 999....");
    coinsCheck();
  });
function strToNUm(id) {
  const love = parseInt(document.getElementById(id).innerText);

  return love;
}

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

// console.log(presentCoins);

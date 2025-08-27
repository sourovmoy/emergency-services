/*
 * Shared function
 */
// string to number
function strToNUm(id) {
  const love = parseInt(document.getElementById(id).innerText);

  return love;
}

function loveClickBtn(id) {
  document.getElementById(id).addEventListener("click", function () {
    loveCount();
  });
}

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

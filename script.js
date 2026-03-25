const params = new URLSearchParams(window.location.search);

const nome = params.get("nome");
const avatar = params.get("avatar");
const gasto = Number(params.get("gasto"));

document.getElementById("nome").innerText = nome || "Cliente";
document.getElementById("avatar").src = avatar || "https://cdn.discordapp.com/embed/avatars/0.png";
document.getElementById("gasto").innerText = "Total gasto: R$" + (gasto || 0);

let vip = "";

if (gasto >= 50) {
  vip = "VIP GOLD";
} else if (gasto >= 20) {
  vip = "VIP SILVER";
} else if (gasto >= 10) {
  vip = "VIP BRONZE";
}

if (vip) {
  document.getElementById("vip").innerHTML = `<div class="vip">${vip}</div>`;
}

const url = new URL(window.location.href);

const nome = url.searchParams.get("nome") || "Cliente";
const gasto = Number(url.searchParams.get("gasto")) || 0;
const avatar = url.searchParams.get("avatar") || "https://cdn.discordapp.com/embed/avatars/0.png";

// VIP automático
let vip = "Bronze";

if (gasto >= 1000) vip = "Diamante";
else if (gasto >= 500) vip = "Ouro";
else if (gasto >= 100) vip = "Prata";

document.getElementById("nome").innerText = nome;
document.getElementById("gasto").innerText = "R$" + gasto;
document.getElementById("avatar").src = avatar;
document.getElementById("vip").innerText = "VIP: " + vip;

function showWebMessage() {
  alert("I built this site in Web!");
}

function highlightPE() {
  const peCard = document.getElementById("pe-card");
  peCard.style.backgroundColor = "#f739a8";
  peCard.style.color = "#333";
  peCard.style.transition = "0.3s";
  peCard.style.fontStyle = "italic";
  peCard.style.fontWeight = "bold";
  peCard.style.transition = "0.3s ease";
}

function styleLit() {
  const litCard = document.getElementById("lit-card");
  litCard.style.backgroundColor = "#f739a8";
  litCard.style.color = "#333";
  litCard.style.fontStyle = "italic";
  litCard.style.fontWeight = "bold";
  litCard.style.transition = "0.3s ease";
}
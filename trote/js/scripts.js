function mudarCor() {
  let corSelecionada = document.getElementById("cor").value;
  let container = document.querySelector(".container");

  if (corSelecionada === "laranja") {
      container.style.backgroundColor = "rgb(247, 141, 3)"; // Laranja mais vibrante
      container.style.color = "black"; // Mantém texto preto
  } else if (corSelecionada === "preta") {
      container.style.backgroundColor = "#000000";
      container.style.color = "white"; // Texto branco para contraste
  } else if (corSelecionada === "roxa") {
      container.style.backgroundColor = "rgb(199, 74, 199)";
      container.style.color = "black";
  } else if (corSelecionada === "verde") {
      container.style.backgroundColor = "rgb(50, 179, 50)";
      container.style.color = "black";
  } else if (corSelecionada === "vermelha") {
      container.style.backgroundColor = "rgb(221, 66, 66)";
      container.style.color = "black";
  }
}

function calcularPontuacao() {
  let mascote = parseInt(document.getElementById("mascote").value) || 0;
  let atleta = parseInt(document.getElementById("atleta").value) || 0;
  let leite = parseInt(document.getElementById("leite").value) || 0;
  let sangue = parseInt(document.getElementById("sangue").value) || 0;
  let kit = parseInt(document.getElementById("kit").value) || 0;
  let suplementos = parseInt(document.getElementById("suplementos").value) || 0;

  let soma = mascote + atleta + (2 * leite) + (20 * sangue) + (30 * kit) + (15 * suplementos);

  document.getElementById("resultado").innerText = "A pontuação da equipe é: " + soma;
}
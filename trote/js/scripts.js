function mudarCor() {
    let corSelecionada = document.getElementById("cor").value;
    let container = document.querySelector(".container");
  
    if (corSelecionada === "laranja") {
        container.style.backgroundColor = "rgb(247, 141, 3)"; 
        container.style.color = "black"; 
    } else if (corSelecionada === "preta") {
        container.style.backgroundColor = "#000000";
        container.style.color = "white"; 
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
  
    let soma = mascote + atleta + (2 * leite);
    document.getElementById("resultado").innerText = "A pontuação da equipe é: " + soma;
  }
  if(equipe == "laranja"){
      // verifica kit e suplemento
      if(kit >= 97 && suplementos >= 49){
          soma = soma + 5000 + ((kit - 97) * 30) + ((suplementos - 49) * 15)
      }
      else if(kit >= 78 && suplementos >= 39){
          soma = soma + 4000 + ((kit - 78) * 30) + ((suplementos - 39) * 15)
      }
      else if(kit >= 49 && suplementos >= 25){
          soma = soma + 2500 + ((kit - 49) * 30) + ((suplementos - 25) * 15)
      }
      else if(kit >= 19 && suplementos >= 10){
          soma = soma + 1000 + ((kit - 19) * 30) + ((suplementos - 10) * 15)
      }
  if(sangue >= 49){
      soma = soma + 2500 
  }
  else{
      soma = soma + (sangue * 20)
  }
  }
  if(equipe == "preta"){
      // verifica kit e suplemento
      if(kit >= 103 && suplementos >= 52){
          soma = soma + 5000 + ((kit - 103) * 30) + ((suplementos - 52) * 15)
      }
      else if(kit >= 82 && suplementos >= 42){
          soma = soma + 4000 + ((kit - 82) * 30) + ((suplementos - 42) * 15)
      }
      else if(kit >= 52 && suplementos >= 26){
          soma = soma + 2500 + ((kit - 52) * 30) + ((suplementos - 26) * 15)
      }
      else if(kit >= 21 && suplementos >= 10){
          soma = soma + 1000 + ((kit - 21) * 30) + ((suplementos - 10) * 15)
      }
  if(sangue >= 52){
      soma = soma + 2500 
  }
  else{
      soma = soma + (sangue * 20)
  }
  }
  if(equipe == "roxa"){
    // verifica kit e suplemento
    if(kit >= 102 && suplementos >= 51){
        soma = soma + 5000 + ((kit - 102) * 30) + ((suplementos - 51) * 15)
    }
    else if(kit >= 82 && suplementos >= 41){
        soma = soma + 4000 + ((kit - 82) * 30) + ((suplementos - 41) * 15)
    }
    else if(kit >= 51 && suplementos >= 26){
        soma = soma + 2500 + ((kit - 51) * 30) + ((suplementos - 26) * 15)
    }
    else if(kit >= 20 && suplementos >= 10){
        soma = soma + 1000 + ((kit - 20) * 30) + ((suplementos - 10) * 15)
    }
if(sangue >= 51){
    soma = soma + 2500 
}
else{
    soma = soma + (sangue * 20)
}
}
if(equipe == "verde"){
    // verifica kit e suplemento
    if(kit >= 88 && suplementos >= 44){
        soma = soma + 5000 + ((kit - 88) * 30) + ((suplementos - 44) * 15)
    }
    else if(kit >= 70 && suplementos >= 35){
        soma = soma + 4000 + ((kit - 70) * 30) + ((suplementos - 35) * 15)
    }
    else if(kit >= 44 && suplementos >= 22){
        soma = soma + 2500 + ((kit - 44) * 30) + ((suplementos - 22) * 15)
    }
    else if(kit >= 18 && suplementos >= 9){
        soma = soma + 1000 + ((kit - 18) * 30) + ((suplementos - 9) * 15)
    }
if(sangue >= 44){
    soma = soma + 2500 
}
else{
    soma = soma + (sangue * 20)
}
}
if(equipe == "vermelha"){
    // verifica kit e suplemento
    if(kit >= 93 && suplementos >= 47){
        soma = soma + 5000 + ((kit - 93) * 30) + ((suplementos - 47) * 15)
    }
    else if(kit >= 74 && suplementos >= 38){
        soma = soma + 4000 + ((kit - 74) * 30) + ((suplementos - 38) * 15)
    }
    else if(kit >= 47 && suplementos >= 24){
        soma = soma + 2500 + ((kit - 47) * 30) + ((suplementos - 24) * 15)
    }
    else if(kit >= 19 && suplementos >= 9){
        soma = soma + 1000 + ((kit - 19) * 30) + ((suplementos - 9) * 15)
    }
if(sangue >= 47){
    soma = soma + 2500 
}
else{
    soma = soma + (sangue * 20)
}
}
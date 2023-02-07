const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");

const resultado = document.querySelector('.resultado');
const situacao = document.querySelector('.situacao');

const botaoCalcula = document.querySelector("#calcular");

const valorIMC = document.querySelector('.valorIMC');

function calculaImc(peso, altura) {
  return peso / (altura * altura);
}

botaoCalcula.addEventListener("click", (event) => {
  event.preventDefault();
  valorIMC.innerHTML = '';
  situacao.innerHTML = '';

  console.log(`Seu IMC é de ${calculaImc(peso.value, altura.value).toFixed(2)}`);
  resultado.style.display = 'block';
  valorIMC.innerHTML = `Seu IMC é de ${calculaImc(peso.value, altura.value).toFixed(2)} <br />`;
  
  if (calculaImc(peso.value, altura.value) < 18.5) {
    situacao.style.background = '#ec6d6d';
    situacao.innerHTML += 'Você está abaixo do peso ideal!';
  }
  if (calculaImc(peso.value, altura.value) > 18.5 && calculaImc(peso.value, altura.value) <= 25) {
    situacao.style.background = 'yellowgreen';
    situacao.innerHTML += 'Você está no seu peso ideal!';
  }
  if (calculaImc(peso.value, altura.value) > 25 && calculaImc(peso.value, altura.value) <= 30) {
    situacao.style.background = '#eeee57';
    situacao.innerHTML += 'Você está com sobrepeso!';
  }
  if (calculaImc(peso.value, altura.value) > 30 && calculaImc(peso.value, altura.value) <= 40) {
    situacao.style.background = '#ec3737';
    situacao.innerHTML += 'Você está com obesidade!';
  }
  if (calculaImc(peso.value, altura.value) > 40) {
    situacao.style.background = '#f71b1';
    situacao.innerHTML += 'Você está com obesidade mórbida, cuidado!';
  }
});
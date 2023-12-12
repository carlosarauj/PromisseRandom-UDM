function aleatorio(min, max){
  min *= 1000
  max *= 1000

  return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo){
  setTimeout(() => {
    console.log(msg)
  }, tempo)
}

esperaAi('Frase1', aleatorio(1, 3))
esperaAi('Frase2', aleatorio(1, 3))
esperaAi('Frase3', aleatorio(1, 3))
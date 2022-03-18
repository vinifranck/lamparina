let imglampada = document.createElement("img")
imglampada.src="./imagens/desligado.png"
document.body.appendChild(imglampada)
let imginterruptor = document.createElement("img")
imginterruptor.src="./imagens/off.png"
document.body.appendChild(imginterruptor)
imginterruptor.onclick=interruptor;
function interruptor() {
    if (imginterruptor.src.match("on")) {
      imginterruptor.src = "./imagens/off.png";
      imglampada.src = "./imagens/desligado.png"
      document.querySelector("body").style.backgroundColor= "black"
    }else{
      imginterruptor.src = "./imagens/on.png";
      imglampada.src = "./imagens/ligado.png"
      document.querySelector("body").style.backgroundColor= "white"
    }
}
0
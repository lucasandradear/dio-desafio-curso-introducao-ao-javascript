var entrada = document.getElementById('entrada')
var tarefas = document.getElementById('tarefas')

function setTarefa() {
  var paragrafo = document.createElement("p")
  var caixaMarcacao = document.createElement("input")
  caixaMarcacao.setAttribute("type", "checkbox")
  var valorEntrada = entrada.value
  var texto = document.createTextNode(valorEntrada)
  tarefas.appendChild(paragrafo)
  paragrafo.appendChild(caixaMarcacao)
  paragrafo.appendChild(texto)
}

var botaoConfirmar = document.getElementById('confirmar')
botaoConfirmar.addEventListener("click", setTarefa)

function pressEnter(evento) {
  if(evento.keyCode === 13) {
    evento.preventDefault()
    botaoConfirmar.click()
  }
}

entrada.addEventListener("keyup", pressEnter)
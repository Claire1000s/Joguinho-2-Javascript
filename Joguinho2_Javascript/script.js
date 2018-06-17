// Função para adicionar bolas na tela aleatoriamente.
function addBola()
{
	var bola = document.createElement("div"); // Cria um elemento novo no HTML.
	bola.setAttribute("class", "bola"); // Seta o atributo "Class" na div e dá o nome de "bola".

	var posX = Math.floor(Math.random() * 750); // Cria a posição em X onde a bola vai ser gerada aleatoriamente.
	var posY = Math.floor(Math.random() * 450); // Cria a posição em Y onde a bola vai ser gerada aleatoriamente.
 
	bola.setAttribute("style", "left: " + posX + "px; top: " + posY + "px;"); // Seta o atributo "style" com os valores X e Y aleatórios onde serão gerados as bolas.
	bola.setAttribute("onclick", "estourar(this)"); // Seta o atributo onclick com a função para estourar as bolas, passando o próprio elemento como parâmetro.

	document.body.appendChild(bola); // Cria a div class "bola" no elemento body.
}

// Função de estourar as bolas.
function estourar(obj)
{
	document.body.removeChild(obj); // Remove (destrói) a bola do elemento body.
}

// Função que executa um tempo para as bolas aparecerem.
function iniciar()
{
	setInterval(addBola, 1000); // Seta um tempo em milissegundos para a função addBola ser executada.
}
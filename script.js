let verMais = document.querySelector('button#more');

let myList = document.getElementById('myList');
let listChildren = myList.children;

let cardItem = listChildren[0];
let botaoItem = listChildren[1];

let cardCopy = cardItem.cloneNode(true);

// Ex 04

verMais.onmouseover = function() {
    verMais.style.cursor = 'pointer';
}

// Ex 01
verMais.onclick = function() {
    myList.appendChild(cardCopy);
    myList.insertBefore(cardCopy, botaoItem);
}

// Ex 02

let likesItem = document.querySelector('.numero-likes');
var clicks = 1;

let coracaoImagem = document.querySelector('.likes img')
coracaoImagem.style.cursor = 'pointer';

const botaoCoracaoImagem = function(elemento) {
    
    // Ex 04

    // Atualizando numero de likes
    clicks += 1;  
    console.log(clicks);

    likesItem.innerText = `${ clicks } likes`;

    // o 'this' passa o evento para o elemento 
    // contendo as caracteristicas do mesmo

    // atribui o que foi clicado a variavel 
    // elemento é o veneto 
    let coracaoImagem = elemento;

    // a sintaxe src acessa a o atrito src que o elemento que coracaoImagem 
    // guarda ao receber o click
    // dava pra acessar como 'coracaoImagem.width' que vem o conteudo também


    // verifica se ja ta imagem, causando alternância
    if (coracaoImagem.src.includes('/img/icons/heart.svg')) {
        coracaoImagem.src = 'img/red-heart.png';

    } else {
        coracaoImagem.src = '/img/icons/heart.svg'

    }
};

// Ex 03
let caixaBusca = document.querySelector('div.busca');

// coloca a shadow ao passar o mouse em cima
caixaBusca.onmouseover = function() {
    caixaBusca.classList.add('shadow');

    // retira a shadow ao tirar o mouse de cima
    caixaBusca.onmouseout = function() {
        caixaBusca.classList.remove('shadow');
    }
}










    



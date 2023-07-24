//declaração de todos os produtos da lista
let todosProdutos = [
    { nome: "Blusa Xadrez", preco: 139.90, imagem: "./img/feminino/feminino1.jpg", categoria: "feminino" },
    { nome: "Casaco Casual", preco: 218.80, imagem: "./img/feminino/feminino2.jpg", categoria: "feminino" },
    { nome: "Camisa Social", preco: 89.90, imagem: "./img/feminino/feminino3.jpg", categoria: "feminino" },
    { nome: "Camisa Bege", preco: 115.50, imagem: "./img/feminino/feminino4.jpg", categoria: "feminino" },
    { nome: "Camisa Estampada", preco: 149.90, imagem: "./img/feminino/feminino5.jpg", categoria: "feminino" },
    { nome: "Blusa Preta Estampada", preco: 139.90, imagem: "./img/feminino/feminino6.jpg", categoria: "feminino" },
    { nome: "Camisa Longa Estampada", preco: 99.90, imagem: "./img/infantil/infantil1.jpg", categoria: "infantil" },
    { nome: "Blusa Branca Estampada", preco: 45.39, imagem: "./img/infantil/infantil2.jpg", categoria: "infantil" },
    { nome: "Vestido Vermelho Xadrez", preco: 89.90, imagem: "./img/infantil/infantil3.jpg", categoria: "infantil" },
    { nome: "Camisa Laranja Estampada", preco: 45.39, imagem: "./img/infantil/infantil4.jpg", categoria: "infantil" },
    { nome: "Casaco Vermelho Estampado", preco: 99.90, imagem: "./img/infantil/infantil5.jpg", categoria: "infantil" },
    { nome: "Vestido Estampado", preco: 95.90, imagem: "./img/infantil/infantil6.jpg", categoria: "infantil" },
    { nome: "Camisa Xadrez", preco: 139.90, imagem: "./img/masculino/masculino1.jpg", categoria: "masculino" },
    { nome: "Camisa Longa Preta", preco: 218.80, imagem: "./img/masculino/masculino2.jpg", categoria: "masculino" },
    { nome: "Camisa Preta Estampada", preco: 89.90, imagem: "./img/masculino/masculino3.jpg", categoria: "masculino" },
    { nome: "Camisa Polo Cinza", preco: 115.50, imagem: "./img/masculino/masculino4.jpg", categoria: "masculino" },
    { nome: "Camisa Social Branca", preco: 149.90, imagem: "./img/masculino/masculino5.jpg", categoria: "masculino" },
    { nome: "Camisa Social Bege", preco: 139.90, imagem: "./img/masculino/masculino6.jpg", categoria: "masculino" },
]

const listaProdutos = document.querySelector(".lista-produtos");

//disposição em loop para todos os produtos da lista e adição da estrutura HTML a ser repetida

for (let i = 0; i < todosProdutos.length; i++) {
    const produto = todosProdutos[i];
    const blocoProduto = `
        <div class="bloco-produto esconder ${produto.categoria}">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="texto-item">
                <h1 class="nome-produto">${produto.nome}</h1>
                <p class="preco">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
                <button>Adicionar</button>
            </div>
        </div>
    `;
    listaProdutos.innerHTML += blocoProduto;
}

// parametro passado pelo botão (mesmo que as categorias)
function filtrarProduto(valor) {
    // classe do botão
    let botoes = document.querySelectorAll(".valor-botao");
    botoes.forEach((botao) => {
        // verificar se o valor é igual ao innerText
        if (valor.toUpperCase() == botao.innerText.toUpperCase()) {
            botao.classList.add("ativo");
        } else {
            botao.classList.remove("ativo");
        }
    });

    // selecionar todas os blocos
    let elementos = document.querySelectorAll(".bloco-produto");
    // loop por todos os blocos
    elementos.forEach((elemento) => {
        // mostrar todos os blocos ao clicar no botão todos
        if (valor == "todos") {
            elemento.classList.remove("esconder");
        } else {
            // verificar se elemento tem a classe de categoria
            if (elemento.classList.contains(valor)) {
                // mostrar elemento de acordo com a categoria
                elemento.classList.remove("esconder");
            } else {
                // esconder outros elementos
                elemento.classList.add("esconder")
            }
        };
    });
};

//pesquisar com enter na barra de input
document.getElementById("input-pesquisa").addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        pesquisar();
    };
});

//pesquisar ao apertar o botão
document.getElementById("pesquisar").addEventListener("click", pesquisar);

function pesquisar() {
    let inputPesquisa = document.getElementById("input-pesquisa").value;
    let elementosPesquisa = document.querySelectorAll(".nome-produto");
    let blocoPesquisa = document.querySelectorAll(".bloco-produto");

    //loop por todos os elementos
    elementosPesquisa.forEach((item, index) => {
        // checar se o texto da pesquisa corresponde a algum item
        if (item.innerText.toUpperCase().includes(inputPesquisa.toUpperCase())) {
            blocoPesquisa[index].classList.remove("esconder");
        } else {
            blocoPesquisa[index].classList.add("esconder");
        }
    });
};

// iniciar com todos os produtos
window.onload = () => {
    filtrarProduto("todos")
}
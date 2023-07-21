//declaração de todos os produtos da lista
let todosProdutos = [
    { nome: "Blusa Xadrez", preco: 139.90, imagem: "/", categoria: "feminino" },
    { nome: "Casaco Casual", preco: 218.80, imagem: "/img/feminino/feminino2.jpg", categoria: "feminino" },
    { nome: "Camisa Social", preco: 89.90, imagem: "/img/feminino/feminino3.jpg", categoria: "feminino" },
    { nome: "Camisa Bege", preco: 115.50, imagem: "/img/feminino/feminino4.jpg", categoria: "feminino" },
    { nome: "Camisa Estampada", preco: 149.90, imagem: "/img/feminino/feminino5.jpg", categoria: "feminino" },
    { nome: "Blusa Preta Estampada", preco: 139.90, imagem: "/img/feminino/feminino6.jpg", categoria: "feminino" },
    { nome: "Camisa Longa Estampada", preco: 99.90, imagem: "/img/infantil/infantil1.jpg", categoria: "infantil" },
    { nome: "Blusa Branca Estampada", preco: 45.39, imagem: "/img/infantil/infantil2.jpg", categoria: "infantil" },
    { nome: "Vestido Vermelhor Xadrez", preco: 89.90, imagem: "/img/infantil/infantil3.jpg", categoria: "infantil" },
    { nome: "Camisa Laranja Estampada", preco: 45.39, imagem: "/img/infantil/infantil4.jpg", categoria: "infantil" },
    { nome: "Casaco Vermelho Estampado", preco: 99.90, imagem: "/img/infantil/infantil5.jpg", categoria: "infantil" },
    { nome: "Vestido Estampado", preco: 95.90, imagem: "/img/infantil/infantil6.jpg", categoria: "infantil" },
    { nome: "Camisa Xadrez", preco: 139.90, imagem: "/img/masculino/masculino1.jpg", categoria: "masculino" },
    { nome: "Camisa Longa Preta", preco: 218.80, imagem: "/img/masculino/masculino2.jpg", categoria: "masculino" },
    { nome: "Camisa Preta Estampada", preco: 89.90, imagem: "/img/masculino/masculino3.jpg", categoria: "masculino" },
    { nome: "Camisa Polo Cinza", preco: 115.50, imagem: "/img/masculino/masculino4.jpg", categoria: "masculino" },
    { nome: "Camisa Social Branca", preco: 149.90, imagem: "/img/masculino/masculino5.jpg", categoria: "masculino" },
    { nome: "Camisa Social Bege", preco: 139.90, imagem: "/img/masculino/masculino6.jpg", categoria: "masculino" },
];

const listaProdutos = document.querySelector(".lista-produtos");

//disposição em loop para todos os produtos da lista e adição da estrutura HTML a ser repetida
for (let i = 0; i < todosProdutos.length; i++) {
    const produto = todosProdutos[i];
    const blocoProduto = `
        <div class="bloco-produto esconder ${produto.categoria}">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div class="texto-item">
                <h1 class="titulo">${produto.nome}</h1>
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                <button>Adicionar</button>
            </div>
        </div>
    `;
    listaProdutos.innerHTML += blocoProduto;
}

// criar função para filtrar as categorias dos produtos
// function filtrarProduto(valor) {
//     // classe do seletor
//     let seletor = document.querySelectorAll(".valor-botao")
//     console.log(seletor)
// }


// inicialmente mostrar todos os itens ao carregar a pagina
// window.onload = () => {
//     filtrarProduto('all')
// }
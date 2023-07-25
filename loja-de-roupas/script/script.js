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
            <img class="img-do-produto" src="${produto.imagem}" alt="${produto.nome}">
            <h1 class="nome-produto">${produto.nome}</h1>
            <p class="preco-produto">R$ ${produto.preco.toFixed(2)}</p>
            <button class="adicionar-sacola id="adicionar-sacola">Adicionar</button>
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
    filtrarProduto("todos");
};

// modal
let abrirModalSacola = document.querySelector("#abrir-modal");
let modal = document.querySelector(".modal-container");
let fecharModal = document.querySelector("#fechar-modal");

// document.getElementById("pesquisar").addEventListener("click", pesquisar);

// abrir modal
abrirModalSacola.onclick = () => {
    modal.classList.add("selecionado");
}
function abrirModal() {
    modal.classList.add("selecionado")
}

// fechar modal
fecharModal.onclick = () => {
    modal.classList.remove("selecionado");
}

// adicionando funcionalidade no modal
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// criando a função ready
function ready() {
    // remover itens da sacola de compras
    let removeCartButtons = document.getElementsByClassName("delete-icon")
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    // mudança na quantidade
    let quantityInputs = document.getElementsByClassName("qnt-itens");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    // adicionar a sacola
    let addCart = document.getElementsByClassName("adicionar-sacola");
    for (let i = 0; i < addCart.length; i++) {
        let button = addCart[i];
        button.addEventListener("click", addCartClicked);
        button.addEventListener("click", abrirModal)
    }
    // botão de comprar agora
    document.getElementsByClassName("botao-compra")[0].addEventListener("click", botaoCompraClicado);
}

// função do botão de compra
function botaoCompraClicado() {
    alert("Seu pedido foi realizado");
    let cartContent = document.getElementsByClassName("modal-conteudo")[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
}

// função para remover itens do carrinho
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

// função para mudança na quantidade
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal()
}

// adicionar produto a sacola
function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("nome-produto")[0].innerText;
    let price = shopProducts.getElementsByClassName("preco-produto")[0].innerText;
    let productImage = shopProducts.getElementsByClassName("img-do-produto")[0].src;
    addProductToCart(title, price, productImage);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    let cartShopBox = document.createElement("div");
    cartShopBox.classList.add("itens-sacola");
    let cartItems = document.getElementsByClassName("modal-conteudo")[0];
    let cartItemsNames = cartItems.getElementsByClassName("titulo-produto-bloco");

    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText === title) {
            alert("Você já adicionou esse produto na sacola de compras");
            return
        }
    }

    let cartBoxContent = `
        <img src="${productImg}" class="img-sacola">
        <div class="detalhes-bloco">
        <div class="titulo-produto-bloco">${title}</div>
        <div class="preco-bloco">${price}</div>
        <input type="number" value="1" class="qnt-itens">
        </div>
        <i class="fa-regular fa-trash-can delete-icon"></i>
    `;

    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("delete-icon")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("qnt-itens")[0].addEventListener("change", quantityChanged);
}   

// atualizar o valor total
function updateTotal() {
    let cartContent = document.getElementsByClassName("modal-conteudo")[0];
    let cartBoxes = cartContent.getElementsByClassName("itens-sacola");
    let total = 0;

    for (let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("preco-bloco")[0];
        let quantityElement = cartBox.getElementsByClassName("qnt-itens")[0];
        let price = parseFloat(priceElement.innerText.replace("R$ ", ""));
        let quantity = quantityElement.value;
        total += price * quantity;
    }

    // se o preço tiver valor decimal
    total = Math.ceil(total * 100) / 100;
    document.getElementsByClassName("preco-total")[0].innerText = "R$ " + total.toFixed(2);
}
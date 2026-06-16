// ==========================================
// FEIRA DA BIBI
// Sistema de catálogo e pedidos WhatsApp
// ==========================================



// Número do WhatsApp da empresa
const telefone = "5585999194318";




// ================================
// CATÁLOGO DE FRUTAS
// ================================


const frutas = [


    {
        nome: "Banana Maçã",
        preco: "R$ 6,50/kg",
        imagem: "banana.jpg"
    },


    {
        nome: "Abacaxi",
        preco: "R$ 7,50/unidade",
        imagem: "abacaxi.jpg"
    },


    {
        nome: "Morango",
        preco: "R$ 10,00/bandeja",
        imagem: "morango.jpg"
    },


    {
        nome: "Uva Roxa",
        preco: "R$ 10,00/kg",
        imagem: "uva.jpg"
    },


    {
        nome: "Manga Tommy",
        preco: "R$ 5,50/kg",
        imagem: "manga.jpg"
    },


    {
        nome: "Abacate",
        preco: "R$ 4,50/kg",
        imagem: "abacate.jpg"
    },


    {
        nome: "Melancia",
        preco: "Consultar valor",
        imagem: "melancia.jpg"
    },


    {
        nome: "Pitaya",
        preco: "R$ 30,00/kg",
        imagem: "pitaya.jpg"
    }


];







// ================================
// GERAR CATÁLOGO AUTOMATICAMENTE
// ================================


const catalogo = document.getElementById("catalogo");



frutas.forEach(fruta => {



    catalogo.innerHTML += `


    <div class="fruta">


        <img 
        src="imagens/frutas/${fruta.imagem}" 
        alt="${fruta.nome}">


        <h3>
            ${fruta.nome}
        </h3>


        <p>
            ${fruta.preco}
        </p>



        <button onclick="pedir('${fruta.nome}')">

            Pedir

        </button>



    </div>



    `;



});







// ================================
// PEDIDO PELO WHATSAPP
// ================================


function pedir(fruta){



    const mensagem = 
`Olá, Feira da Bibi! 🍎

Gostaria de fazer um pedido:

🍓 Produto: ${fruta}

Poderiam informar a disponibilidade?`;



    const mensagemFormatada =
    encodeURIComponent(mensagem);



    const link =
    `https://wa.me/${telefone}?text=${mensagemFormatada}`;



    window.open(link,"_blank");



}








// ================================
// BOTÃO PRINCIPAL WHATSAPP
// ================================


function abrirWhatsApp(){



    const mensagem =
    `Olá, Feira da Bibi! 🍎

Gostaria de fazer um pedido de frutas.`;



    const link =
    `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;



    window.open(link,"_blank");


}

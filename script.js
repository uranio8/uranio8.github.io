// ==================================
// FEIRA DA BIBI
// Sistema de pedidos pelo WhatsApp
// ==================================


// Número do WhatsApp da empresa
const telefone = "5585999194318";



// Função chamada pelos botões "Pedir"
function pedir(fruta) {


    let mensagem = 
    `Olá, Feira da Bibi! 🍎%0A%0A
    Gostaria de fazer um pedido:%0A
    🍓 Produto: ${fruta}%0A%0A
    Poderiam me informar a disponibilidade?`;



    let link = 
    `https://wa.me/${telefone}?text=${mensagem}`;



    window.open(link, "_blank");


}




// Mensagem inicial para botão principal

function abrirWhatsApp(){

    let mensagem =
    `Olá, Feira da Bibi! 🍎%0A
    Gostaria de fazer um pedido de frutas.`;



    let link =
    `https://wa.me/${telefone}?text=${mensagem}`;



    window.open(link,"_blank");

}

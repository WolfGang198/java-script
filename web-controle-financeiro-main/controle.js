const form = document.querySelector("#form");
const descrTransacaoInput = document.querySelector("#descricao");
const valorTransacaoInput = document.querySelector("#montante");
const balancoH1 = document.querySelector("#balanco");
const receitasP = documento.querySelector("#din-positivo");
const despesasP = documento.querySelector("#din-negativo");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("ok");
    const descrTransacao = descrTransacaoInput.value.trim();
    const valorTransacao = valorTransacaoInput.value.trim();

    if (descrTransacao === "" || valorTransacao === ""){
        alert("Informe os dados da transação!");
        return;
    }

    const idTransacao = parseInt(Math.random() * 10000);

    const transacao = {
        id: idTransacao,
        descricao: descrTransacao,
        valor: parseFloat(valorTransacao),
    }

    somaAoSaldo(transacao);
    somaReceitaOuDespesa(transacao);

    descrTransacaoInput.value = "";
    valorTransacaoInput.value = "";
});

function somaAoSaldo(transacao){
    //R$0.00
    let total = balancoH1.innerHTML.replace("R$", "");
    //0.00
    total = parseFloat(total);
    total = total + transacao.valor;
    alert(total);
    balancoH1.innerHTML = `R$${total.toFixed(2)}`;
}

function somaReceitaOuDespesa(transacao){
    const elemento = transacao.valor > 0 ? receitasP : despesasP;
    const substituir = transacao.valor > 0 ? "+ R$" : "- R$";
    let valorAtual = elemento.innerHTML.replace(substituir, "");
    valorAtual = parseFloat(valorAtual);
    valorAtual = valorAtual + Math.abs(transacao.valor);
    elemento.innerHTML = `${substituir} ${valorAtual}`;
}
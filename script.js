const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  

function buscaCortePorId (cut){
    for (let i = 0; i < barbearia.cortes.length; i++) {
        if (barbearia.cortes[i].id === cut) {
            return barbearia.cortes[i];
        }
    }
    return "Corte não encontrado"
}

function buscaBarbaPorId(beard) {
    for(let i = 0; i < barbearia.barbas.length; i++) {
        if(barbearia.barbas[i].id === beard) {
            return barbearia.barbas[i];
        }
    }
    return 'Barba não encontrada'
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true) {
        return "Estamos abertos"
    }
    return "Estamos fechados"
}

function retornaTodosCortes() {
    barbearia.cortes
    return  barbearia.cortes
}

function retornaTodasBarbas() {
    barbearia.barbas
    return barbearia.barbas
}

function criaPedido(nameCustomer, cutId, beardId) {
    const cuts = buscaCortePorId(cutId);
    const beards = buscaBarbaPorId(beardId);
    const requestedObject = {
        nome: nameCustomer,
        pedidoCorte: cuts.tipo,
        pedidoCortePreco: cuts.valor,
        pedidoBarba: beards.tipo,
        pedidoBarbaPreco: beards.valor,
    }
    return requestedObject
}

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor; 
        }
    }
    return lista;  
}

function calculaTotal(pedido) {
    let cutValue = pedido.pedidoCortePreco;
    let beardValue = pedido.pedidoBarbaPreco;
    let soma = cutValue + beardValue;
    return soma;
}

  
  

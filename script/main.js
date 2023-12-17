
let inputNovaTarefa = document.querySelectorAll(".inputNovaTarefa");
let btnAddTarefa = document.querySelectorAll(".btnAddTarefa");
let listaTarefas = document.querySelectorAll(".listaTarefas");

let janelaEdicao = document.querySelector("#janelaEdicao");
let janelaEdicaoFundo = document.querySelector("#janelaEdicaoFundo");
let janelaEdicaoBtnFechar = document.querySelector("#janelaEdicaoBtnFechar");

let btnAtualizarTarefa = document.querySelector("#btnAtualizarTarefa");
let idTarefaEdicao = document.querySelector("#idTarefaEdicao");
let inputTarefaNomeEdicao = document.querySelector("#inputTarefaNomeEdicao");



function adicionarTarefa(tarefa, lista, input) {
    let li = criarTagLi(tarefa);
    lista.appendChild(li);
    input.value = ''; // Limpar o valor do input após adicionar a tarefa
}


function gerarId() {
    return Math.floor(Math.random() * 3000);
}


function criarTagLi(tarefa) {
    let li = document.createElement("li");
    li.id = tarefa.id;

    // Criação de elementos para a tarefa
    let span = document.createElement("span");
    span.classList.add("textoTarefa");
    span.innerHTML = tarefa.nome;

    let div = document.createElement("div");

    let btnEditar = document.createElement("button");
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = `<i class="fa fa-edit"></i>`;

    btnEditar.addEventListener('click', function() {
        editar(tarefa.id);
    });

    let btnExcluir = document.createElement("button");
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = `<i class="fa fa-trash"></i>`;

    btnExcluir.addEventListener('click', function() {
        excluir(tarefa.id);
    });

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}



function editar(idTarefa) {
    let li = document.getElementById(''+ idTarefa + '');

    if(li) {
        // Colocar o titulo do retangulo de editar sendo o id
        idTarefaEdicao.innerHTML = '#' + idTarefa;

        inputTarefaNomeEdicao.value = li.querySelector('.textoTarefa').innerHTML;

        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!');
    }
}



function excluir(idTarefa) {
    let confirmacao = window.confirm("Tem certeza que deseja excluir? ");

    if(confirmacao) {
        let li = document.getElementById(''+idTarefa+'');
        
        if(li) {
            li.parentNode.removeChild(li);
        }
    }
}



function alternarJanelaEdicao() {
    // toggle('abrir') é um método da propriedade classList que alterna a presença da classe 'abrir'. Se a classe 'abrir' já estiver presente, ela será removida; se não estiver presente, será adicionada

    // cada vez que alternarJanelaEdicao() é chamada, ela alterna a presença da classe 'abrir' nesses elementos, o que pode resultar em mostrar ou ocultar a janela de edição e o fundo correspondente

    // "toggle" em inglês significa "alternar" ou "trocar"
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}




inputNovaTarefa.forEach(function(input, index) {
    input.addEventListener("keypress", function(e) {
        if( e.keyCode == 13) {
            let tarefa = {
                nome: input.value,
                id: gerarId()
            };
            adicionarTarefa(tarefa, listaTarefas[index], input);
        };
    });
});



btnAddTarefa.forEach(function(btn, index) {
    btn.addEventListener("click", function(e) {
        let tarefa = {
            nome: inputNovaTarefa[index].value,
            id: gerarId()
        };
        adicionarTarefa(tarefa, listaTarefas[index], inputNovaTarefa[index]);
    });
});



janelaEdicaoBtnFechar.addEventListener("click", (e) => {
    alternarJanelaEdicao();
});



btnAtualizarTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    let idTarefa = idTarefaEdicao.innerHTML.replace('#', '');

    let tarefa = {
        nome: inputTarefaNomeEdicao.value,
        id: idTarefa
    };

    let tarefaAtual = document.getElementById(''+idTarefa+'');

    if(tarefaAtual) {
        let li = criarTagLi(tarefa);
        tarefaAtual.parentNode.replaceChild(li, tarefaAtual);
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!');
    } 
});

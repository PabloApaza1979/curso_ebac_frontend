$('form').on('submit', function(e) {
    e.preventDefault();

    const tarefaCadastrada = $('#cadastro-tarefa').val();
    const novaTarefa = $('<li></li>').text(tarefaCadastrada);

    $('ul').append(novaTarefa);
    $('#cadastro-tarefa').val('');
})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('tarefa-adicionada')
})


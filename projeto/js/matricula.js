var botaoConfirmar = document.querySelector('.botao-matricula');
var tdTotalCursos = document.querySelector('.js-total-de-cursos');
var tdTotalHoras = document.querySelector('.js-total-de-horas');
var tabelaCursos = document.querySelector('table');

var totalCursos = 0;
var totalHoras = 0;

tabelaCursos.onchange = function(event) {
    var checkbox = event.target;
    if (checkbox.checked) {
        // acrescentar 1 ao total de cursos
        totalCursos++;
        // acrescentar ao total de horas a quantidade de horas do curso selecionado
        totalHoras += parseInt(checkbox.value);
    }
    else {
        // substrair 1 do total de cursos
        totalCursos--;
        // subtrair do total de horas a quantidade de horas do curso desmarcado
        totalHoras -= parseInt(checkbox.value);
    }

    tdTotalCursos.textContent = totalCursos + ' curso(s)';
    tdTotalHoras.textContent = totalHoras + 'h';
}


botaoConfirmar.onclick = function() {
    if (totalCursos == 0) {
        alert('Nenhum curso selecionado!');
    }
    else {
        alert('Matrícula confirmada com sucesso!');
        window.location = 'index.html';
    }
}